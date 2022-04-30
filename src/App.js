import "./App.scss";
import challenge from "./data/challenge.json";
import Result from "./components/Result/Result";
import { useState } from "react";
import ButtonContainer from "./components/Solution/ButtonContainer";

function App() {
	/**
	 * This is super hacky but the purpose of this function is to avoid sending any direct references to solutions 
	 * so that students cannot accidentally mutate object or array arguments.
	 * @param {*} args
	 * @param {boolean} hasMultipleArgs
	 * @param {function} callback
	 * @returns {string} result from callback
	 */
	const processResult = (args, hasMultipleArgs, callback) => {
		const argsCopy = Array.isArray(args) ? [...args] : args;
		if (hasMultipleArgs) {
			/* Hey! I made this and I don't think it's great! 
			If you can think of a cleaner way to do this while maintaining functionality and immutability PLEASE add your own changes! */
			const immutableCopy = argsCopy.map((arg) => {
				if (Array.isArray(arg)) return [...arg];
				else if (typeof arg === 'object') return {...arg}
				return arg;
			});
			return JSON.stringify(callback(...immutableCopy));
		} else if (Array.isArray(argsCopy) || typeof arg === 'object') {
			return JSON.stringify(callback(...argsCopy));
		}
		return JSON.stringify(callback(argsCopy));
	};

	const handleTestCases = (callback) => {
		setResults([]);
		setTimeout(() => {
			const resultsArr = challenge.testcases.map((testcase, index) => {
				let result = processResult(
					testcase.input,
					challenge.hasMultipleArgs,
					callback
				);
				let expected = JSON.stringify(testcase.expectedOutput);
				return (
					<Result
						hasMultipleArgs={challenge.hasMultipleArgs}
						input={testcase.input}
						expected={expected}
						result={result}
						passed={result === expected}
						index={index}
						key={index}
					/>
				);
			});
			setResults(resultsArr);
		}, 4);
	};
	const [results, setResults] = useState([]);
	return (
		<section className="challenge">
			<div className="challenge__animation-container">
				<h1 className="challenge__title">{challenge.title}</h1>
				<p className="challenge__description">
					{challenge.description}
				</p>
				<ButtonContainer handler={handleTestCases} />
				<div className="challenge__container">{results}</div>
			</div>
		</section>
	);
}

export default App;

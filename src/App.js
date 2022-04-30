import "./App.scss";
import challenge from "./data/challenge.json";
import Result from "./components/Result/Result";
import { useState } from "react";
import ButtonContainer from "./components/Solution/ButtonContainer";

function App() {
	const handleTestCases = (callback) => {
		setResults([]);
		setTimeout(() => {
			const resultsArr = challenge.testcases.map((testcase, index) => {
				let result = challenge.hasMultipleArgs ? JSON.stringify(callback(...testcase.input)) : JSON.stringify(callback(testcase.input));
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

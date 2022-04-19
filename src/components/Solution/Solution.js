import "./Solution.scss";
import Button from "../Button/Button";
import Result from "../Result/Result";
import { useState } from "react";

const Solution = ({ solutionNum, solutionFunction, testcases }) => {
	const handleTestCases = () => {
		const resultsArr = testcases.map((testcase, index) => {
			let result = String(solutionFunction(testcase.input));
			let expected = String(testcase.expectedOutput);
			return (
				<Result
					input={testcase.input}
					expected={expected}
					result={result}
					passed={result === expected}
					key={index}
				/>
			);
		});
		setResults(resultsArr);
	};
	const [results, setResults] = useState([]);
	return (
		<section className="solution">
			<Button
				text={`Solution ${solutionNum + 1}`}
				handler={handleTestCases}
			/>
			{results}
		</section>
	);
};

export default Solution;

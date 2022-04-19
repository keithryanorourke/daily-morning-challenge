import "./Result.scss";

const Result = ({ input, expected, result, passed }) => {
	return (
		<section className="result">
			<div className="result__container">
				<div>Input:</div>
				<div>{JSON.stringify(input)}</div>
			</div>
			<div className="result__container">
				<div>Expected Output:</div>
				<div>{expected}</div>
			</div>
			<div className="result__container">
				<div>Result:</div>
				<div>{result + (passed ? " ✅" : " ❌")}</div>
			</div>
		</section>
	);
};

export default Result;

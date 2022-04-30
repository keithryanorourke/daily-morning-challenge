import "./Result.scss";

const Result = ({
	input,
	expected,
	result,
	passed,
	index,
	hasMultipleArgs,
}) => {
	return (
		<section className={`result result--${index + 1}`}>
			<div>
				<div className="result__label">Input:</div>
				<div>
					{hasMultipleArgs
						? input.map((arg, index) => <span>{JSON.stringify(arg)}{index < input.length-1 ? ", " : ""}</span>)
						: JSON.stringify(input)}
				</div>
			</div>
			<div>
				<div className="result__label">Expected Output:</div>
				<div>{expected}</div>
			</div>
			<div>
				<div className="result__label">Result:</div>
				<div>{result + (passed ? " ✅" : " ❌")}</div>
			</div>
		</section>
	);
};

export default Result;

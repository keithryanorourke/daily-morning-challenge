import "./ButtonContainer.scss";
import Button from "../Button/Button";
import Result from "../Result/Result";
import { useState } from "react";
import {
	solution1,
	solution2,
	solution3,
} from "../../solution-functions/solution-functions";

const ButtonContainer = ({ handler }) => {
	const solutionFunctions = [solution1, solution2, solution3];
	
	return (
		<section className="button-container">
			{solutionFunctions.map((solutionFunction, index) => {
				return (
					<Button
						text={`Solution ${index + 1}`}
						handler={handler}
						callback={solutionFunction}
					/>
				);
			})}
		</section>
	);
};

export default ButtonContainer;

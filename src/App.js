import "./App.scss";
import challenge from "./data/challenge.json";
import Solution from "./components/Solution/Solution";
import {
	solution1,
	solution2,
	solution3,
} from "./solution-functions/solution-functions";


function App() {
  const solutionFunctions = [solution1, solution2, solution3];
	return (
    <section className="challenge">
      <h1 className="challenge__title">{challenge.title}</h1>
      <p className="challenge__description">{challenge.description}</p>
      <div className="challenge__container">
        {solutionFunctions.map((solutionFunction, index) => {
          return <Solution key={index} solutionNum={index} solutionFunction={solutionFunction} testcases={challenge.testcases} />;
        })}
      </div>
    </section>
	);
}

export default App;

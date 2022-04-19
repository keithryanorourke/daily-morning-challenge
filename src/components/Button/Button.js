import "./Button.scss";

const Button = ({ text, handler, callback }) => {
	return (
		<button className="button" onClick={() => handler(callback)}>
			{text}
		</button>
	);
};

export default Button;

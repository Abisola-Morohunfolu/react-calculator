import classes from './Button.module.css';

const Button = ({ value, type, id, clicked }) => {
	return (
		<button className={`${classes.Button} ${id}`} onClick={() => clicked(type, value)}>
			{value}
		</button>
	);
};

export default Button;

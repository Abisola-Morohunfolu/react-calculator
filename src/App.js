import './App.css';
import { buttonData } from './utils/buttonData';
import Button from './components/Button/Button';
import { useState } from 'react';
import { isOperator } from './utils/checkIfStringIsOperator';
import { tokenizeString } from './utils/tokenizeString';
import { calculate } from './utils/calculateValue';

function App() {
	const [output, setOutput] = useState('');
	const [operationType, setOperationType] = useState('');
	const [computedInput, setComputedInput] = useState('');

	const onInputButton = (type, value) => {
		// when empty, only subtract is the only valid operator
		if (
			(output === '' && type === 'operator' && value !== '-') ||
			(output === '' && type === 'equality')
		)
			return;

		setComputedInput('');

		// clear output
		if (type === 'clear') return setOutput('');

		if (output === '' || output === '0') {
			setOutput(value);
			return setOperationType(type);
		}

		// reset a prev operation
		if (operationType === 'equality' && type === 'digit') {
			setOperationType(type);
			return setOutput(value);
		}

		// convert output to array
		const outputArray = output.split('');

		const lastInput = outputArray[outputArray.length - 1];

		// check if last input is an operator
		const isOperatorValue = isOperator(lastInput);

		// avoid adding another operator/calculating the value when the last input is an operator
		// if the operator is '-' allow it
		if (type === 'operator' && isOperatorValue && value !== '-') return;

		if (value === '-' && lastInput === '-') return;

		if (type === 'equality' && isOperatorValue) return;

		// remove leading zeros
		if (outputArray.length > 1 && lastInput === '0') {
			outputArray.pop();
		}

		// compute values
		if (type === 'equality' && output && !isOperatorValue) {
			setComputedInput(output);
			const tokens = calculate(tokenizeString(output));
			setOutput(String(tokens));
			return setOperationType('equality');
		}

		setOutput([...outputArray, value].join(''));
		setOperationType(type);
	};

	return (
		<div className="App">
			<div className="calculator">
				<div className="output">
					<h2>{output}</h2>
					{computedInput && <p>{computedInput}</p>}
				</div>
				<div className="button-container">
					{buttonData.map((btn) => (
						<Button
							key={btn.id}
							type={btn.type}
							value={btn.value}
							id={btn.id}
							clicked={onInputButton}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;

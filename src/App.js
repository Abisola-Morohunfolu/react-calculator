import './App.css';
import { buttonData } from './utils/buttonData';
import Button from './components/Button/Button';
import { useState } from 'react';
import { isOperator } from './utils/checkIfStringIsOperator';

function App() {
	const [output, setOutput] = useState('');

	const onInputButton = (type, value) => {
		// when empty, only subtract is the only valid operator
		if (
			(output === '' && type === 'operator' && value !== '-') ||
			(output === '' && type === 'equality')
		)
			return;

    // clear output
		if (type === 'clear') return setOutput('');

		if (output === '') return setOutput(value);

		const outputArray = output.split('');


    // avoid adding another operator/calculating the value when the last input is an operator
		if (type === 'operator' && isOperator(outputArray[outputArray.length - 1])) return;

		if (type === 'equality' && isOperator(outputArray[outputArray.length - 1])) return;

		setOutput([...outputArray, value].join(''));

		// if (type === 'equality')
	};
	return (
		<div className="App">
			<div className="calculator">
				<div className="output">{output}</div>
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

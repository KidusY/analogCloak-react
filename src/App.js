import './App.css';
import { useState } from 'react';
import Clock from './clock';
const getTime = () => {
	let CurrentTime = new Date();
	let currentSecond = CurrentTime.getSeconds() / 60;
	let currentMinute = (currentSecond + CurrentTime.getMinutes()) / 60;
	let currentHour = (currentMinute + CurrentTime.getHours()) / 12;

	return {
		currentHour,
		currentMinute,
		currentSecond
	};
};

function App() {
	const [ currentSec, setCurrentSec ] = useState(getTime().currentSecond * 360);
	const [ currentMin, setCurrentMin ] = useState(getTime().currentMinute * 360);
	const [ currentHour, setCurrentHour ] = useState(getTime().currentHour * 360);

	setInterval(() => {
		let CurrentSec = getTime().currentSecond;
		let CurrentMin = getTime().currentMinute;
		let CurrentHour = getTime().currentHour;

		let currentSecAng = CurrentSec * 360;
		let currentMinAng = CurrentMin * 360;
		let currentHourAng = CurrentHour * 360;

		setCurrentSec(currentSecAng);
		setCurrentMin(currentMinAng);
    setCurrentHour(currentHourAng);
    
	}, 1000);

	return (
		<div className="App">
			<Clock currentSec={currentSec} currentMin={currentMin} currentHour={currentHour} />
		</div>
	);
}

export default App;

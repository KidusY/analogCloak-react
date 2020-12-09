import React from 'react';

export const Clock = (props) => {
	return (
		<div>
			<div className="clock">
				<div
					className="shortHand"
					style={{
						transform: `rotate(${props.currentHour}deg)`
					}}
				/>
				<div
					className="longHand"
					style={{
						transform: `rotate(${props.currentMin}deg)`
					}}
				/>
				<div
					className="secondHand"
					style={{
						transform: `rotate(${props.currentSec}deg)`
					}}
				/>
				<div className="number number12">
					<span>12</span>
				</div>
				<div className="number number3">
					<span>3</span>
				</div>

				<div className="number number6">
					<span>6 </span>
				</div>
				<div className="number number9">
					<span>9</span>{' '}
				</div>
			</div>
		</div>
	);
};

export default Clock;

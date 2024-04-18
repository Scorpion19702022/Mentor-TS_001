import React from 'react'

interface resultProps {
	bmiResult: number
}

const Results: React.FC<resultProps> = ({ bmiResult }) => {
	return (
		<div>
			<h1>Twoje BMI: {bmiResult}</h1>
		</div>
	)
}

export default Results

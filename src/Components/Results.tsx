import React from 'react'

import styles from './Results.module.css'

interface resultProps {
	bmiResult: number
}

const Results: React.FC<resultProps> = ({ bmiResult }) => {
	return (
		<div className={styles.box_result}>
			<h1 className={styles.heading_result}>
				Twoje BMI: <span className={styles.span_result}>{bmiResult}</span>
			</h1>
		</div>
	)
}

export default Results

import React, { useState } from 'react'
import styles from './App.module.css'
import Inputs from './Components/Inputs'
import Results from './Components/Results'

const App = () => {
	const [bmiResult, setBmiResult] = useState<number>(0)

	const handleResult = (result: number) => {
		setBmiResult(result)
	}

	const handleClean = () => {
		setBmiResult(0)
		console.log('object')
	}

	console.log(bmiResult)

	return (
		<div className={styles.wrapper_app}>
			<div className={styles.wrapper_bmi}>
				<Inputs saveResult={handleResult} test={'10'} clenResult={handleClean} />
				<Results bmiResult={bmiResult} />
			</div>
		</div>
	)
}

export default App

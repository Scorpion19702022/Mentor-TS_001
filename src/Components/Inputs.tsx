import React, { useState } from 'react'

import styles from './Inputs.module.css'

interface inputProps {
	saveResult: (result: number) => void
	test: string
	clenResult: () => void
}

const Inputs: React.FC<inputProps> = ({ saveResult, clenResult }) => {
	const [tall, setTall] = useState<number>(0)
	const [weight, setWeight] = useState<number>(0)

	const handleChangeTall: React.ChangeEventHandler<HTMLInputElement> | undefined = e => {
		setTall(Number(e.target.value))
	}
	const handleChangeWeight: React.ChangeEventHandler<HTMLInputElement> | undefined = e => {
		setWeight(Number(e.target.value))
	}

	// setResult((dataWeight / Math.pow(dataTall / 100, 2)).toFixed(2))

	const handleClenData = () => {
		setTall(0)
		setWeight(0)
	}

	const handleResultBmi = () => {
		const results = +(weight / Math.pow(tall / 100, 2)).toFixed(2)
		saveResult(results)
		handleClenData()
	}

	// console.log(bmiResult)

	return (
		<div className={styles.wrapper_inputs}>
			<label className={styles.label}>Podaj wzrost:</label>
			<input className={styles.input} type='number' onChange={handleChangeTall} value={tall} />
			<label className={styles.label}>Podaj wagę</label>
			<input className={styles.input} type='number' onChange={handleChangeWeight} value={weight} />
			<div className={styles.box_btns}>
				<button onClick={handleResultBmi}>Sprawdź</button>
				<button onClick={() => clenResult()}>Wyczyść</button>
			</div>
		</div>
	)
}

export default Inputs

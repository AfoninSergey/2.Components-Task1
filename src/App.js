import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const isValueVaild = value;

	const onInputButtonClick = () => {
		const promptValue = prompt('', '').trim();
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValue('');
		} else {
			setValue(promptValue);
			setError('');
		}
	};


	const onAddButtonClick = () => {
		const id = Date.now();
		const date = new Date().toLocaleString().replace(',', '')


		setList((list) => [...list, { id, value,  date}]);

		setValue('');
		setError('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValueVaild}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{!list.length ? (
					<p className={styles['no-margin-text']}>
						Нет добавленных элементов
					</p>
				) : (
					<ul className={styles.list}>
						{list.map(({ id, value, date}) => (
							<li key={id} className={styles['list-item']}>
								{date} {value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

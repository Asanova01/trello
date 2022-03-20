import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addTodo } from '../../store/todos-slice'
import image from '../../image/delete.png'


const Todo = () => {
	const dispath = useDispatch()
	const [value, setValue] = useState('')
	const [showTodo, setShowTodo] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()
		if (value.trim().length > 0) {
			const columnData = {
				title: value,
				id: Math.random().toString(),
				tasks: [],
			}
			dispath(addTodo(columnData))
		}
		setValue('')
	}

	const HidercartHandler = () => {
		setShowTodo(false)
	}

	const toogleHandler = () => {
		setShowTodo((prevState) => !prevState)
		setShowTodo(true)
	}

	return (
		<>
			<InputContainer>
				{showTodo ? (
					<div className='caption'>
						<div>
							<input
								placeholder='Ввести заголовок списка'
								type='text'
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</div>
						<div className='addcart'>
							<button onClick={onSubmit}>
								Добавить карточку
							</button>
							<img
								src={image}
								alt=''
								onClick={HidercartHandler}
							/>
						</div>
					</div>
				) : (
					<ToggleContainer>
						<div className='addcolumn'>
							<p onClick={toogleHandler}>+ Добавить список</p>
						</div>
					</ToggleContainer>
				)}
			</InputContainer>
		</>
	)
}

const InputContainer = styled.div`
	margin: 0;
	.caption {
		width: 340px;
		border: 3px;
		margin: 10px;
		border-radius: 5px;
		background-color: #ebecf0;
	}

	.addcart {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	p {
		padding: 11px;
		color: white;
	}
	input {
		width: 300px;
		color: rgb(60, 60, 105);
		padding: 6px;
		font-size: 18px;
		margin-left: 15px;
		height: 40px;
		margin-top: 10px;
		border: none;
		border-radius: 5px;
		background-color: white;
		outline-color: dodgerblue;
	}
	input:focus {
		background-color: white;
	}
	button {
		font-size: 15px;
		background-color: #0079bf;
		border: none;
		border-radius: 5px;
		color: #fff;
		width: 160px;
		height: 40px;
		margin: 16px;
		cursor: pointer;
	}
	img {
		width: 30px;
		height: 30px;
		margin-right: 25px;
		cursor: pointer;
	}
`
const ToggleContainer = styled.div`
	.addcolumn {
		background-color: #787a7a;
		width: 340px;
		height: 50px;
		box-shadow: rgb(0 0 0 / 20%) 1px 4px 5px 2px;
		border-radius: 5px;
		font-size: 21px;
		margin-top: -9px;
		margin-left: 10px;
		cursor: pointer;
	}
`
export default Todo

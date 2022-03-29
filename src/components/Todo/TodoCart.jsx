import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoUpdate } from '../../store/todos-slice'
import image from '../../image/delete.png'
import TodoModal from './TodoModal'
import { DialogPrompt } from '../Layout/DialogPrompt'
import { useCallbackPrompt } from '../../hooks/useCallbackPrompt'

const TodoCart = ({ id, tasks, title }) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [text, setText] = useState('')
	const [showTodo, setShowTodo] = useState(false)
	const [modalActive, setModalActive] = useState(false)
	
	const [canShowDialogLeavingPage, setCanShowDialogLeavingPage] =
		useState(false)
	const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(
		canShowDialogLeavingPage,
	)

	const inputChangeHandler = (e) => {
		setText(e.target.value)
	}

	const inputTaskHandler = (e) => {
		setValue(e.target.value)
		setCanShowDialogLeavingPage(true)
	}

	const addNewTodo = (e) => {
		e.preventDefault()
		if (value.trim().length > 0) {
			dispatch(todoUpdate({ text: value, id }))
		}
		setValue('')
		setCanShowDialogLeavingPage(false)
	}

	return (
		<>
			<DialogPrompt
				showDialog={showPrompt}
				confirmNavigation={confirmNavigation}
				cancelNavigation={cancelNavigation}
			/>

			<TodoTitle>
				<form>
					<input defaultValue={title} onChange={inputChangeHandler} />
					{!showTodo ? (
						<p onClick={() => setShowTodo(!showTodo)}>
							+ Добавить карточку
						</p>
					) : (
						<>
							<div>
								{tasks.map((task) => (
									<div
										onClick={() => setModalActive(true)}
										className='cart'
										key={task.id}
									>
										{task.task}
									</div>
								))}
							</div>
							<TodoModal
								active={modalActive}
								setActive={() => setModalActive(false)}
							/>
							<textarea
								placeholder='Ввести заголовок для этой карточки'
								type='text'
								value={value}
								onChange={inputTaskHandler}
							/>
							<div className='addcart'>
								<button onClick={addNewTodo}>
									Добавить карточку
								</button>
								<img
									src={image}
									alt=''
									onClick={() => setShowTodo(!showTodo)}
								/>
							</div>
						</>
					)}
				</form>
			</TodoTitle>
		</>
	)
}
const TodoTitle = styled.div`
	border: 3px;
	background-color: #ebecf0;
	margin: 10px;
	border-radius: 5px;
	width: 325px;
	.addcart {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.cart {
		background-color: white;
		width: 300px;
		margin: 15px;
		margin-left: 12px;
		height: 35px;
		padding: 6px;
		border-radius: 5px;
		color: #5e6c84;
		box-shadow: rgb(0 0 0 / 20%) 1px 4px 5px 2px;
	}
	textarea {
		background: white;
		border: none;
		box-shadow: rgb(0 0 0 / 20%) 1px 4px 5px 2px;
		margin-left: 12px;
		margin-top: 11px;
		height: 80px;
		font-size: 18px;
		width: 300px;
		outline: none;
		border-radius: 5px;
		padding: 10px;
		color: #5e6c84;
	}
	img {
		width: 25px;
		margin-right: 15px;
	}
	button {
		font-size: 15px;
		background-color: #0079bf;
		border: none;
		border-radius: 5px;
		color: #fff;
		width: 160px;
		height: 40px;
		margin: 13px;
	}
	p {
		color: #5e6c84;
		font-size: 20px;
		margin-left: 20px;
	}
	input {
		width: 300px;
		color: #5e6c84;
		padding: 6px;
		font-size: 18px;
		margin-left: 12px;
		height: 40px;
		margin-top: 10px;
		border-radius: 5px;
		border: none;
		background-color: #ebecf0;
		outline-color: dodgerblue;
	}
	input:focus {
		background-color: white;
	}
`
export default TodoCart

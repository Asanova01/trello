import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import titleImage from '../../image/title.png'
import window from '../../image/window.png'
import image from '../../image/delete.png'

const TodoModal = ({ active, setActive }) => {
	if (!active) return null
	return ReactDOM.createPortal(
		<Modal>
			<div
				className={active ? 'modal active' : 'modal'}
				onClick={setActive}
			>
				<div
					className='modalContent'
					onClick={(e) => e.stopPropagation()}
				>
					<div className='block'>
						<img src={window} alt='' />
						<p className='title'>Redux middlewere</p>
					</div>

					<p className='todo'>
						в колонке <a>To do</a>
					</p>
					<div className='block'>
						<img src={titleImage} alt='' />
						<p className='title'>Описание</p>
					</div>
					<div className='textarea'>
						<textarea
							className='textarea'
							placeholder='Добавить более подробное описание...'
						></textarea>
					</div>
					<div className='add'>
						<button>Сохранить</button>
						<img src={image} alt='' onClick={setActive} />
					</div>
				</div>
			</div>
		</Modal>,
		document.getElementById('portal'),
	)
}

const Modal = styled.div`
	.modal {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}
	.modal.active {
		pointer-events: all;
	}
	.modalContent {
		padding: 20px;
		border-radius: 12px;
		height: 600px;
		width: 800px;
		background-color: #f4f5f7;
		margin-top: 11px;
	}
	.title {
		color: #505969;
		font-size: 26px;
		margin-left: 15px;
	}
	.block {
		display: flex;
		align-items: center;
		margin-left: 40px;
	}
	textarea {
		width: 650px;
		height: 170px;
		margin-left: 60px;
		border: none;
		outline: none;
		font-size: 18px;
		border-radius: 5px;
		padding: 12px;
		color: #5e6c84;
		box-shadow: rgb(0 0 0 / 20%) 1px 4px 5px 2px;
	}
	p {
		font-size: 18px;
	}
	.todo {
		margin-left: 40px;
	}
	img {
		width: 30px;
		height: 30px;
	}
	a {
		text-decoration: underline;
	}
	.add {
		display: flex;
		align-items: center;
		margin-left: 30px;
		margin-top: 20px;
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
`
export default TodoModal

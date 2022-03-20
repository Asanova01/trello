import React from 'react'
import styled from 'styled-components'
import titleImage from '../../image/title.png'
import window from '../../image/window.png'
import image from '../../image/delete.png'

const TodoModal = ({ active, setActive }) => {
	if (!active) return null
	return (
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
						<p className='description'>Описание</p>
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
		</Modal>
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
		opacity: 0;
		transition: 0.5s;
	}
	.modal.active {
		opacity: 1;
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
	.description {
		font-size: 22px;
		color: #505969;
	}
	.title {
		color: #505969;
		font-size: 26px;
	}
	.block {
		display: flex;
		align-items: center;
		margin-left: 40px;
	}
	.textarea {
		width: 700px;
		height: 180px;
		margin-left: 20px;
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
`
export default TodoModal

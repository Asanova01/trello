import React, { useState } from 'react'
import styled from 'styled-components'
import Register from '../components/Layout/Register'
import { createGlobalStyle } from 'styled-components'

const SignupPage = () => {
	return (
		<>
			<GlobalStyle />
			<Logo>
				<img
					src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg'
					alt='trello-logo'
				/>
			</Logo>
			<Form>
				<h1>Зарегистрировать аккаунт</h1>
				<input
					type='email'
					name='email'
					placeholder='Укажите адрес электронной почты'
				/>

				<button disabled>Продолжить</button>
				<p>ИЛИ</p>
				<Register />
				<ul>
					<li>
						<a>Уже есть аккаунт? Войти</a>
					</li>
				</ul>
			</Form>
		</>
	)
}

export const GlobalStyle = createGlobalStyle`
body{
	background: linear-gradient(#c6e4ee 0%, #c6e4ee 40%, #fed1ae 60%, #faa0b9 70%, #cb7dcb 80%, #757ecb 100%);
	background-repeat: no-repeat;
    background-size: cover;
	background-attachment: fixed;
}
`
const Logo = styled.div`
	img {
		display: block;
		height: 43px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	h1 {
		color: rgb(79, 79, 112);
	}
`
const Form = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	max-width: 450px;
	background-color: white;
	border-radius: 5px;
	box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	input {
		padding: 10px;
		width: 350px;
		height: 44px;
		margin: 0 0 1.2em;
		border-radius: 4px;
		font-size: 15px;
		border: 2px solid #dfe1e6;
		background-color: #fafbfc;
	}
	input:focus {
		outline-color: hsl(202, 92%, 85%);
	}
	button {
		width: 350px;
		border: 0px;
		height: 37px;
		margin: 0 0 1.2em;
		border-radius: 5px;
		font-weight: bold;
		color: white;
		background: #5aac44;
	}
	button:disabled {
		background-color: #afb3b9;
	}
	h1 {
		margin: 27px;
		font-weight: bold;
		color: #5e6c84;
		font-size: 16px;
	}
	ul {
		text-align: center;
		font-size: 14px;
		display: block;
		padding: 0;
		color: #0052cc;
	}
	li {
		display: inline-block;
		list-style: none;
		margin: 0 8px 0px 4px;
	}
`

export default SignupPage
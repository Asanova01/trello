import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainPage = () => {
	
	return (
		<>
			<Header>
				<img
					className='logo'
					src='https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg'
					alt='trello-logo'
				/>
				<div>
					<Link to='login'>
						<button>Login</button>
					</Link>
					<Link to='signup'>
						<button>SignUp</button>
					</Link>
				</div>
			</Header>

			<Title>

				<div>
					<p className='description'>
						<b>Trello </b>помогает командам эффективно решать
						рабочие задачи.
					</p>
					<p>
						Работайте в команде, управляйте проектами и выводите
						продукивность на новый уровень собственным уникальным
						способом вместе с Trello.
					</p>
				</div>

				<img
					src='https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png'
					alt=''
				/>
			</Title>
		</>
	)
}

const Header = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	.logo {
		width: 150px;
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
const Title = styled.div`
	margin: 0 auto;
	width: 900px;
	display: flex;
	margin-top: 50px;
	justify-content: space-around;
	img {
		width: 370px;
	}
	.description {
		color: #0b2136;
		font-size: 40px;
	}
	p {
		color: #0b2136;
		font-size: 20px;
	}
`
export default MainPage

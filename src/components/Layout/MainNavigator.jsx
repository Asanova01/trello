import React from 'react'
import styled from 'styled-components'
import image from '../../image/menu.png'
import down from '../../image/down.png'
import search from '../../image/search.png'
import info from '../../image/info.png'
import bell from '../../image/bell.png'
import user from '../../image/user.png'

const MainNavigator = () => {
	return (
		<Header>
			<nav>
				<div className='box1'>
					<img src={image} alt='' />
					<img
						className='trelloImg'
						src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif'
						alt=''
					/>
					<button>
						Рабочие пространства
						<img src={down} alt='' className='down' />
					</button>
					<button>
						Недавние <img src={down} alt='' className='down' />
					</button>
					<button>
						В избраннoм <img src={down} alt='' className='down' />
					</button>
					<button>
						Шаблоны <img src={down} alt='' className='down' />
					</button>
					<button>Создать</button>
				</div>
				<div className='box2'>
					<div className='input'>
						<img src={search} alt='' />
						<input type='text' placeholder='поиск' />
					</div>
					<img src={info} alt='' className='icons' />
					<img src={bell} alt='' className='icons' />
					<img src={user} alt='' className='user' />
				</div>
			</nav>
		</Header>
	)
}

const Header = styled.div`
	nav {
		width: 100%;
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: rgb(95, 107, 121);
	}
	.box1 {
		padding: 30px;
	}
	.box2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.trelloImg {
		width: 90px;
		height: 18px;
		margin-left: 20px;
	}
	.down {
		margin-bottom: -5px;
	}
	img {
		width: 20px;
		height: 20px;
	}
	select {
		margin-left: 15px;
	}
	button {
		background-color: rgb(95, 107, 121);
		color: white;
		border: none;
		margin-left: 20px;
	}

	.icons {
		width: 28px;
		height: 28px;
	}
	.user {
		width: 45px;
		height: 45px;
	}
	.input {
		width: 200px;
		border: 2px solid white;
		display: flex;
		padding: 2px 5px;
		border-radius: 4px;
		input {
			background: none;
			border: none;
			color: white;
			outline: none;
			&::placeholder {
				color: white;
			}
		}
	}
`

export default MainNavigator

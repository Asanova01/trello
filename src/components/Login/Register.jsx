import React from 'react'
import styled from 'styled-components'

const Register = () => {
  return (
    <>
    			<Block>
					<div>
						<img
							src='https://img.icons8.com/color/48/000000/google-logo.png'
							alt=''
						/>
						<span>Войти через Google</span>
					</div>
					<div>
						<img
							src='https://img.icons8.com/color/48/000000/microsoft.png'
							alt=''
						/>
						<span>Войти через Microsoft</span>
					</div>
					<div>
						<img
							src='https://img.icons8.com/ios-glyphs/30/000000/mac-os.png'
							alt=''
						/>
						<span>Войти через Apple</span>
					</div>
					<div>
						<img
							src='https://img.icons8.com/color/48/000000/slack-new.png'
							alt=''
						/>
						<span>Войти через Slack</span>
					</div>
					<p>
						<a>Вход с помощью SSO</a>
					</p>
					<hr />
					<ul>
						<li>
							<a>Не удается войти?</a>
						</li>
						<li>
							<a>Зарегистрировать аккаунт</a>
						</li>
					</ul>
				</Block>
    </>
  )
}

const Block = styled.div`
	div {
		box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
		border-radius: 3px;
		width: 350px;
		margin: 14px;
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	span {
		font-weight: bold;
		font-size: 14px;
		color: #4d4d4d;
	}
	p {
		color: #0052cc;
		text-align: center;
		font-size: 14px;
		text-decoration: none;
	}
	a:hover {
		color: #0052cc;
		text-decoration: underline;
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
	hr {
		height: 1px;
		border: 0;
		border-top: 1px solid hsl(0, 0%, 80%);
	}
	img {
		width: 25px;
		margin-right: 5px;
	}
`
export default Register
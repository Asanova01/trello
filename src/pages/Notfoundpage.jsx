import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Notfoundpage = () => {
	return (
		<Container>
			<img
				src='https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png'
				alt=''
			/>
			<p>Oops!</p>
			<h3>Sorry, the page not found!</h3>
			<button>
				<Link to='/' className='goHome'>
					Go home
				</Link>
			</button>
		</Container>
	)
}

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		width: 500px;
		border-radius: 130px;
		margin-top: 30px;
	}
	h3 {
		color: tomato;
		margin-top: -20px;
		font-size: 50px;
	}
	p {
		font-size: 40px;
		margin-top: 20px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
			sans-serif;
	}
	button {
		background-color: white;
		border: none;
		width: 200px;
		border-radius: 10px;
		height: 30px;
    font-size: 18px;
	}
`
export default Notfoundpage

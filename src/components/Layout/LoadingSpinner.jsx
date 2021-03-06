import styled from 'styled-components'

const LoadingSpinner = () => {
	return (
		<Spinner>
			<div className='spinner'></div>
		</Spinner>
	)
}

const Spinner = styled.div`
	.spinner {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.spinner:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid teal;
		border-color: teal transparent teal transparent;
		animation: spinner 1.2s linear infinite;
	}
	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
export default LoadingSpinner

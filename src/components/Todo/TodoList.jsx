import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Todo from './Todo'
import TodoCart from './TodoCart'

const TodoList = () => {
	const todos = useSelector((state) => state.todos.columnTodo)

	return (
		<>
			<GlobalStyle />
			<Block>
		
				{todos.map((todo) => (
					<TodoCart
						key={todo.id}
						id={todo.id}
						title={todo.title}
						tasks={todo.tasks}
					/>
				))}
				<Todo />
			</Block>
		</>
	)
}

export const GlobalStyle = createGlobalStyle`
body{
	background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1280/e35aefa23c0411f2491ca0244c7b96be/photo-1647163641067-c7ee34cfcb80.jpg');
	background-repeat: no-repeat;
    background-size: cover;
	background-attachment: fixed;
}
`
const Block = styled.div`
	display: flex;
	justify-content: start;
	align-items: flex-start;
	margin-left: 25px;
	border-radius: 5px;
	margin-top: 27px;
`
export default  TodoList

import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		columnTodo: [],
	},
	reducers: {
		addTodo: (state, action) => {
			state.columnTodo.push(action.payload)
		},
		todoUpdate: (state, action) => {
			const { cardData, id } = action.payload
			state.columnTodo = state.columnTodo.map((card) => {
				if (card.id === id) {
					card.tasks = [
						...card.tasks,
						{
							task: action.payload.text,
							id: Math.random().toString(),
						},
					]
				}
				return card
			})
		},
	},
})

export const { addTodo, deleteTodo, todoUpdate } = todosSlice.actions
export default todosSlice

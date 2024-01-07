import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true
		},
		isCompleted: {
			type: Boolean,
			default: false
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		subTodos: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'SubTodo'
			}
		]
	},
	{
		timestamps: true
	}
)

export const SubTodo = mongoose.model("SubTodo", subtodoSchema)
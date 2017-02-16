import { getContact } from './contacts'

const messages = [
	{
		id: 1,
		contact: getContact(1),
		message: "Anak, bakit ang bilis maubos ng tissue natin?"
	},
	{
		id: 2,
		contact: getContact(2),
		message: "Anak, samahan mo ako mamayang gabi. Hanap tayo ng girlprend mo."
	},
	{
		id: 3,
		contact: getContact(3),
		message: "You have Php 0.00 balance remaining"
	},
	{
		id: 4,
		contact: getContact(4),
		message: "GLOBE REWARDS: You have earned 1000 points"
	}
]

export const addMessage = (message) => {
	messages.push(message)
	return message.id
}

export const getMessages = () => {
	return messages
}

export const updateMessage = (id, newMessage) => {
    const currentMessage = getMessage(id)
    const index = messages.indexOf(currentMessage)
    Object.assign(newMessage, {id:id})
    messages[index] = newMessage
}

export const getMessage = (id) => {
	return messages.find((message) => message.id === id)
}

export const getCurrentId = () => {
	return Math.max(...messages.map((message) => message.id))
}
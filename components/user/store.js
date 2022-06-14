const Model = require('./model');

const addUser = async (user) => {
	try {
		const newUser = new Model(user);
		await newUser.save();
		return newUser;
	} catch (err) {
		throw new Error(err);
	}
};

const getUsers = async (query) => {
	let filter = {};
	if (query.name) {
		filter.name = query.name;
	}

	try {
		const users = await Model.find(filter);
		return users;
	} catch (err) {
		throw new Error(err);
	}
};
const joinChat = async (id, chat) => {
	try {
		const foundChat = await /* Model.findById(id); */ Model.findById(id)
		console.log(`estoy en el store${foundChat}`)
		foundChat.chats.push(chat);
		await foundChat.save();
		return foundChat;
	} catch (err) {
		throw new Error(err);
	}
};

const deleteUser = (id) => {
	return Model.findByIdAndRemove(id);
};

module.exports = {
	add: addUser,
	get: getUsers,
	joinChat: joinChat,
	delete: deleteUser,
};

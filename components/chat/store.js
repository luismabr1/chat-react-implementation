const Model = require('./model');

const createChat = (users) => {
	const newChat = new Model(users);
	return newChat.save();
};

const getChats = (userId) => {
	let filter = {};

	if (userId) {
		filter = {
			users: userId,
		};
	}

	return Model.find(filter).populate('users', 'name').exec();
};

const joinChat = async (id, user) => {
	try {
		const foundUser = await Model.findById(id)
		console.log(`chat encontrado ${foundUser.users}`)
		console.log(`este es el user${user}`)
		foundUser.users.push(user);
		await foundUser.save();
		return foundUser;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	create: createChat,
	getAll: getChats,
	joinChat: joinChat
};

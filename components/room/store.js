const Model = require('./model');

const createRoom = (name) => {
	const newRoom = new Model(name);
	return newRoom.save();
};

const getRooms = (userId) => {
	let filter = {};

	if (userId) {
		filter = {
			users: userId,
		};
	}

	return Model.find(filter).populate('users', 'name').exec();
};

const joinRoom = async (id, user) => {
	try {
		const foundUser = await Model.findById(id)
		console.log(`Room encontrado ${foundUser.users}`)
		console.log(`este es el user${user}`)
		foundUser.users.push(user);
		await foundUser.save();
		return foundUser;
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = {
	create: createRoom,
	getAll: getRooms,
	joinRoom: joinRoom
};

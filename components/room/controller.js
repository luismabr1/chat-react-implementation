const store = require('./store');

const createRoom = async (name) => {
	return new Promise(async (resolve, reject) => {
		if (!name || name.length < 3) {
			reject({
				message: 'There are no users or are less than 2 users.',
				internal: null,
				status: 400,
			});
		} else {
			try {
				const nameRoom = {
					name,
				}; 
				console.log(nameRoom)
				const addedRoom = await store.create(nameRoom);
				resolve(addedRoom);
			} catch (err) {
				reject({
					message: 'An internal error has occurred.',
					internal: `Something went wrong with the Room store (createRoom) \n ${err.message}`,
					status: 500,
				});
			}
		}
	});
};

const getRooms = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const Rooms = await store.getAll(userId);
			resolve(Rooms);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `Something went wrong with the Room store (getRooms) \n ${err.message}`,
				status: 500,
			});
		}
	});
};


const joinToRoom = (id, user) => {
	return new Promise(async (resolve, reject) => {
		if (!id || !user) {
			reject({
				message: 'Invalid data.',
				internal: null,
				status: 400,
			});
		}

		try {
			console.log(user)
			const userJoined = await store.joinRoom(id, user);
			resolve(userJoined);
		} catch (err) {
			reject({
				message: 'An internal error has occurred.',
				internal: `Something went wrong with the user store (userJoined)\n ${err.user}`,
				status: 500,
			});
		}
	});
};

module.exports = {
	createRoom,
	getRooms,
	joinToRoom,
};

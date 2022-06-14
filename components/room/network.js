const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', async (req, res) => {
	const { name } = req.body;

	try {
		const addedRoom = await controller.createRoom(name);
		response.success(req, res, 'Room was created successfully', 201, addedRoom);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.get('/', async (req, res) => {
	try {
		const allRooms = await controller.getRooms();
		response.success(
			req,
			res,
			'Rooms were retrieved successfully.',
			200,
			allRooms
		);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.get('/:userId', async (req, res) => {
	const { userId } = req.params;

	try {
		const Rooms = await controller.getRooms(userId);
		response.success(
			req,
			res,
			'Rooms were retrieved successfully.',
			200,
			Rooms
		);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const { user } = req.body;

	try {
		const joinToRoom = await controller.joinToRoom(id, user);
		response.success(req, res, 'User was joined.', 200, joinToRoom);
	} catch (err) {
		response.error(req, res, err.message, err.status, err.internal);
	}
});

module.exports = router;

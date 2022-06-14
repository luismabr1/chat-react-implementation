const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');
const room = require('../components/room/network');


const router = (server) => {
	server.use('/api/message', message);
	server.use('/api/user', user);
	server.use('/api/chat', chat);
	server.use('/api/room', room);
};

module.exports = router;

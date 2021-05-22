import io from 'socket.io-client';
import Cookies from 'js-cookie';

const URL = 'http://127.0.0.1:3333';

const socket = io(URL, {
    auth: {
        token: Cookies.get('token')
    }
    // autoConnect: false
});

// socket.onAny((event, ...args) => {
//     console.log(event, args);
// });

// socket.on("connect", () => {
//     console.log(`connect ${socket.id}`);
// });

// socket.on("disconnect", () => {
//     console.log(`disconnect`);
// });

export default socket;

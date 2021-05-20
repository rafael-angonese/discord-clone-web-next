import io from 'socket.io-client';

const URL = 'http://127.0.0.1:3333';
// const socket = io(URL, { autoConnect: false });
const socket = io(URL);

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

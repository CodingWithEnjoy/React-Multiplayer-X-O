import {
    OnConnect,
    SocketController,
    ConnectedSocket,
    OnDisconnect,
    MessageBody,
    OnMessage,
    SocketIO
} from 'socket-controllers';

import { Socket, Server } from "socket.io"


@SocketController()
export class RoomController {

    @OnMessage('join')
    public async joinRoom(@ConnectedSocket() socket: Socket, @MessageBody() data: any, @SocketIO() io: Server) {


        // get the room
        const room = io.sockets.adapter.rooms.get(data.room);
        console.log("🚀 ~ file: room.ts:23 ~ RoomController ~ joinRoom ~ room", room)
        const socketRooms = Array.from(socket.rooms.values())
        console.log("🚀 ~ file: room.ts:24 ~ RoomController ~ joinRoom ~ socketRooms", socketRooms)
        const socketRoomsFilter = Array.from(socket.rooms.values()).filter(
            (r) => r !== socket.id
        );

        console.log("🚀 ~ file: room.ts:27 ~ RoomController ~ joinRoom ~ socketRoomsFilter", socketRoomsFilter.length)

        // if the room doesn't exist, create it
        console.log("hehe 1")
        if (socketRoomsFilter.length > 0 || (room && room.size === 2)) {
            console.log("hehe")
            socket.emit('room_join_error', {
                error: 'Unfortunately this Room is full :('
            });
            console.log('room full', data.room)
        }

        // if the room exists, and members less than 2
        else {
            console.log("Inside jfklsdjfd jdjd")

            if (!room) {
                socket.join(data.room);
                socket.emit('joined', data.room);
                console.log("Inside jfklsdjfd", socket.id)
            }

            else if (room.size === 1) {
                socket.join(data.room);
                socket.emit("start_game", { start: true, symbol: "x" });
                socket.emit('joined', data.room);

            }


            if (room.size === 2) {
                console.log("Inside jfklsdjfd", socket.id)
                console.log("Inside", room.size)
                socket.to(data.room).emit("start_game", { start: false, symbol: "o" });
                console.log("Inside 3")
                // send to the second  client
                socket.emit("start_game", { start: true, symbol: "x" });


            }
        }

        // check if not the same member : onother way
        //  else if( room.size === 2) {
        //     const clients = Array.from(room);
        //     console.log('clients', clients)
        //     if (clients[0] !== clients[1]) {
        //         socket.to(clients[1]).emit('ready', data.room);
        //         socket.emit('ready', data.room);
        //         console.log('ready', data.room)
        //     }
        // } 

        // if the room is full, send an error message




    }

    //leaving
    @OnMessage('leave')
    public async leaveRoom(@ConnectedSocket() socket: Socket, @MessageBody() data: any, @SocketIO() io: Server) {
        console.log('leave room', data);

        // delete room
        const room = io.sockets.adapter.rooms.get(data.room);

        console.log('leaved room', data.room);

        if (room && room.size === 1) {
            socket.leave(data.room);
        }
        else {
            socket.leave(data.room);
            socket.to(
                data.room
            ).emit('left', data.room);
        }

    }
}
import {
    ConnectedSocket,
    MessageBody,
    OnMessage,
    SocketController,
    SocketIO,
} from "socket-controllers";
import { Server, Socket } from "socket.io";



@SocketController()
export class GameController {

    private getSocketGameRoom(socket: Socket): string {
        const socketRooms = Array.from(socket.rooms.values()).filter(
            (r) => r !== socket.id
        );
        const gameRoom = socketRooms && socketRooms[0];

        return gameRoom;
    }

    @OnMessage("move")
    public async move(
        @ConnectedSocket() socket: Socket,
        @MessageBody() data: any,
        @SocketIO() io: Server
    ) {
        console.log("move", data);
        const gameRoom = this.getSocketGameRoom(socket);
        socket.to(gameRoom).emit("move_", data);
        // socket.emit("move_", data);
    }

    @OnMessage("game_win")
    public async gameWin(
        @SocketIO() io: Server,
        @ConnectedSocket() socket: Socket,
        @MessageBody() data: any
    ) {
        const gameRoom = this.getSocketGameRoom(socket);
        socket.to(gameRoom).emit("on_game_win", data);
    }


    @OnMessage('rematch')
    public async rematch(@ConnectedSocket() socket: Socket, @MessageBody() data: any, @SocketIO() io: Server) {


        // get the room
        const room = io.sockets.adapter.rooms.get(data.room);
        console.log("hello")


        // if the room doesn't exist, create it


        socket.to(data.room).emit("onRematch", { start: false, symbol: "o" });
        // send to the second  client
        socket.emit("onRematch", { start: true, symbol: "x" });





    }



}
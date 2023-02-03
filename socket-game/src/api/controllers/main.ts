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
export class MainController {
    @OnConnect()
    connection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
        console.log('client connected', socket.id);

    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: Socket) {
        console.log('client disconnected', socket.id);
    }


}
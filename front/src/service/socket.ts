import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from '@socket.io/component-emitter';

class SocketService {
    public  socket: Socket ;
    
    constructor() {
        this.socket = io("http://localhost:9000");
    }
    
    
    //connect to socket
    public connect(
        url: string
      ): Promise<Socket<DefaultEventsMap, DefaultEventsMap>> {
        return new Promise((resolve, reject) => {
          this.socket = io(url);

          if (!this.socket) return reject();

          this.socket.on("connect", () => {
            resolve(this.socket);
          });
          this.socket.on("connect_error", (error) => {
            reject(error);
          });
        });
      }

}

export default new SocketService();
import { Socket } from "socket.io-client";

class GameService {

    public async joinGameRoom(socket: Socket, room: string): Promise<boolean> {
        return new Promise((rs, rj) => {
          socket.emit("join", { room });
        console.log("joined: ", room);
          socket.on("joined", () => rs(true));
          socket.on("room_join_error", ({ error }) => rj(error));
        });
      }

      public async move(socket: Socket, data: any) {
      
          socket.emit("move", data);
        //   socket.on("move", () => rs(true));
        //   socket.on("move_error", ({ error }) => rj(error));
      
      }

        public async gameWin(socket: Socket, data: any) {
        
          socket.emit("game_win", data);
         
        }

        public async onGameStarted(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("start_game", callback);
        }

        public async onGameWin(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("on_game_win", callback);
        }

        public async onMove(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("move_", callback);
        }


        public async  onRematch(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("onRematch", callback);
        }

        public async rematch(socket: Socket, data: any) {
          socket.emit("rematch", data);
        }

        public async leave(
            socket: Socket,
            room: string
        )
        {
            socket.emit("leave", { room });
        }

        public async onLeave(
            socket: Socket,
            callback: (data: any) => void
        )
        {
            socket.on("left", callback);
        }


}

export default new GameService();
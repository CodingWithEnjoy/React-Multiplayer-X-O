import { Server } from 'socket.io'
import { useSocketServer } from 'socket-controllers';


export default (server: any) => {
    console.log(__dirname + '/api/controllers/*.ts');
    const io = new Server(server, {
        cors: {
            origin: '*',
        }
    });
    useSocketServer(io, {
        controllers: [__dirname + '/api/controllers/*.ts'],
    });
    return io;
};




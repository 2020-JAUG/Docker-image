import express from 'express';
import cors from 'cors';

class Server {

    public app: express.Application = express();
    private port: number = 4000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());

        this.listen();
    }

     public listen() {
        this.app.listen(() => console.log(`Server listening on port ${this.port}`));
     }
}

new Server();
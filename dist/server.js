import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/index.js';
import route from './routes/index.js';
const app = express();
// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: ['https://id-preview--d5c562a4-a3ba-4bcb-b52a-bd66c311853e.lovable.app', 'http://localhost:3000', '*'],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use('/api/v1', route);
app.listen(config.port, () => console.info(`http://localhost:${config.port}`));
//# sourceMappingURL=server.js.map
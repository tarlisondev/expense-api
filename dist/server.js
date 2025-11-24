import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config/index.js';
import route from './routes/index.js';
const app = express();
// Middlewares
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use('/api/v1', route);
app.listen(config.port, () => console.info(`http://localhost:${config.port}`));
//# sourceMappingURL=server.js.map
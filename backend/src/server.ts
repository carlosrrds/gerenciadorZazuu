import express from 'express';
import 'express-async-errors';
import { routes } from './routes';
import errorHandler from './middlewares/errorHandle.middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

const host = '0.0.0.0';
const port = 3333;

app.listen(port, host, () => {
    console.log(`O servidor está rodando em http://${host}:${port}/`);
});
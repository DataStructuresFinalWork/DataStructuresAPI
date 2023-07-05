import express from 'express';
import { config } from 'dotenv';
import { routes } from './routes';
import cors from 'cors';

config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`listen on port ${port}!`));

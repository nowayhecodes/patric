import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

export const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.get('/applications', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: 'success', applications: [] });
});

app.post(
  '/register/application',
  (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ status: 'success', message: req.body.message });
  }
);

app.listen(5555, '0.0.0.0', () =>
  console.log(`Patric is running on port 5555`)
);

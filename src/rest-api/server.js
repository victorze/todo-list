import express from "express";
import logger from "morgan";
import { notFound, productionErrors } from "./middleware/errors.js";
import { router } from './routes/index.js'

const app = express();

app.use(logger('dev', { skip: () => process.env.NODE_ENV === 'test' }));
app.use(express.json());
app.use('/api', router);

app.use(notFound);
app.use(productionErrors);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Starting development server at http://localhost:${PORT}`);
  }
});

export { app, server }

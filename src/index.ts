import express from 'express';
import health from './http/health/health.routes.';

const app = express();

const port = Number(process.env.APP_PORT) || 3000;

app.use('/api', health);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

import express from 'express';
import controller from './health.controller';
const router = express.Router();

router.get('/health', controller.health);

export default router;

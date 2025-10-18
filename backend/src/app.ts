
import express from 'express'; import cors from 'cors'; import helmet from 'helmet'; import dotenv from 'dotenv'; dotenv.config(); const app = express(); app.use(helmet()); app.use(cors()); app.use(express.json()); app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date() })); export default app;

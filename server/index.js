import express from 'express';
import cors from 'cors';
import { auth } from 'express-oauth2-jwt-bearer';
import { campaignRoutes } from './routes/campaigns.js';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS with environment-specific origin
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'https://promote.beauty',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Auth0 middleware
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE || 'https://api.promote.beauty',
  issuerBaseURL: process.env.AUTH0_ISSUER || 'https://dev-hx61dop1or6ajnlg.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Protected campaign routes
app.use('/api/campaigns', checkJwt, campaignRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
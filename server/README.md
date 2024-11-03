# Promote.Beauty API

Backend API service for the Promote.Beauty platform.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create .env file:
   ```bash
   cp .env.example .env
   ```

3. Update environment variables in .env

4. Start the server:
   ```bash
   npm start
   ```

## Deployment

The API can be deployed to:

- Heroku
- Railway
- Render
- AWS Elastic Beanstalk

### Environment Variables Required:

- PORT: Server port (default: 3000)
- NODE_ENV: Environment (development/production)
- AUTH0_AUDIENCE: Auth0 API identifier
- AUTH0_ISSUER: Auth0 domain URL
- CORS_ORIGIN: Frontend application URL

## API Documentation

### Endpoints

GET /health
- Health check endpoint
- No authentication required

GET /api/campaigns
- Get all campaigns for authenticated user
- Requires Bearer token

POST /api/campaigns
- Create new campaign
- Requires Bearer token

PUT /api/campaigns/:id
- Update campaign
- Requires Bearer token

DELETE /api/campaigns/:id
- Delete campaign
- Requires Bearer token
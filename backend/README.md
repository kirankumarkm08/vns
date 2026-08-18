# Venus Park Enquiry Backend

Express + MySQL API for collecting website enquiry leads.

## Architecture

- `src/server.ts` starts the API.
- `src/app.ts` configures Express middleware and routes.
- `src/routes` contains API route declarations.
- `src/controllers` handles HTTP request/response logic.
- `src/services` contains business logic.
- `src/repositories` contains MySQL queries.
- `src/schemas` contains Zod validation.
- `database/schema.sql` creates the required MySQL table.

## Database Setup

```sql
CREATE DATABASE venus_park CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE venus_park;
SOURCE backend/database/schema.sql;
```

If your MySQL client is opened from the repository root, the `SOURCE` path above works. Otherwise, use the absolute path to `backend/database/schema.sql`.

## Environment

Copy the example file:

```sh
cp backend/.env.example backend/.env
```

Set real values for:

```env
ADMIN_API_KEY=replace-with-a-long-random-admin-key
MYSQL_USER=root
MYSQL_PASSWORD=your-password
MYSQL_DATABASE=venus_park
```

The backend reads environment variables from the process. For local development, run commands from the repository root and place `.env` in the root or export the variables in your shell.

## Commands

```sh
npm run dev:backend
npm run build:backend
npm run start:backend
```

## API

### Health

```http
GET /health
```

### Create Enquiry

```http
POST /api/enquiries
Content-Type: application/json
```

```json
{
  "name": "Priya Iyer",
  "phone": "+91 98765 43210",
  "eventType": "Wedding",
  "preferredDate": "2026-12-20",
  "guestCount": "500-700",
  "packagePreference": "Platinum",
  "message": "Need evening reception details",
  "sourcePage": "/booking"
}
```

### List Enquiries

```http
GET /api/enquiries?status=new&limit=50&offset=0
x-admin-api-key: your-admin-api-key
```

## Deployment Notes

- Deploy the backend as a Node.js service.
- Use managed MySQL in production.
- Set `CORS_ORIGIN` to the production website URL.
- Keep `ADMIN_API_KEY` and MySQL credentials outside source control.
- Run `backend/database/schema.sql` as a migration before starting production traffic.

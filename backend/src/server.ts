import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { verifyDatabaseConnection } from "./db/mysql.js";

async function bootstrap() {
  await verifyDatabaseConnection();

  const app = createApp();
  app.listen(env.PORT, () => {
    console.log(`Express backend running on http://localhost:${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error("Failed to start backend", error);
  process.exit(1);
});

import "dotenv/config";
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 4000);

app.listen(port, (error) => {
  if (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
  console.log(`API running on http://localhost:${port}`);
});
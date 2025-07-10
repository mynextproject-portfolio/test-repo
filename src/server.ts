import { buildApp } from './app';

/**
 * Start the server
 */
async function start(): Promise<void> {
  const app = await buildApp();
  
  try {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';
    
    await app.listen({ port, host });
    console.log(`Server listening on http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start(); 
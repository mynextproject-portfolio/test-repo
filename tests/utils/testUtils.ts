import { FastifyInstance } from 'fastify';
import { buildApp } from '../../src/app';

/**
 * Create a test app instance
 */
export async function createTestApp(): Promise<FastifyInstance> {
  const app = await buildApp({
    logger: false, // Disable logging in tests
  });
  
  return app;
}

/**
 * Helper function to get a test app that's ready to use
 */
export async function getTestApp(): Promise<FastifyInstance> {
  const app = await createTestApp();
  await app.ready();
  return app;
}

/**
 * Clean up test app
 */
export async function cleanupTestApp(app: FastifyInstance): Promise<void> {
  await app.close();
} 
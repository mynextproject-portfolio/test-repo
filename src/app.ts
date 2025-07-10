import fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify';
import routes from './plugins/routes';

/**
 * Build and configure the Fastify app
 * @param opts - Options for Fastify instance
 * @returns Configured Fastify instance
 */
export async function buildApp(opts: FastifyPluginOptions = {}): Promise<FastifyInstance> {
  const app = fastify({
    logger: true,
    ...opts
  });

  // Register plugins
  await app.register(routes, { prefix: '/api' });

  return app;
}

export default buildApp; 
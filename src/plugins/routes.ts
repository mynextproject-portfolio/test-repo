import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import pingRoute from '../routes/ping';

/**
 * Routes plugin - registers all route modules
 */
async function routes(fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> {
  // Register ping route
  await fastify.register(pingRoute);
}

export default routes; 
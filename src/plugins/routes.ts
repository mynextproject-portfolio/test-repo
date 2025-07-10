import { FastifyInstance, FastifyPluginOptions } from 'fastify';

/**
 * Routes plugin - registers all route modules
 */
async function routes(_fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> {
  // ...
}

export default routes; 
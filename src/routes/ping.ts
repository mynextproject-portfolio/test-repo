import { FastifyInstance, FastifyPluginOptions } from 'fastify';

/**
 * Ping route plugin
 */
async function pingRoute(fastify: FastifyInstance, _options: FastifyPluginOptions): Promise<void> {
  fastify.get('/ping', async (_request, reply) => {
    return reply.code(200).send({ message: 'pong' });
  });
}

export default pingRoute; 
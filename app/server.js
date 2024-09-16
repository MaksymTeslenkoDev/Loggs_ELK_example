'use strict';

const fastify = require('fastify');

module.exports = async ({
  app: appConfig,
  server: serverConfig,
  mysql: mysqlConfig,
}) => {
  const app = fastify({ ...serverConfig });

  app.register(require('@fastify/mysql'), {
    promise: mysqlConfig.isPromisify,
    connectionString: mysqlConfig.url,
  });

  app.get('/query', async function seed(request, reply) {
    try {
      request.log.info(`Querying slow query`);

      const query = 'SELECT SLEEP(5)';

      const connection = await app.mysql.getConnection();
      const [rows] = await connection.query(query);
      connection.release();
      return { rows };
    } catch (err) {
      throw new Error(err.message);
    }
  });

  await app.listen({
    port: appConfig.port,
    host: appConfig.host,
  });

  return app;
};

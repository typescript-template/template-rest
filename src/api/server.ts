import { RiaoRouter } from '@riao/rest';
import { HealthCheckEndpoint, RestServer } from 'api-machine';
import { env } from '../env';

export class ServiceRouter extends RiaoRouter {
	override async routes() {
		return [HealthCheckEndpoint];
	}
}

export class Server extends RestServer {
	override router = ServiceRouter;

	override name = '{{project-name}}';
	override description = 'Rest API Server';
}

export const server = new Server({
	port: env.API_PORT,
	swaggerEnabled: env.NODE_ENV === 'development',
});

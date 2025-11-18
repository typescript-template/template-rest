import { log } from './log';
import { maindb } from '../database/main';
import { server } from './api';

/**
 * Initialize & register your app's services here
 */
export async function register(): Promise<void> {
	log.info('Booting...');

	// TODO: Register services here
	await maindb.init();
	await server.start();
}

/**
 * Teardown services here
 */
export async function teardown(): Promise<void> {
	log.info('Tearing down...');

	// TODO: Teardown services here
	await server.stop();
	await maindb.disconnect();
}

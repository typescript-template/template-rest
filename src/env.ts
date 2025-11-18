import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'template-rest';

	readonly API_PORT = 4000;
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);

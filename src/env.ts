import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'template-rest';

	readonly API_PORT = 4000;

	readonly MAIN_DB_HOST: string;
	readonly MAIN_DB_PORT: number;
	readonly MAIN_DB_USER: string;
	readonly MAIN_DB_PASSWORD: string;
	readonly MAIN_DB_NAME: string;
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);

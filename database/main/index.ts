import { DatabaseMySql8 } from '@riao/mysql';

export default class MainDatabase extends DatabaseMySql8 {
	override name = 'main';
}

export const maindb = new MainDatabase();

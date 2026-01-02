import path from 'path';
import { readFileSync } from 'fs';

export function isOrmEnable(callback) {
    const config_path = path.resolve(process.cwd(), 'config.db.json');
    
    const dbConfig = readFileSync(config_path, 'utf8');
    const data = JSON.parse(dbConfig)

    // if orm isn't turned on
    if (!data.open) {
        console.log("Can't create DB, turn on the ORM!!\nOR use a external package to manage your datbase :D")
        return
    }

    callback()
}
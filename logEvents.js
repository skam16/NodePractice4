import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

//new imports and new way to get filename and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try{
        if (!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventsLog.txt'), logItem);
    }
    catch(err){
        console.log(err);
    }
}

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
// console.log(uuid());

export default logEvents;
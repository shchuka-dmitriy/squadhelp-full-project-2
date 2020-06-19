import fs from 'fs';
import moment from 'moment';
import path from 'path';

/**
 *
 * @param {Object} err
 */
export default function (err) {
    const data = {
        message: err.message,
        time: moment().format('x'),
        code: err.code,
        stackTrace: err.stack
    };
    const createdPath = path.join(__dirname, '..', 'loggerError');
    /*
    * Used method fs.appendFile for attach data to the end of the file
    * */
    fs.appendFile(
        `${createdPath}/loggedErrors.txt`,
        JSON.stringify(data)+'\n',
        (err) => {
            if (err) throw err;
    });
}
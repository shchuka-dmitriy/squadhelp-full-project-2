import fs from 'fs';
import moment from 'moment';

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

    /*
    * Used method fs.appendFile for attach data to the end of the file
    * */
    fs.appendFile(
        'loggedErrors.txt',
        JSON.stringify(data)+'\n\n',
        (err) => {
            if (err) throw err;
    });
}
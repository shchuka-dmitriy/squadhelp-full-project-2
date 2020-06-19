import fs from 'fs';
import moment from 'moment';
import readline from 'readline';
import path from 'path';
import CONSTANTS from '../constants';
import createErrorsStorage from './createErrorsStorage';

const errorsStorage = createErrorsStorage('loggerError/archivedErrors');
const timeToStart = moment(moment(CONSTANTS.TIME_TO_ARCHIVE_ERRORS,'HH:mm')).diff(moment());
const delayTillFirstArchiving = timeToStart <= 0 ? (timeToStart + CONSTANTS.MILLISECONDS_IN_DAY) : timeToStart;

/**
 *
 * @param {Number} delay
 * @returns {number}
 */
const errorArchiver = (delay) => {
        setTimeout(() => {
            const loggedErrors = path.join(__dirname, '..', 'loggerError/loggedErrors.txt');
            if (fs.existsSync(loggedErrors)) {
                /*
                 * Open the file as a readable stream and create a readline Interface instance
                 * */
                const readStream = fs.createReadStream(loggedErrors);
                const rl = readline.createInterface({
                    input: readStream,
                });
                const fileName = `${errorsStorage}/${moment().format('x')}.txt`;
                rl.on('line', function (line) {
                    const errorData = JSON.parse(line);
                    fs.writeFile(fileName, JSON.stringify({
                            message: errorData.message,
                            code: errorData.code,
                            time: errorData.time
                        })
                        + '\n', {flag: 'a'},
                        (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                });
                rl.on('close', function () {
                    fs.writeFile(loggedErrors, '', (err) => {
                        if (err) {
                            throw err;
                        }
                    })
                });
            }
            errorArchiver(CONSTANTS.MILLISECONDS_IN_DAY);
        }, delay);
};
module.exports = errorArchiver(delayTillFirstArchiving);
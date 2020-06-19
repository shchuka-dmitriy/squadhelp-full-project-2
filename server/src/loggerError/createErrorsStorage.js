import fs from 'fs';
import path from 'path';

/**
 *
 * @param {string} pathName
 * @returns {string} createdFolder
 */
export default function (pathName) {
    const createdFolder = path.join(__dirname, '..', pathName);

    if (!fs.existsSync(createdFolder)) {
        fs.mkdir(createdFolder, (err) => {
            if (err) throw err;
        });
    }

    return createdFolder;
}
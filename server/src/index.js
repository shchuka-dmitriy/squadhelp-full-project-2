require('./dbMongo/mongoose');
require('./loggerError/errorArchiver');
import httpServer from "./config/httpServer/httpServerConfig";
const controller = require('./socketInit');
controller.createConnection(httpServer);
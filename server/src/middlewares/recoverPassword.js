const jwt = require('jsonwebtoken');
const CONSTANTS = require("../constants");
const userQueries = require('../controllers/queries/userQueries');
const TokenError = require('../errors/TokenError');
const ServerError = require('../errors/ServerError');

module.exports.createTokenNewPassword = async (req, res, next) => {
    try {
        const accessToken = jwt.sign({
            id: req.user.id,
            password: req.hashPass
        }, CONSTANTS.JWT_SECRET, { expiresIn: CONSTANTS.ACCESS_TOKEN_TIME });
        if (accessToken) {
            req.accessToken = accessToken;
            return next()
        }
        next(new TokenError("Token don't create"))
    } catch (err) {
        next(err);
    }
};

module.exports.updateNewPassword = async (req, res, next) => {
    try {
        const {tokenData: {id, password}} = req;
        const updatedUser = await userQueries.updateUser({password: password}, id);
        if (updatedUser) {
            res.send(updatedUser);
        }
        return next(new ServerError("Something wrong with Server in Update New Password"))
    } catch (e) {
        next(e);
    }
};
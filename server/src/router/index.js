const express = require('express');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const hashPass = require('../middlewares/hashPassMiddle');
const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const chatController = require('../controllers/chatController');
const upload = require('../utils/fileUpload');
const router = express.Router();
const addOffersNamesSearchOptions = require('../middlewares/offersNamesSearchingOptions');
const findUserByEmail = require("../middlewares/findUserByEmail");
const sendEmailForRecoverPass = require("../middlewares/sendEmail");
const recoverPassword = require("../middlewares/recoverPassword");

router.post(
    '/registration',
    validators.validateRegistrationData,
    hashPass,
    userController.registration,
);

router.post(
    '/login',
    validators.validateLogin,
    userController.login,
);

router.post(
    '/dataForContest',
    checkToken.checkToken,
    contestController.dataForContest,
);

router.post(
    '/pay',
    checkToken.checkToken,
    basicMiddlewares.onlyForCustomer,
    upload.uploadContestFiles,
    basicMiddlewares.parseBody,
    validators.validateContestCreation,
    userController.payment,
);

router.post(
    '/getCustomersContests',
    checkToken.checkToken,
    contestController.getCustomersContests,
);

router.get(
    '/getContestById',
    checkToken.checkToken,
    basicMiddlewares.canGetContest,
    contestController.getContestById,
);

router.post(
    '/getAllContests',
    checkToken.checkToken,
    basicMiddlewares.onlyForCreative,
    contestController.getContests,
);

router.post(
    '/getUser',
    checkToken.checkAuth,
);

router.get(
    '/downloadFile/:fileName',
    checkToken.checkToken,
    contestController.downloadFile,
);

router.post(
    '/updateContest',
    checkToken.checkToken,
    upload.updateContestFile,
    contestController.updateContest,
);

router.post(
    '/setNewOffer',
    checkToken.checkToken,
    upload.uploadLogoFiles,
    basicMiddlewares.canSendOffer,
    contestController.setNewOffer,
);

router.post(
    '/setOfferStatus',
    checkToken.checkToken,
    basicMiddlewares.onlyForCustomerWhoCreateContest,
    contestController.setOfferStatus,
);

router.post(
    '/changeMark',
    checkToken.checkToken,
    basicMiddlewares.onlyForCustomer,
    userController.changeMark,
);

router.post(
    '/updateUser',
    checkToken.checkToken,
    upload.uploadAvatar,
    userController.updateUser,
);

router.post(
    '/cashout',
    checkToken.checkToken,
    basicMiddlewares.onlyForCreative,
    userController.cashout,
);

router.post(
    '/newMessage',
    checkToken.checkToken,
    chatController.addMessage,
);

router.post(
    '/getChat',
    checkToken.checkToken,
    chatController.getChat,
);

router.post(
    '/getPreview',
    checkToken.checkToken,
    chatController.getPreview,
);

router.post(
    '/blackList',
    checkToken.checkToken,
    chatController.blackList,
);

router.post(
    '/favorite',
    checkToken.checkToken,
    chatController.favoriteChat,
);

router.post(
    '/createCatalog',
    checkToken.checkToken,
    chatController.createCatalog,
);

router.post(
    '/updateNameCatalog',
    checkToken.checkToken,
    chatController.updateNameCatalog,
);

router.post(
    '/addNewChatToCatalog',
    checkToken.checkToken,
    chatController.addNewChatToCatalog,
);

router.post(
    '/removeChatFromCatalog',
    checkToken.checkToken,
    chatController.removeChatFromCatalog,
);

router.post(
    '/deleteCatalog',
    checkToken.checkToken,
    chatController.deleteCatalog,
);

router.post(
    '/getCatalogs',
    checkToken.checkToken,
    chatController.getCatalogs,
);

router.get(
    '/getActingOffersNames',
    addOffersNamesSearchOptions.offersNamesSearchOptions,
    contestController.getActingOffersNames
);

router.get(
    '/getAllTransactions',
    contestController.getAllTransactions
);

router.get(
    '/getAllUserTransactions',
    checkToken.checkToken,
    contestController.getAllUserTransactions
);

router.post(
    '/recoverPassword',
    findUserByEmail.findUserByEmail,
    hashPass,
    recoverPassword.createTokenNewPassword,
    sendEmailForRecoverPass.sendEmailForRecoverPass
);

router.post(
    '/recoverPasswordConfirm',
    checkToken.checkToken,
    recoverPassword.updateNewPassword
);

module.exports = router;

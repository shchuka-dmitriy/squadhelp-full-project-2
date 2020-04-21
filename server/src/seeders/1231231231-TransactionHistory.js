'use strict';
const moment = require( 'moment' );

function generateTransactions() {
    const transactions = [];
    const typeOperation = ['INCOME', 'CONSUMPTION'];
    const maxUserId = 25, maxSumValue = 1000000, divisor = 100;

    for ( let i = 0; i < maxUserId; i ++ ) {
        transactions.push(
            {
                createdAt: moment( '2020-01-20' ).set( 'day', Math.round( Math.random() * 10 ) ).toDate(),
                typeOperation: typeOperation[Math.floor(Math.random() * typeOperation.length)],
                sum: Math.floor(Math.random() * maxSumValue)/divisor,
                userId: Math.floor(Math.random() * Math.floor(maxUserId))+1,
            }
        );
    }
    return transactions;
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('TransactionHistory', generateTransactions(), {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('TransactionHistory', generateTransactions(), {});
    }
};
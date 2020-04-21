'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TransactionHistory', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            typeOperation: {
                type: Sequelize.ENUM(['INCOME', 'CONSUMPTION']),
                allowNull: false
            },
            sum: {
                type: Sequelize.DECIMAL,
                allowNull: false,
                defaultValue: 0
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('TransactionHistory', {});
    }
};
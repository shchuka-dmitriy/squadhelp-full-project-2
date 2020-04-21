'use strict';

module.exports = (sequelize, DataTypes) => {
    const TransactionHistory = sequelize.define('TransactionHistory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                isAfter: new Date()
            }
        },
        typeOperation: {
            type: DataTypes.ENUM('INCOME', 'CONSUMPTION'),
            allowNull: false
        },
        sum: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });
    TransactionHistory.associate = function (models) {
        TransactionHistory.belongsTo(models.User, {
            foreignKey: 'userId',
            sourceKey: 'id'
        });
    };
    return TransactionHistory;
};
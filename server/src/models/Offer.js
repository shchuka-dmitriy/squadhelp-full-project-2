'use strict';
const {OFFER_STATUS_PENDING, OFFER_STATUS_REJECTED, OFFER_STATUS_CONFIRM} = require("../constants");

module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,

      },
      contestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      originalFileName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'pending',
      },
      moderatorStatus: {
          type: DataTypes.ENUM(OFFER_STATUS_PENDING, OFFER_STATUS_REJECTED, OFFER_STATUS_CONFIRM),
          allowNull: false,
          defaultValue: OFFER_STATUS_PENDING
      }
    },
    {
      timestamps: false,
    });

  Offer.associate = function (models) {
    Offer.belongsTo(models.User, { foreignKey: 'user_id', sourceKey: 'id' });
  };

  Offer.associate = function (models) {
    Offer.belongsTo(models.Contest,
      { foreignKey: 'contest_id', sourceKey: 'id' });
  };

  return Offer;
};
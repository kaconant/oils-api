'use strict';

module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                is: /^[a-z0-9\_\-]+$/i,
                }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
            isEmail: true
            }
        },
        googleid: DataTypes.STRING,
        password: DataTypes.STRING,

    }, {});
    return user;
};
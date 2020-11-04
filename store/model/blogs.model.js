// export a function to re-use and then create a model on sequelize
module.exports = (sequelize, type) => {
    return sequelize.define('blogs', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: type.STRING,
            allowNull: false
        },
        content: {
            type: type.STRING,
            allowNull: false
        },
        image: {
            type: type.STRING,
            allowNull: false
        },
        category: {
            type: type.STRING,
            allowNull: false
        },
        date: {
            type: type.STRING,
            allowNull: false
        }
    });
}
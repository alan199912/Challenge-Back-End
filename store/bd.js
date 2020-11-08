const Sequelize = require('sequelize');
const config = require('../config/config');

const BlogsModel = require('./model/blogs.model')

// Connect DB
const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql'
});

// function to know if the db was connected
async function handleCon() {

    try {
        await sequelize.sync({ force: false});
        console.log('[CONNECTION]: Connection has been established successfully.');
    } catch (error) {
        console.error('[CONNECTION]: Unable to connect to the database:', error);
    }

}

handleCon();

// model of table
const Blog = BlogsModel(sequelize, Sequelize);

// functions to CRUD
async function list() {

    return await Blog.findAll({
        attributes: ['id','title', 'image', 'category', 'date']
    });

}

async function get(_id) {

    return await Blog.findOne({
        where: {
            id: parseInt(_id)
        }
    })
    

}

async function post(data) {

    return await Blog.create({
        title: data.title,
        content: data.content,
        image: data.image,
        category: data.category,
        date: data.date
    });

}

async function update(data, _id) {

    return await Blog.update({
        title: data.title,
        content: data.content,
        image: data.image,
        category: data.category,
        date: data.date, 
    }, {
        where: {
            id: _id
        }
    })
}

async function remove(_id) {

    return await Blog.destroy({
        where: {
            id: _id
        }
    })
}

module.exports = {
    Blog,
    list,
    post,
    get,
    update,
    remove,
}
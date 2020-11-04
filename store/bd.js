const Sequelize = require('sequelize');
const config = require('../config/config');
const blogsModel = require('./model/blogs.model');

const BlogsModel = require('./model/blogs.model')

// Connect DB
const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql'
});

// function to know if the db was connected
async function handleCon() {

    try {
        await sequelize.authenticate();
        console.log('[CONNECTION]: Connection has been established successfully.');
    } catch (error) {
        console.error('[CONNECTION]: Unable to connect to the database:', error);
    }

}

handleCon();

// model of table
const Blog = BlogsModel(sequelize, Sequelize);

// Sync the table
(async () => {
    await sequelize.sync({ force: true });
    console.log('[SYNC]: Tables sync')
})(); 

// functions to CRUD

async function list() {
    try {
        return await Blog.findAll({
            attributes: ['title','image','category','date']
        });
    } catch (error) {
        return console.log('[ERROR]: No se pudo listar los blogs');
    }
}

async function get(id) {
    try {
        return await Blog.findAll({
            where: {
                id: id
            }
        });
    } catch (error) {
        return console.log('[ERROR]: No se encontro un blog con esas caracteristicas');
    }
}

async function post(data) {
    try {
        return await Blog.create({
            title: data.title,
            content: data.content,
            image: data.image,
            category: data.category,
            date: data.date
        });
    } catch (error) {
        return console.log('[ERROR]: Datos invalidos');
    }
}

async function update(data, id) {
    try {
        return await Blog.update(data, {
            where: {
                id: id
            }
        })
    } catch (error) {
        return console.log('[ERROR]: No se puede editar');
    }
}

async function remove(id) {
    try {
        return await Blog.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        
    }
}

module.exports = {
    Blog,
    list,
    post,
    get,
    update,
    remove,
}
const express = require('express');
const response = require('../../network/response.network');
const Controller = require('./index.post');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', remove);

// internal function
function list(req, res, next) {
    Controller.list()
        .then( (lista) => {
            return response.success(req, res, lista, 200);
        })
        .catch( (e) => {
            return response.error(req, res, e, 500);
        });
}

function get(req, res, next) {

        Controller.get(req.params.id)
        .then( (blog) => {
            if(blog == null ) {
                throw Error 
            } else {
                return response.success(req, res, blog, 200);
            }
        })
        .catch((e) => {
            return response.error(req, res, 'No se pudo encontrar el blog', 500, '[ERROR]: id valor nulo');
        });
}

function post(req, res) {
    Controller.post(req.body)
        .then( (lista) => {
            return response.success(req, res, 'Blog creado', 201);
        })
        .catch( (e) => {
            return response.error(req, res, 'Error en los datos', 500, '[ERROR]: Datos invalidos');
        });
}

function update(req, res, next) {
    Controller.update(req.body ,req.params.id)
        .then( (blog) => {
            if(blog == 0) {
                throw Error
            } else {
                return response.success(req, res, 'Se edito correctamente', 200);
            }
        })
        .catch((e) => {
            return response.error(req, res, 'Datos invalidos', 500, '[ERROR]: Datos invalidos');
        });
}

function remove(req, res) {
    
    Controller.remove(req.params.id)
        .then( (blog) => {
            if(blog == 0) {
                throw Error
            } else {
                return response.success(req, res, 'Se elimino correctamente', 200);
            }
        })
        .catch((e) => {
            return response.error(req, res, 'Error al eliminar', 500, '[ERROR]: NO SE PUEDE ELIMINAR');
        });
}

module.exports = router;

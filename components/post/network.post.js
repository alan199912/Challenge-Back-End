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
            response.success(req, res, lista, 200);
        })
        .catch( (e) => {
            response.error(req, res, e, 500);
        });
}

async function get(req, res, next) {
    Controller.get(req.params.id)
        .then( (lista) => {
            response.success(req, res, lista, 200);
        })
        .catch( (e) => {
            response.error(req, res, 'Error en la busqueda', 400);
        });
}

function post(req, res) {
    Controller.post(req.body)
        .then( (lista) => {
            response.success(req, res, lista, 201);
        })
        .catch( (e) => {
            response.error(req, res, 'Error en los datos', 400);
        });
}

function update(req, res, next) {
    Controller.update(req.body ,req.params.id)
        .then( (lista) => {
            response.success(req, res, 'Elemento editado correctamente', 200);
        })
        .catch((e) => {
            response.error(req, res, 'Datos invalidos', 400);
        });
}

function remove(req, res) {
    Controller.remove(req.params.id)
        .then( (lista) => {
            response.success(req, res, 'Blog eliminado correctamente', 200);
        })
        .catch((e) => {
            response.error(req, res, 'Error al eliminar', 400);
        });
}

module.exports = router;

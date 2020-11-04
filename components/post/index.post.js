const store = require('../../store/bd');

const crtl = require('./controller.post');

module.exports = crtl(store);
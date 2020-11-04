const TABLA = 'post';

module.exports = (injectedStore) => {
    let store = injectedStore;

    if(!store) {
        store = require('../../store/bd');
    }

    function list() {
        return store.list();
    }

    function get(id) {
        return store.get(id);
    }

    function post(data) {
        return store.post(data);
    }

    function update(data, id) {
        return store.update(data, id);
    }

    function remove(id) {
        return store.remove(id);
    }

    return {
        list,
        get,
        post,
        remove,
        update,
        remove,
    }
}
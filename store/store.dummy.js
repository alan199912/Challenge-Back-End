const db = [
    {
        id: 1,
        title: 'First post',
        content: 'post 1',
        img: 'img.png',
        category: 'book',
        date: '27/01/1999',
    },
    {
        id: 2,
        title: 'Second post',
        content: 'post 2',
        img: 'img2.png',
        category: 'tablet',
        date: '19/11/2009',
    }
];

async function list() {
    return db;
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter( item => item.id == id)[0] || null;
}

async function post(data) {
    db.push(data);
    console.log(data);
}

async function update() {
    let col = await list(table);
    
}

async function remove(tabla, id) {

}

module.exports = {
    list,
    get,
    post,
    remove,
}
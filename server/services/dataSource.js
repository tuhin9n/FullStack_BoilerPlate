const db = require('./db/db');
const helper = require('./helper');
const config = require('./db/config');

async function getStudents(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM student LIMIT ${offset},${config.listPerPage}`
    );
    console.log('result from db', rows)
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

module.exports = {
    getStudents
}
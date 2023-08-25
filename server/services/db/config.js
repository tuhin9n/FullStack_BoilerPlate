const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "db4free.net",
        user: "tuhin9n",
        password: "Tuhin9n@@@",
        database: "db_tsb_fdb",
        connectTimeout: 60000
    },
    listPerPage: 10,
};
module.exports = config;
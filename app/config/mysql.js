module.exports = ({envs}) => Object.freeze({
    url: `mysql://${envs.MYSQL_USER}:${envs.MYSQL_PASSWORD}@${envs.MYSQL_HOST}:${envs.MYSQL_PORT}/${envs.MYSQL_DB}`,
    isPromisify: true
});
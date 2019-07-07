module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/alterlog.io/'
        : '/'
}
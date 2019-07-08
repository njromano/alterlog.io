module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/alterlog.io/'
        : '/',
    pwa: {
        themeColor: "#699947"
    }
}

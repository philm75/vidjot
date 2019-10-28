if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb+srv://phil-merrilees:cjv1975@cluster0-wwjld.mongodb.net/test?retryWrites=true&w=majority'
    } 
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}
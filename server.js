import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './src/TypeDefs';
import resolvers from './src/resolvers';
import mongoose from 'mongoose';
//conect mongoDb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Home_manegment_DB', { useNewUrlParser: true })
mongoose.connection.once('open', function () {
    console.log('connection made sucessfull');

}).on('error', function (error) {
    console.log('connection error:', error)
})


const { App_PORT = '4000', NODE_ENV = 'development' } = process.env
const app = express()
const IN_PROD = NODE_ENV !== 'production'

app.disable('x-powered-by')
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: IN_PROD
})
server.applyMiddleware({ app });
app.listen({ port: App_PORT }, () => {
    console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
})
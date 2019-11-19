import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import typeDefs from './TypeDefs';
import resolvers from './resolvers';
const {App_PORT = '4000',NODE_ENV ='development'}=process.env
const app = express()
const IN_PROD = NODE_ENV !== 'production'

app.disable('x-powered-by')
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: IN_PROD
    })
server.applyMiddleware({app});
app.listen({port:App_PORT},()=>{
    console.log(`server ready at http://localhost:4000${server.graphqlPath}`)
})
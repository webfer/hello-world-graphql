import compression from 'compression'
import  express  from 'express'
import cors from 'cors'
import schema from './schema'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'

import http from 'http'

const PORT = 5300


async function listen(PORT: number) {
    const app = express()
    app.use(cors())
    app.use(compression())
    const httpServer = http.createServer(app)

      const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      })
    
    
    await server.start()
      server.applyMiddleware({ app })

  return new Promise((resolve, reject) => {
    httpServer.listen(PORT).once('listening', resolve).once('error', reject)
  })
}

async function main() {
  try {
    await listen(PORT)
    console.log(`🚀 Hola mundo api GraphQL http://localhost:${PORT}/graphql`)
  } catch (err) {
    console.error('💀 Error starting the node server', err)
  }
}


void main()
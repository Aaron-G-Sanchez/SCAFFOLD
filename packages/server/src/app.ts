import express, { Express } from 'express'

export const CreateApp = (): Express => {
  const expressApp = express()

  return expressApp
}

export const main = () => {
  const server = CreateApp()

  server.listen(3000, () => {
    console.log(`Server listening on port: 3000`)
  })
}

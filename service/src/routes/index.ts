import express from 'express'

import task from './task'
import user from './user';

const routes = (app: express.Application) => {
  app.use('/', user)
  app.use('/tasks', task)
}

export default routes;

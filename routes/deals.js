import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', dealsCtrl.index)

router.get('/new', isLoggedIn, dealsCtrl.new)

router.get('/:id', dealsCtrl.show)

router.get('/:id/edit', isLoggedIn, dealsCtrl.edit)

router.post('/', isLoggedIn , dealsCtrl.create)

router.put('/:id', isLoggedIn, dealsCtrl.update)

export {
  router
}

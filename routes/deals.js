import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', dealsCtrl.index)

router.get('/new', isLoggedIn, dealsCtrl.new)

router.post('/', isLoggedIn , dealsCtrl.create)

export {
  router
}

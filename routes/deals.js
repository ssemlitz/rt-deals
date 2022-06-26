import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'

const router = Router()

router.get('/', dealsCtrl.index)

export {
  router
}

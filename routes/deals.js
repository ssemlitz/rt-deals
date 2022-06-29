import { Router } from 'express'
import * as dealsCtrl from '../controllers/deals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', dealsCtrl.index)

router.get('/new', isLoggedIn, dealsCtrl.new)

router.get('/:id', dealsCtrl.show)

router.get('/:id/edit', isLoggedIn, dealsCtrl.edit)

router.get('/:dealId/comments/:commentId/edit', isLoggedIn, dealsCtrl.editComment)

router.post('/', isLoggedIn , dealsCtrl.create)

router.post('/:id/comments', isLoggedIn, dealsCtrl.addComment)

router.put('/:id', isLoggedIn, dealsCtrl.update)

router.delete('/:id', isLoggedIn, dealsCtrl.delete)

router.delete('/:dealId/comments/:commentId', isLoggedIn, dealsCtrl.deleteComment)

export {
  router
}

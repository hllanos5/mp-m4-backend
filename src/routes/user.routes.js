import { Router } from 'express'
import UserController from '../controllers/user.controller.js'
import { validateUserById } from '../middlewares/user.middleware.js'

const router = Router()

router.get('/', UserController.index)
router.get('/:id', validateUserById, UserController.getById)
router.post('/', UserController.create)
/*router.delete('/:id', validateUserID, UserController.delete)
router.put('/:id', validateUserID, UserController.updatePut)
router.patch('/:id', validateUserID, UserController.updatePatch)*/

export default router

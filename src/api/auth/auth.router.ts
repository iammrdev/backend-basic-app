import { Router } from 'express';
import { AuthController } from './auth.controller.js';
import { loginSchema } from './auth.validator.js';

const router = Router();

router.route('/login').post(loginSchema, AuthController.login);

export default router;
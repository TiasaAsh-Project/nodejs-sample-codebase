import { Router } from 'express';
import { createAccount } from '@controllers/auth/create-account';
import { login } from '@controllers/auth/login';
import { generateNewToken } from '@controllers/auth/generate-new-token';

const router = Router();

router.post('/create-account', createAccount);
router.post('/login', login);
router.post('/refresh-token', generateNewToken);

export default router;

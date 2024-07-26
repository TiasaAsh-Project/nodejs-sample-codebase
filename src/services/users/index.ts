import { createUserToken } from './create-user-token';
import { getUserByEmail} from './get-user-by-email';
import { getUserById } from './get-user-by-id';
import { saveUser } from './save-user';
import { verifyToken } from './verify-token';

// src/services/users/index.ts

export const userService = {
    createUserToken,
    getUserByEmail,
    getUserById,
    saveUser,
    verifyToken,
  };
  

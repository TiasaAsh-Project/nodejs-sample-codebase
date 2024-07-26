import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { getUserByEmail } from '@services/users';
import {  createUserToken} from '@services/users';
import { ILoginUserRequest } from '@modules/users/model';

/**
 * This function handles user login
 * @param req
 * @param res
 */
export const login = controller(async (req: Request, res: Response): Promise<void> => {
  const { email, password }: ILoginUserRequest = req.body;

  const user = await getUserByEmail(email);

  if (user && user.password === password) { // Assume password is already hashed and verified
    const tokens = createUserToken(user);
    res.status(200).json({
      message: 'Login successful',
      tokens,
    });
  } else {
    res.status(401).json({
      message: 'Invalid email or password',
    });
  }
});

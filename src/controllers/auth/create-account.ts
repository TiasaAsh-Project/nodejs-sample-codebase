import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { ICreateUserRequest } from '@modules/users/model';
import { saveUser } from '@services/users/save-user';
import { createUserToken } from '@services/users/create-user-token';

/**
 * This function handles user registration
 * @param req
 * @param res
 */
export const createAccount = controller(async (req: Request, res: Response): Promise<void> => {
  const userDetails: ICreateUserRequest = req.body;

  // Save the new user to the database
  const newUser = await saveUser(userDetails);

  // Check if newUser is of type IUser
  if (!newUser) {
    res.status(400).json({ message: 'User creation failed' });
    return;
  }

  // Generate tokens for the newly created user
  const tokens = createUserToken(newUser);

  // Respond with success message and tokens
  res.status(201).json({
    message: 'User created successfully',
    tokens,
  });
});

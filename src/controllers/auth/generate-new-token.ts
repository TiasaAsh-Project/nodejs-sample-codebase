import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { createUserToken, getUserById, verifyToken } from '@services/users';

/**
 * This function handles the generation of new tokens
 * @param req
 * @param res
 */
export const generateNewToken = controller(async (req: Request, res: Response): Promise<void> => {
  const { refreshToken } = req.body;
  
  try {
    // Verify the refresh token
    const secret = process.env.USER_REFRESH_TOKEN_SECRET;
    
    if (!secret) {
      res.status(500).json({ message: 'Server configuration error' });
      return;
    }

    const decoded: any = await verifyToken(refreshToken, secret);
    const userId = decoded.id;

    // Get user details and create new tokens
    const user = await getUserById(userId); // Implement this service to get user details
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    
    const newTokens = createUserToken(user);

    res.status(200).json({
      message: 'Tokens refreshed successfully',
      tokens: newTokens,
    });
  } catch (error) {
    res.status(401).json({
      message: 'Invalid refresh token',
    });
  }
});

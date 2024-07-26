import jwt from 'jsonwebtoken';
import { IUser, IUserTokens } from '@modules/users/model';
import { envs } from '@config/env';

/**
 * Generate new JWT tokens for the user
 * @param user - User object
 */
export const createUserToken = (user: IUser): IUserTokens => {
  const accessTokenExpiry = envs.jwt.accessToken.expiry;
  const refreshTokenExpiry = envs.jwt.refreshToken.expiry;
  const accessToken = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    envs.jwt.accessToken.secret,
    { expiresIn: accessTokenExpiry },
  );
  const refreshToken = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    envs.jwt.refreshToken.secret,
    { expiresIn: refreshTokenExpiry },
  );
  return {
    accessToken,
    accessTokenExpiry,
    refreshToken,
    refreshTokenExpiry,
    name: user.name,
    email: user.email,
  };
};

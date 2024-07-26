import jwt from 'jsonwebtoken';

/**
 * Verify the token and return the decoded data
 * @param token - JWT token
 * @param tokenSecret - Secret key to verify the token
 */
export const verifyToken = (token: string, tokenSecret: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, tokenSecret, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

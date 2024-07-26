import userModel from '../../modules/users/schema';

export const getUserByEmail = async (email: string) => {
  return await userModel.findOne({ email }).select('-password');
};

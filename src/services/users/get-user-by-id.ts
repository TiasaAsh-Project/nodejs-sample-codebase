import userModel from '../../modules/users/schema';

export const getUserById = async (id: string) => {
  return await userModel.findById(id).select('-password');
};

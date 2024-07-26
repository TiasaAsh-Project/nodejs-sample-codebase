import userModel from '../../modules/users/schema';
import { ICreateUserRequest } from '../../modules/users/model';

export const saveUser = async (userDetails: ICreateUserRequest) => {
  const newUser = new userModel({
    name: {
      first: userDetails.firstName,
      last: userDetails.lastName,
    },
    email: userDetails.email,
    password: userDetails.password,
  });

  await newUser.save();
  return newUser;
};

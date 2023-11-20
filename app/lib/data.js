import { User } from "./models";

export const fetchUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users");
  }
};

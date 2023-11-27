import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  console.log(q);
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Faild to fetch users");
  }
};

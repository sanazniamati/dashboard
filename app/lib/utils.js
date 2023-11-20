export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnect) return;
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnect = db.connection[0].readyState;
  } catch (error) {
    throw new error();
  }
};

import jwt from "jsonwebtoken";

export const generateToken = (userId, name, role) => {
  const accessToken = jwt.sign(
    { _id: userId, name, role },
    process.env.JWT_ACCESS_KEY,
    {
      expiresIn: process.env.JWT_ACCESS_KEY_EXPIRES_IN || "15m",
    },
  );
  const refreshToken = jwt.sign({ _id: userId }, process.env.JWT_REFRESH_KEY, {
    expiresIn: process.env.JWT_REFRESH_KEY_EXPIRES_IN || "7d",
  });
  return { accessToken, refreshToken };
};

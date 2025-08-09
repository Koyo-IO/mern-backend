const jwt = require("jsonwebtoken");
const secret_key = "mern-market";

const auth = async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90YWluLmNvbSIsImlhdCI6MTc1NDczMTY0MywiZXhwIjoxNzU0ODE0NDQzfQ.kK9VyabIDaUfE1apvEojUx8Pz4MGx56vz";
  //   const token = await req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "トークンがありません" });
  }
  try {
    const decoded = jwt.verify(token, secret_key);
    req.body.email = decoded.email;
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "トークンが正しくないので、ログインしてください" });
  }
};

module.exports = auth;

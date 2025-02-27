import { generateToken } from "../utils/authUtils.js";
import { adminEmail, adminName } from "../constants.js";

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    // Basic authentication (replace with your actual authentication logic)
    if (email === adminEmail && password === "admin123") {
      const token = generateToken({
        id: 1,
        email: adminEmail,
        name: adminName,
      });
      return res.json({ token });
    }

    res.status(401).json({ error: "Invalid email or password." });
  },
};

export default authController;

import connectDB from "@/db";
import userModel from "@/schema/users";

export default async function handler(req, res) {
  await connectDB(); // Connect to the database

  // Handle POST request
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Log request data to ensure correct data is received
    console.log("Received data:", { name, email, password });

    // Validate required fields
    if (!name || !email || !password) {
      console.log("Validation failed: missing required fields.");
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Create and save the new user
      const newUser = new userModel({ name, email, password });
      await newUser.save();

      // Log success and respond with created user data
      console.log("User saved successfully:", newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      // Handle any errors during user creation
      console.error("Error saving user:", error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    // Handle unsupported request methods (e.g., GET, PUT, DELETE)
    return res.status(405).json({ error: "Method not allowed" });
  }
}

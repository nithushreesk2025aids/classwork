import { z } from "zod";

export const registerschema = z.object({
  name: z.string().min(3, "Name must contain at least 3 letters"),

  email: z.string().email("Enter valid email"),

  password: z.string().min(8, "Password length should be at least 8"),

  age: z.coerce.number().min(18, "Age must be at least 18")
});
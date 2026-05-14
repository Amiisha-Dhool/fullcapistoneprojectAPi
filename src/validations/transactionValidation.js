const { z } = require("zod");

const transactionSchema = z.object({
  title: z
    .string()
    .min(2, "Title is required"),

  amount: z
    .number({
      invalid_type_error: "Amount must be a number",
    })
    .positive("Amount must be positive"),

  type: z.enum(["income", "expense"]),

  category: z
    .string()
    .min(2, "Category is required"),

  date: z.string().optional(),
});

module.exports = {
  transactionSchema, 
};
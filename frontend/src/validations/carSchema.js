import { z } from "zod";

export const carSchema = z.object({
  licensePlate: z.string().trim().min(1, "License plate is required"),

  brand: z.string().trim().min(1, "Brand is required"),

  model: z.string().trim().min(1, "Model is required"),

  color: z.string().trim().optional(),

  year: z
    .string()
    .trim()
    .optional()
    .refine((value) => {
      if (!value) return true;

      const year = Number(value);
      const currentYear = new Date().getFullYear();

      return year >= 1900 && year <= currentYear + 1;
    }, "Year is invalid"),

  note: z.string().trim().optional(),
});
import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),

  photo: yup.mixed().required("Photo is required"),

  role: yup.string()
  .oneOf(['user', 'seller'], 'Invalid role') 
  .required('Role is required'),
});

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const inputClass = "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
 const dispatch = useDispatch();
 const navigate = useNavigate(); 

  const {values , handleChange, handleBlur, handleSubmit, errors ,touched} = useFormik({
    initialValues: {
      email: "chirag1@gmail.com",
      password: "Chirag@123",
    },
    validationSchema,
    onSubmit: async(values) => {
      const data = await dispatch(login(values));
      if (data.payload.status) {
        localStorage.setItem("token", data.payload.token);
        toast.success(data.payload.message || "Login successful");
        navigate("/");
      } else {
        toast.error(data.payload.message || "Login failed");
      }
    },
  });
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6" >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                   className={inputClass + (errors.email && touched.email ? " border-red-500 border-b-2" : "")}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                  {
                  errors.email && touched.email ? (
                    <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>
                  ) : null
                }
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={inputClass + (errors.password && touched.password ? " border-red-500 border-b-2" : "")}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                  {
                  errors.password && touched.password ? (
                    <p className="mt-1 text-xs font-medium text-red-600">{errors.password}</p>
                  ) : null
                }
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/registration"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

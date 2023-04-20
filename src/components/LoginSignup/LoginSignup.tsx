import { useState } from "react";
import Login from "../../assets/svg/login.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import SignUp from "./SignUp";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email Is Required"),
  password: Yup.string().required("Password Is Required"),
});

const LoginSignup: React.FC<any> = (props) => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center justify-center h-[100vh] w-full bg-gray-50">
        <div className="flex p-10 flex-col lg:flex-row h-[70%] my-auto w-full lg:w-[70%] m-auto">
          <div className=" w-full  bg-white rounded-l-lg shadow-lg ">
            <div className="flex w-full flex-row">
              <p
                onClick={() => setIsSignup(false)}
                style={{
                  backgroundColor: `${isSignup ? "white" : "#B8B8B8"}`,
                }}
                className={`px-6 py-3 w-1/2 text-center`}
              >
                Sign In
              </p>{" "}
              <p
                onClick={() => setIsSignup(true)}
                style={{
                  backgroundColor: `${isSignup ? "#B8B8B8" : "white"}`,
                }}
                className={`px-6 py-3 w-1/2 text-center`}
              >
                Sign Up
              </p>
            </div>
            <div className="p-10">
              {isSignup ? (
                <SignUp />
              ) : (
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={SignInSchema}
                  onSubmit={(values) => {
                    console.log("values signin", values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => {
                    return (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {
                          <>
                            <div>
                              <label className="block text-lg font-medium text-gray-700 mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name="email"
                                className="w-full p-3 bg-gray-100 text-gray-600 border-stone-800 border-l-8 outline-none "
                              />
                            </div>
                            <p className="text-red-600">
                              {touched?.email && errors?.email}
                            </p>
                            <div>
                              <label
                                htmlFor="password"
                                className="block text-lg font-medium text-gray-700 mb-2"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                name="password"
                                className="w-full p-3 bg-gray-100 text-gray-600 border-stone-800 border-l-8 outline-none "
                              />
                            </div>
                            <p className="text-red-600">
                              {touched?.password && errors?.password}
                            </p>
                          </>
                        }
                        <button
                          type="submit"
                          className="w-full mt-10 bg-stone-700 hover:bg-stone-900 text-white font-medium py-2 rounded transition duration-300"
                          style={{ marginTop: "52px" }}
                          id="signIn"
                        >
                          Sign In
                        </button>
                      </form>
                    );
                  }}
                </Formik>
              )}
            </div>
          </div>
          <div className="p-10 w-full bg-black rounded-r-lg shadow-lg">
            <img
              src={Login as unknown as string}
              alt="login"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

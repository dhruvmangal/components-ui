import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  emailS: Yup.string().email("Invalid email").required("Required"),
  mobileNo: Yup.string().required("Required"),
  passwordS: Yup.string().required("Required"),
  rePassword: Yup.string()
    .required("Confirm your password")
    .oneOf([Yup.ref("passwordS"), "password"], "Passwords must match"),
});

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mobileNo: "",
        emailS: "",
        passwordS: "",
        rePassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        console.log("values signup", values);
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
                <div className="flex flex-col sm:flex-row">
                  <div className=" w-full sm:w-1/2 mr-1">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      name="firstName"
                      className="w-full py-2   text-gray-600 border-stone-800 border-b-[1px] outline-none "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <p className="text-red-600">
                      {touched?.firstName && errors?.firstName}
                    </p>
                  </div>
                  <div className=" w-full sm:w-1/2  mt-8 sm:mt-0">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full py-2   text-gray-600 border-stone-800 border-b-[1px] outline-none "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <p className="text-red-600">
                      {touched?.lastName && errors?.lastName}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className=" w-full sm:w-1/2 mr-1">
                    <input
                      type="number"
                      id="mobileNo"
                      placeholder="Mobile No."
                      name="mobileNo"
                      className="w-full py-2   text-gray-600 border-stone-800 border-b-[1px] outline-none "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobileNo}
                    />
                    <p className="text-red-600">
                      {touched?.mobileNo && errors?.mobileNo}
                    </p>
                  </div>
                  <div className=" w-full sm:w-1/2  mt-8 sm:mt-0">
                    <input
                      type="email"
                      id="emailS"
                      name="emailS"
                      placeholder="Email Address"
                      className="w-full py-2   text-gray-600 border-stone-800 border-b-[1px] outline-none "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emailS}
                    />
                    <p className="text-red-600">
                      {touched?.emailS && errors?.emailS}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className=" w-full sm:w-1/2 mr-1">
                    <input
                      type="password"
                      id="passwordS"
                      placeholder="Password"
                      name="passwordS"
                      className="w-full py-2 text-gray-600 border-stone-800 border-b-[1px] outline-none"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.passwordS}
                    />
                    <p className="text-red-600">
                      {touched?.passwordS && errors?.passwordS}
                    </p>
                  </div>
                  <div className=" w-full sm:w-1/2  mt-8 sm:mt-0">
                    <input
                      type="password"
                      id="rePassword"
                      name="rePassword"
                      placeholder="Re-enter Password"
                      className="w-full py-2 text-gray-600 border-stone-800 border-b-[1px] outline-none"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rePassword}
                    />
                    <p className="text-red-600">
                      {touched?.rePassword && errors?.rePassword}
                    </p>
                  </div>
                </div>
              </>
            }
            <button
              type="submit"
              className="w-full mt-10 bg-stone-700 hover:bg-stone-900 text-white font-medium py-2 rounded transition duration-300"
              style={{ marginTop: "52px" }}
              id="signUp"
            >
              Sign Up
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignUp;

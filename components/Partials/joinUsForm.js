"use client";
import React, {useState} from "react";
import { useFormik } from "formik";
import { signupSchema } from "@/validation/signupSchema";
import PrimaryButton from "../UI/PrimaryButton";
import InputField from "../UI/InputField";
import { Phone } from "lucide-react";
import PhoneNumberInput from "../UI/PhoneNumberInput";
import { specialties, numberTypes } from "../../Constants/Homepage/HomepageForm";

export default function JoinUsForm() {

  const [acceptedTerms, setAcceptedTerms] = useState(false); // checkbox state
  const [termsError, setTermsError] = useState('');          // checkbox error message

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      number: "",
      numberType: "",
      specialty: "",
      agreed: false,
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { setSubmitting }) => {
      // // Handle form submission (e.g., API call)
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // checkbox validation
      if (!values.agreed) {
        setTermsError("Please select if you agree to the terms");
      } else {
        setTermsError("");

        const submissionValues = {
          ...values,
          number: values.number.replace(/[^\d]/g, ""),
        };

        console.log("Submit values:", submissionValues);

        setSubmitting(false);
      }
    },
    validateOnBlur: true, // Enable validation on blur
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } = formik;

   // Custom submit handler to include checkbox validation
   const handleCustomSubmit = (event) => {
    event.preventDefault();
    setAcceptedTerms(values.agreed);
    handleSubmit(); // Trigger Formik's handleSubmit
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="inputItem">
          <InputField
            type="text"
            value={values.firstName}
            hasError={errors.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="First Name *"
            onBlur={handleBlur}
          />
        </div>
        <div className="inputItem">
          <InputField
            type="text"
            name="lastName"
            value={values.lastName}
            hasError={errors.lastName}
            onChange={handleChange}
            placeholder="Last Name *"
            onBlur={handleBlur}
          />
        </div>

        <div className="inputItem">
          <InputField
            type="text"
            name="email"
            value={values.email}
            hasError={errors.email}
            onChange={handleChange}
            placeholder="Email Address *"
            onBlur={handleBlur}
          />
          {/* {touched.email && errors.email && (
        <div className="text-red-500">{errors.email}</div>
      )} */}
        </div>
        <div className="inputItem">
          <InputField
            type="text"
            name="zipCode"
            value={values.zipCode}
            hasError={errors.zipCode}
            onChange={handleChange}
            placeholder="Zip Code  *"
            onBlur={handleBlur}
          />
        </div>
        <div className="inputItem">
          <PhoneNumberInput
            value={values.number}
            onChange={handleChange("number")}
            hasError={errors.number} 
          />
        </div>
        <div className="inputItem">
          <select
            name="numberType"
            value={values.numberType}
            onChange={handleChange}
            className="w-full py-3 pl-5 pr-2 text-sm text-gray-400 bg-white rounded-3xl"
            required
          >
            <option value="" disabled>
              Select Number Type *
            </option>
            {numberTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="inputItem">
          <select
            name="specialty"
            value={values.specialty}
            onChange={handleChange}
            className="w-full py-3 pl-5 pr-2 text-sm text-gray-400 bg-white rounded-3xl"
            required
          >
            <option value="">Select Specialty *</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-row w-full mt-5 space-x-2">
        <input
          id="agreed"
          type="checkbox"
          className="w-4 h-4 bg-white border-0 outline-none text-[#8BC434] rounded-lg"
          checked={values.agreed}
          onChange={(e) => {
            setAcceptedTerms(e.target.checked); // Update local state
            handleChange(e); // Update Formik's state
          }}
          onBlur={handleBlur}
        />
        <label className="text-sm text-gray-800 " for="agreed">
          I understand and agree to the Privacy Policy and Terms of Use.{" "}
          <br></br>I agree to receive communications from Acadia Pharmaceuticals
          Inc.
        </label>
      </div>

      {/* Sign Up button */}
      <div className="flex mt-5 text-center ">
        <PrimaryButton
          onClick={handleCustomSubmit}
          text="Sign up"
          icon={true}
          styles="font-figtree-semibold w-full md:w-60 lg:w-60 text-center justify-center content-center items-center flex"
        />
      </div>

      <div>
          {termsError && ( <div className="mt-2 text-left">{termsError}</div> )}
      </div>

      {Object.values(errors).length > 0 ? (
        <div className="p-5 pb-0 mt-5 bg-white border-2 border-red-600 rounded-3xl">
          {Object.values(errors).map((msg) => (
            <div className="mb-5 font-semibold text-red-600">{msg}</div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import formImage from "../assets/form.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  language: yup.string().required("Language is required"),
  gender: yup.string().required("Gender is required"),
  college: yup.string().required("College name is required"),
});

const CandidateFormPage2 = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const onSubmit = (data) => {
    navigate("/quiz", { state: data });
  };
  return (
    <div>
      <>
        <div className="form-wrapper">
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="title-wrapper">
              <img
                src={formImage}
                alt="Candidate Details"
                className="form-img"
              />
              <h2 className="form-title">Candidate Details</h2>
            </div>

            <div className="form-group">
              <label>Name:</label>
              <input
                name="name"
                {...register("name", {
                  /*  required: true, */
                  /* message: "First Name is Reqired", */
                })}
              ></input>
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                {...register("gender", {
                  /* required: true  */
                })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p style={{ color: "red" }}>{errors.gender.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>college:</label>
              <input
                name="college"
                {...register("college", {
                  /* required: true */
                })}
              ></input>
              {errors.college && (
                <p style={{ color: "red" }}>{errors.college.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Test Language:</label>
              <select
                name="language"
                {...register("language", {
                  /* required: true */
                })}
              >
                <option value="">Select Language</option>

                <option value="javaScript">JavaScript</option>
                <option value="reactJs">ReactJs</option>
                <option value="oops">OOPs</option>
                <option value="htmlCss">HTML & CSS</option>
              </select>
              {errors.language && (
                <p style={{ color: "red" }}>{errors.language.message}</p>
              )}
            </div>
            <button type="submit">Start Test</button>
          </form>
        </div>
      </>
    </div>
  );
};

export default CandidateFormPage2;

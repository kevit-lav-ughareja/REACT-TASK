import { useNavigate } from "react-router-dom";
import "./CandidateFormPage.css";
import formImage from "../assets/form.jpg";
import { useState } from "react";

const CandidateFormPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      gender: formData.get("gender"),
      college: formData.get("college"),
      language: formData.get("language"),
    };
    if (!data.name) {
      setError(true);

      return;
    }
    if (!data.gender) {
      setError(true);
      return;
    }
    if (!data.college) {
      setError(true);
      return;
    }
    if (!data.language) {
      setError(true);
      return;
    }
    navigate("/quiz", { state: data });
  };
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="title-wrapper">
          <img src={formImage} alt="Candidate Details" className="form-img" />
          <h2 className="form-title">Candidate Details</h2>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input name="name" onChange={() => setError(false)}></input>
          {error && <p style={{ color: "red" }}>Name is required</p>}
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" onChange={() => setError(false)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {error && <p style={{ color: "red" }}>Gender is required</p>}
        </div>
        <div className="form-group">
          <label>college:</label>
          <input name="college" onChange={() => setError(false)}></input>
          {error && <p style={{ color: "red" }}>college is required</p>}
        </div>
        <div className="form-group">
          <label>Test Language:</label>
          <select name="language" onChange={() => setError(false)}>
            <option value="">Select Language</option>

            <option value="javaScript">JavaScript</option>
            <option value="reactJs">ReactJs</option>
            <option value="oops">OOPs</option>
            <option value="htmlCss">HTML & CSS</option>
          </select>
          {error && <p style={{ color: "red" }}>Language is required</p>}
        </div>
        <button type="submit">Start Test</button>
      </form>
    </div>
  );
};
export default CandidateFormPage;

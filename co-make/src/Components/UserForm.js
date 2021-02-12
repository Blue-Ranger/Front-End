import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Must have at least 6 characters")
    .required("Must have a username?"),
  title: yup.string().required("Must have a title"),
  location: yup.string().required("Must have an address"),
  description: yup.string().required("Description required"),
});

const UserForm = ({ setCards, cards }) => {
  const [formState, setFormState] = useState({
    username: "",
    title: "",
    location: "",
    description: "",
  });

  // error state
  const [errors, setErrors] = useState({
    username: "",
    title: "",
    location: "",
    description: "",
  });

  const [order, setOrder] = useState({});

  // disablded state
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [photoDisabled, setPhotoDisabled] = useState(true);
  // use effect
  useEffect(() => {
    // he used a usestate disabledbutton instead of a function
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  useEffect(() => {
    // he used a usestate disabledbutton instead of a function
    formSchema.isValid(formState).then((valid) => {
      setPhotoDisabled(!valid);
    });
  }, [formState]);

  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)

      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  // formSubmit function
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Request Submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  };

  // handleChange function
  const handleChange = (e) => {
    console.log(e.target.name);
    e.persist();
    console.log("input changed!");
    setFormState({ ...formState, [e.target.name]: e.target.value });
    validate(e);
  };

  // formSubmit function
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Request Submitted!");
    setCards([...cards, { ...formState }]);
    setFormState({ username: "", title: "", location: "", description: "" });
  };

  // disabled function
  // const isFormInvalid = () =>
  //   !formState.title ||
  //   !formState.description ||
  //   !formState.username ||
  //   !formState.location;

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="card">Username</label>
      <input
        id="username"
        placeholder="Enter Name"
        value={formState.username}
        name="username"
        onChange={handleChange}
      />
      {errors.username.length > 0 ? (
        <p className="error">{errors.username}</p>
      ) : null}
      <label htmlFor="title">Title</label>

      <input
        id="title"
        type="text"
        placeholder="Title of the Issue"
        value={formState.title}
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        placeholder="Location"
        value={formState.location}
        name="location"
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Description of the Issue"
        value={formState.description}
        name="description"
        onChange={handleChange}
      />

      <button disabled={photoDisabled} type="submit">
        Add Photo
      </button>
      {/* <button disabled={isFormInvalid()} type="submit">
        Submit Request
      </button> */}
      <button disabled={buttonDisabled} type="submit">
        Submit Request
      </button>
    </form>
  );
};

export default UserForm;

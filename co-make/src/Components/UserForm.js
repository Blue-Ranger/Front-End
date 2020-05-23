import React, { useState } from "react";

const UserForm = ({ setCards, cards }) => {
  const [card, setCard] = useState({ title: "", description: "" });

  const handleChanges = (event) => {
    console.log(event.target.name);

    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setCards([...cards, { ...card /*id: Date.now()*/ }]);
    setCard({ title: "", description: "", username: "", location: "" });
  };

  const isFormInvalid = () =>
    !card.title || !card.description || !card.username || !card.location;
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="card">Username</label>
      <input
        id="username"
        placeholder="Enter Name"
        value={card.username}
        name="username"
        onChange={handleChanges}
      />

      <label htmlFor="title">Title</label>

      <input
        id="title"
        type="text"
        placeholder="Title of the Issue"
        value={card.title}
        name="title"
        onChange={handleChanges}
      />
      <label htmlFor="title">Location</label>
      <input
        id="location"
        type="text"
        placeholder="Location"
        value={card.location}
        name="location"
        onChange={handleChanges}
      />

      <label htmlFor="card">Description</label>
      <textarea
        id="description"
        placeholder="Description of the Issue"
        value={card.description}
        name="description"
        onChange={handleChanges}
      />

      <button disabled={isFormInvalid()} type="submit">
        Submit Request
      </button>
    </form>
  );
};

export default UserForm;

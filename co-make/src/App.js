import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserCards from "./Components/UserCard";
import UserForm from "./Components/UserForm";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Hind", sans-serif;
  text-align: center;
  background-image: linear-gradient(-315deg, black 55%, grey 57%);
  padding: 32px;
  letter-spacing: 2px;
`;

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      username: "John Doe",
      title: "Pothole",
      description: "There is a pot hole on the street in front of my house",
      location: "123 Some Place ave VA. USA",
    },
  ]);

  return (
    <StyledApp>
      <h1>Submit Your Request to the City</h1>

      <Router>
        <Link to={`/userform`}>
          <button>Start Here</button>
        </Link>
        <Link to={`/home`}>
          <button>Home</button>
        </Link>
        <Route path="/userform">
          <UserForm cards={cards} setCards={setCards} />
          <UserCards cards={cards} />
        </Route>

        <Route path="/home">
          <UserForm cards={cards} setCards={setCards} />
        </Route>
        <Route path="/" />
      </Router>
    </StyledApp>
  );
};
export default App;

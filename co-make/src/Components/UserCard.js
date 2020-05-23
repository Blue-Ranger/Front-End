import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: darkslategray;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 70%;
  padding: 10px;
  margin: 16px auto;
  text-align: left;
  border: 5px solid black;
  border-radius: 5px;
`;

const StyledH2 = styled.h2`
  background: snow;
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledH4 = styled.h4`
  background: snow;
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledHR = styled.hr`
  color: black;
  border: 6px solid black;
  border-radius: 5px;
`;

const StyledP = styled.p`
  background: snow;
  border: 2px solid black;
  border-radius: 5px;
`;

const UserCards = (props) => {
  return (
    <StyledDiv className="card-list">
      {props.cards.map((card) => (
        <div className="card" key={card.id}>
          <StyledH2>{card.username}</StyledH2>
          <StyledHR></StyledHR>
          <StyledH2>{card.title}</StyledH2>
          <StyledHR></StyledHR>
          <StyledH4>{card.location}</StyledH4>
          <StyledHR></StyledHR>
          <StyledP>{card.description}</StyledP>
        </div>
      ))}
    </StyledDiv>
  );
};

export default UserCards;

import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HeroList = (props) => {
  const { card } = props;
  return (
    <StyledHeroList>
      <StyledContainer>
        <Link to={`/heroes/${card.id}`}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </StyledContainer>
    </StyledHeroList>
  );
};

export default HeroList;

const StyledHeroList = styled.div`
  padding: 50px;
`;

const StyledContainer = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
`;

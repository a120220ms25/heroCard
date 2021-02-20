import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { heroes } from "../data";

const HeroSkill = (props) => {
  const { title, point, id, onAdd, onMinus } = props;

  const handleAdd = () => {
    onAdd && onAdd(id, point);
  };
  const handleMinus = () => {
    onMinus && onMinus(id, point);
  };

  return (
    <div>
      <StyledSkillItem>
        <h3>{title}</h3>
        <Button onClick={handleAdd} variant="dark">
          +
        </Button>
        <div value={point}>{point}</div>
        <Button onClick={handleMinus} variant="dark">
          -
        </Button>
      </StyledSkillItem>
    </div>
  );
};

export default HeroSkill;

const StyledSkillItem = styled.div`
  display: flex;
  margin: 50px;
  justify-content: space-between;
  width: 200px;
  h3 {
    margin-right: 30px;
  }
`;

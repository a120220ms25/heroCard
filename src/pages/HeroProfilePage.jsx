import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeroSkill from "../components/HeroSkill";
import { heroes } from "../data";
import Button from "react-bootstrap/Button";

const HeroProfilePage = ({ name, remainPoints, abilities }) => {
  const { heroId } = useParams();

  const [value, setValue] = useState([...abilities]);
  const [remainPoint, setRemainPoint] = useState(remainPoints);

  const handleAdd = (id, point) => {
    console.log({ id, point });

    if (remainPoint > 0) {
      setValue([
        ...value.slice(0, id),
        { ...value[id], value: point + 1 },
        ...value.slice(id + 1)
      ]);
      setRemainPoint(remainPoint - 1);
    }

    if (remainPoint <= 0) {
      alert("點數不足!");
    }
  };

  const handleMinus = (id, point) => {
    if (point > 0) {
      setValue([
        ...value.slice(0, id),
        { ...value[id], value: point - 1 },
        ...value.slice(id + 1)
      ]);
      setRemainPoint(remainPoint + 1);
    }
  };

  const handleSave = () => {
    if (remainPoint === 0) {
      alert("點數儲存成功");
    }
  };

  const [editable, setEditable] = useState(true);
  useEffect(() => {
    if (remainPoint > 0) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  }, [remainPoint]);

  return (
    <StyledHeroProfile>
      <StyledValueBox>
        <h1>{name}</h1>
        {value.map((values, index) => {
          return (
            <HeroSkill
              id={index}
              key={index}
              title={values.title}
              point={values.value}
              onAdd={handleAdd}
              onMinus={handleMinus}
            ></HeroSkill>
          );
        })}
      </StyledValueBox>

      <StyledScoreBox>
        <h3>剩餘點數:{remainPoint}</h3>
        <Button
          onClick={handleSave}
          disabled={!editable}
          type="submit"
          size="lg"
          variant="dark"
        >
          儲存
        </Button>
      </StyledScoreBox>
    </StyledHeroProfile>
  );
};

export default HeroProfilePage;

const StyledHeroProfile = styled.div`
  padding-top: 20px;
  max-width: 800px;
  margin: auto;
  display: flex;
`;

const StyledScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  font-size: 30px;
  margin-left: 80px;
`;

const StyledValueBox = styled.div``;

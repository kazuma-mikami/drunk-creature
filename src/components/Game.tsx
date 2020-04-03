import React, { useState, useEffect } from "react";
import Board from "./Board";
import { getRandomPosition } from "../domain/services";
import { Position } from "../domain/entity";
import { Form, Card } from "react-bootstrap";
import PitchBar from "./PitchBar";

export const SIZE = 5;

const Game: React.FC = () => {
  const [position, setPosition] = useState<Position>(getRandomPosition(SIZE));
  const [history, setHistory] = useState<Position[]>([position]);
  const [pitch, setPitch] = useState<number>(5000);

  const handleChangePitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(Number(e.target.value));
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      const _position = getRandomPosition(SIZE);
      setPosition(_position);
      setHistory([...history, position]);
    }, pitch);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <Board image="cockroach.jpg" position={position} />
      <Card style={{ margin: "50px" }}>
        <Card.Header>設定</Card.Header>
        <Card.Body>
          <Form>
            <PitchBar pitch={pitch} onChange={handleChangePitch} />
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Game;

import React, { useState, useEffect } from "react";
import Board from "./Board";
import { getRandomPosition, walkDrunkenly } from "../domain/services";
import { Position } from "../domain/entity";
import { Form, Card } from "react-bootstrap";
import PitchBar from "./PitchBar";
import { SizeContext } from "../contexts/SizeContext";
import SizeForm from "./SizeForm";

const Game: React.FC = () => {
  const [size, setSize] = useState<number>(5);
  const [position, setPosition] = useState<Position>(getRandomPosition(size));
  const [history, setHistory] = useState<Position[]>([position]);
  const [pitch, setPitch] = useState<number>(5000);

  const handleChangePitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(Number(e.target.value));
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      const _position = walkDrunkenly(position, size);
      setPosition(_position);
      setHistory([...history, position]);
    }, pitch);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <SizeContext.Provider value={{ size, setSize }}>
        <Card style={{ margin: "50px" }}>
          <Card.Header>設定</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <PitchBar pitch={pitch} onChange={handleChangePitch} />
                <SizeForm />
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <Board image="cockroach.jpg" position={position} />
      </SizeContext.Provider>
    </>
  );
};

export default Game;

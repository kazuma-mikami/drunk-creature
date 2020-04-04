import React, { useState, useEffect } from "react";
import Board from "./Board";
import { getRandomPosition, walkDrunkenly } from "../domain/services";
import { Position } from "../domain/entity";
import { Form, Card, Navbar } from "react-bootstrap";
import PitchBar from "./PitchBar";
import { SizeContext } from "../contexts/SizeContext";
import SizeForm from "./SizeForm";
import ImageSelect from "./ImageSelect";

const Game: React.FC = () => {
  const [size, setSize] = useState<number>(5);
  const [position, setPosition] = useState<Position>(getRandomPosition(size));
  const [history, setHistory] = useState<Position[]>([position]);
  const [pitch, setPitch] = useState<number>(1000);
  const [image, setImage] = useState<string>("cockroach.jpg");

  const handleChangePitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(Number(e.target.value));
  };

  const handleChangeImage = (value: string) => {
    setImage(value);
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/logo.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
      Drunk Creature
    </Navbar.Brand>
      </Navbar>
      <SizeContext.Provider value={{ size, setSize }}>
        <Card style={{ margin: "50px" }}>
          <Card.Header>設定</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <PitchBar pitch={pitch} onChange={handleChangePitch} />
                <SizeForm />
              </Form.Row>
              <Form.Row>
                <ImageSelect image={image} onChange={handleChangeImage} />
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <Board image={image} position={position} history={history} />
      </SizeContext.Provider>
    </>
  );
};

export default Game;

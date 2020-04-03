import { Form, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { SizeContext } from "../contexts/SizeContext";

const SizeForm: React.FC = () => {
  const { size, setSize } = useContext(SizeContext);

  return (
    <Form.Group as={Col} controlId="exampleForm.SelectCustomSizeSm">
      <Form.Label>盤面の大きさ</Form.Label>
      <Form.Control
        type="number"
        min="1"
        max="100"
        value={size}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSize(Number(e.target.value))
        }
      ></Form.Control>
    </Form.Group>
  );
};

export default SizeForm;

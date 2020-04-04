import React from "react";
import { Form, Col } from "react-bootstrap";

const MAX_VALUE = 5000;
const MIN_VALUE = 50;

type PitchBarProps = {
  pitch: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PitchBar: React.FC<PitchBarProps> = ({ pitch, onChange }) => {
  return (
    <Form.Group as={Col} controlId="formBasicRangeCustom">
      <Form.Label>移動速度</Form.Label>
      <Form.Control
        type="range"
        min={MIN_VALUE}
        max={MAX_VALUE}
        value={pitch}
        custom
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      ></Form.Control>
    </Form.Group>
  );
};

export default PitchBar;

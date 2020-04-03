import React from "react";
import { Form, Col } from "react-bootstrap";

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
        min="100"
        max="10000"
        value={pitch}
        custom
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      ></Form.Control>
    </Form.Group>
  );
};

export default PitchBar;

import React from "react";
import { Form, Row, Col } from "react-bootstrap";

type PitchBarProps = {
  pitch: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PitchBar: React.FC<PitchBarProps> = ({ pitch, onChange }) => {
  return (
    <Form.Group
      controlId="formBasicRangeCustom"
    >
      <Row>
        <Form.Label>移動速度</Form.Label>
        <Col>
          <Form.Control
            type="range"
            min="100"
            max="10000"
            value={pitch}
            custom
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          ></Form.Control>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default PitchBar;

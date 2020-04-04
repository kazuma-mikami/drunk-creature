import React from 'react';
import { Form, Col } from 'react-bootstrap';

type ImageSelectProps = {
    image: string;
    onChange: (value: string) => void;
};

const ImageSelect: React.FC<ImageSelectProps> = ({ image, onChange }) => {
    return (
        <Form.Group as={Col}>
            <Form.Label>酔っ払い生物</Form.Label>
            <Form.Row>
                <Form.Check
                    type="radio"
                    label="ゴキブリ"
                    onChange={() => onChange("cockroach.jpg")}
                    checked={image==="cockroach.jpg"}>
                </Form.Check>
                <Form.Check
                    type="radio"
                    label="ハムスター"
                    onChange={() => onChange("hamster.png")}
                    checked={image==="hamster.png"}>
                </Form.Check>
                <Form.Check
                    type="radio"
                    label="人間"
                    onChange={() => onChange("human.png")}
                    checked={image==="human.png"}>
                </Form.Check>
            </Form.Row>
        </Form.Group>
    );
};

export default ImageSelect;
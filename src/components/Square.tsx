import React from "react";
import {Button, Image} from "react-bootstrap";

const Square: React.FC = () => {
  return (
      <Image src={`${process.env.PUBLIC_URL}/cockroach.jpg`} 
      roundedCircle 
      height={200}
      width={200}
      />
  );
};

export default Square;

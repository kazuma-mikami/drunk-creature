import React from "react";
import { Image} from "react-bootstrap";

type SquareProps = {
  image?: string;
};

const Square: React.FC<SquareProps> = ({ image }) => {
  return (
    <>
      {image ? (
        <Image
          src={`${process.env.PUBLIC_URL}/${image}`}
          roundedCircle
          height={50}
          width={50}
        />
      ) : (
        <div className="empty-content"></div>
      )}
    </>
  );
};

export default Square;

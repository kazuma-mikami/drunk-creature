import React from "react";
import { Image} from "react-bootstrap";

type SquareProps = {
  image?: string;
  step: number;
};

const getStyle = (step:number):React.CSSProperties => {
  const alfa = (step > 10? 10 : step)/10
  return {backgroundColor: `rgba(0,0,0,${alfa})`}
};

const Square: React.FC<SquareProps> = ({ image,step }) => {

  const style = getStyle(step);

  return (
    <div>
      {image ? (
        <Image
          src={`${process.env.PUBLIC_URL}/${image}`}
          roundedCircle
          height={50}
          width={50}
        />
      ) : (
        <div className="empty-content" style={style}></div>
      )}
    </div>
  );
};

export default Square;

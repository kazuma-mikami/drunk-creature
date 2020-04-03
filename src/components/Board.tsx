import React from "react";
import Square from "./Square";
import { SIZE } from "../App";
import { Table } from "react-bootstrap";

const Board: React.FC = () => {
  return (
    <Table bordered variant="dark">
      <tbody>
        {Array(SIZE)
          .fill(0)
          .map((_, i) => {
            return (
              <tr>
                {Array(SIZE)
                  .fill(0)
                  .map((_, j) => (
                    <td>
                      <Square key={j} />
                    </td>
                  ))}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default Board;

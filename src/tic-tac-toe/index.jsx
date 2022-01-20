import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

function Clock() {
  const useStyles = makeStyles({
    inputBox: {
      width: 40,
      height: 40,
      margin: 5,
    },
  });
  const classes = useStyles();
  const [table, setTable] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (table[0][0] === table[0][1] && table[0][1] === table[0][2]) {
      setWinner(table[0][0]);
    } else if (table[1][0] === table[1][1] && table[1][1] === table[1][2]) {
      setWinner(table[0][0]);
    } else if (table[2][0] === table[2][1] && table[2][1] === table[2][2]) {
      setWinner(table[0][0]);
    } else if (table[0][0] === table[1][0] && table[1][0] === table[2][0]) {
      setWinner(table[0][0]);
    } else if (table[0][1] === table[1][1] && table[1][1] === table[2][1]) {
      setWinner(table[0][0]);
    } else if (table[0][2] === table[1][2] && table[1][2] === table[2][2]) {
      setWinner(table[0][0]);
    } else if (table[0][0] === table[1][1] && table[1][1] === table[2][2]) {
      setWinner(table[0][0]);
    } else if (table[0][2] === table[1][1] && table[1][1] === table[2][0]) {
      setWinner(table[0][0]);
    }
  }, [table]);

  var handleChange = (val, row, column) => {
    alert("here");
    console.log(val, row, column);
    var copy = [...table];
    copy[row][column] = val;
    setTable(copy);
  };
  return (
    <div>
      <div>
        Tic tac toe
        <table>
          {table.map((row, rowIndex) => {
            return (
              <tr>
                {row.map((cell, index) => {
                  return (
                    <td>
                      <input
                        className={classes.inputBox}
                        value={(event) => {
                          var copy = [...table];
                          copy[rowIndex][index] = event.target.value;
                          setTable(copy);
                        }}
                      ></input>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
        {winner && <div>Winner is {winner}</div>}
      </div>
    </div>
  );
}

export default Clock;

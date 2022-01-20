import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Counter from "./counter";
import Timer from "./timer";
import Clock from "./clock";
import TicTacToe from "./tic-tac-toe";

function App() {
  const useStyles = makeStyles({
    root: {
      width: 400,
      height: 300,
      display: "inline-block",
      margin: 10,
    },
  });
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent>
          <Counter />
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Timer />
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Clock />
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <TicTacToe />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;

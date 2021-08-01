import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import slotDetail from "./slot/component/slotDetail";
import slot_time from "./slot/component/slot_time";

function App() {

  const appTheme = createTheme({
    palette: {
      type :'dark',
      background: {
        default: "#000000"
    }}
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component={slot_time} />
      <Route path="/:id" exact component={slotDetail} />
    </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

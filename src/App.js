import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/index";
import Home from "./components/Home/index";
import Contact from "./components/Contact/index";
import Project from "./components/Project/index";
import NotFound from "./components/NotFound/index";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";

function App() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div className="container">
          <br />
          <Grid container spacing={2}>
            <Grid item md={6}>
              <h2 id="brand">Quancoder</h2>
            </Grid>

            <Grid item md={6}>
              <nav>
                <ul>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                  >
                    <Link to="/">Home</Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonIcon />}
                  >
                    <Link to="/about">About</Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    <i className="material-icons">assignment</i>
                    <Link to="/project">My Projects</Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EmailIcon />}
                  >
                    <Link to="/contact">Contact</Link>
                  </Button>
                </ul>
              </nav>
            </Grid>
          </Grid>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
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
import DvrIcon from "@material-ui/icons/Dvr";
import { useTransition, animated } from "react-spring";

const App = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  const { location } = useContext(__RouterContext);

  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0,transform:"translate(100%,0)"},
    enter: { opacity: 1,transform:"translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-100%,0)" }
  });
  return (   
      <div className="App">
        <div className="container">
          <br />
          <Grid container spacing={2}>
            <Grid item md={5}>
              <h2 id="brand">Quancoder</h2>
            </Grid>

            <Grid item md={7}>
              <nav>
                <ul>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<HomeIcon />}
                  >
                    <Link to="/" className="aButton">
                      Home
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonIcon />}
                  >
                    <Link to="/about" className="aButton">
                      About
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DvrIcon />}
                  >
                    <Link to="/project" className="aButton">
                      My Projects
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EmailIcon />}
                  >
                    <Link to="/contact" className="aButton">
                      Contact
                    </Link>
                  </Button>
                </ul>
              </nav>
            </Grid>
          </Grid>
        </div>
        {transition.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/project" component={Project} />
              <Route component={NotFound} />
            </Switch>
          </animated.div>
        ))}
      </div>
    
  );
}

export default App;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import Button from "@material-ui/core/Button";
import AbsoluteWrapper from "./../Wrapper/AbsoluteWrapper";
import "./styles.css";

function Home() {
  const useStyles = makeStyles({
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60
    },
    root: {
      margin: 100,
      padding: 20
    }
  });
  const classes = useStyles();

  function hideLight(){
    var x= document.getElementById('light');
    if(x.style.display === 'none'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    }
  }
  return (
    <AbsoluteWrapper>
      <div className={classes.homepageContainer}>
        <div id='light'>
          <div style={{textAlign:'center',marginBottom:10}}>
            <span id="homeTitle">Holiday is coming..</span>
            <button className="btn btn-warning" onClick={hideLight}>Click to hide the light</button>
          </div>

          <ul className="line">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} id="root">
              <Typography variant="h5" component="h3">
                <Avatar
                  alt="Quan Trinh"
                  src="https://i.imgur.com/IrkqhGZ.jpg?1"
                  className={classes.bigAvatar}
                />
                Fullstack Web Developer
              </Typography>
              <hr />
              <Typography
                component="p"
                style={{ height: "50%", marginTop: 50 }}
              >
                <Typist cursor={{ show: false }} avgTypingDelay={50}>
                  <h3>
                    Hi, My name is Quan Trinh. I'm a Fullstack Web Developer.
                    You are at my website where I share my portfolio projects
                    with the world. Please enjoy your time here!
                  </h3>
                  <i class="fas fa-arrow-circle-down"></i>
                </Typist>
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end"
                }}
                id="socialGroup"
              >
                <Button
                  href="https://www.linkedin.com/in/quanhtrinh/"
                  target="_blank"
                >
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: 50, color: "#4dabf7" }}
                  ></i>
                </Button>
                <Button href="https://github.com/xilatleo" target="_blank">
                  <i
                    className="fab fa-github"
                    style={{ fontSize: 50, color: "black" }}
                  ></i>
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    
    </AbsoluteWrapper>
  );
}

export default Home;

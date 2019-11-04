import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Typing from "react-typing-animation";
import Button from "@material-ui/core/Button";
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
      padding: 20,
      width: "50%",
      height: 500
    }
  });
  const classes = useStyles();

  
  


  return (
    <div className={classes.homepageContainer}>
      <Grid container justify="center" alignItems="center">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            <Avatar
              alt="Quan Trinh"
              src="https://i.imgur.com/IrkqhGZ.jpg?1"
              className={classes.bigAvatar}
            />
            Fullstack Web Developer
          </Typography>
          <hr />
          <Typography component="p" style={{height: '50%', marginTop: 50}}>
            <Typing speed={50}>
              <h1>Hi, My name is Quan Trinh. I'm a Fullstack Web Developer. You are at my website where I share my portfolio projects with the world. Please enjoy your time here!</h1>
              <Typing/>
              <i class="fas fa-arrow-circle-down"></i>
            </Typing>               
          </Typography>
          <div style={{display:'flex', justifyContent: 'center', alignItems: 'flex-end'}} id = 'socialGroup'>
                <Button href='https://www.linkedin.com/in/quanhtrinh/' target='_blank'>
              <i
                className="fab fa-linkedin"
                style={{ fontSize: 50, color: "#4dabf7" }}
              ></i>
            </Button>
            <Button href='https://github.com/xilatleo' target='_blank'>
              <i
                className="fab fa-github"
                style={{ fontSize: 50, color: "black" }}
              ></i>
            </Button>
                </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Home;

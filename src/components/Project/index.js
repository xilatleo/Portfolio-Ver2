import React, { Component } from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import AbsoluteWrapper from "./../Wrapper/AbsoluteWrapper";

class project extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AbsoluteWrapper>
        <div className={classes.projectContainer}>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <Card body outline color="secondary" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/TI2lRc0.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Simple Code Editor</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Simpler version of Code Editor
                </CardText>
                <div className="viewContainer">
                  <a
                    href="http://quancoder.com/codeEditor.html"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/Code-Editor"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card body outline color="danger" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/DU6F5Ht.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Date Count App</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Simple Date Counting App using Bootstrap and jQuery
                </CardText>
                <div className="viewContainer">
                  <a
                    href="http://quancoder.com/DateCount.html"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/Date-Count-App"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card body outline color="success" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/cdpm5gD.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Manga Store Front</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Manga Ecommerce merchandise store built with .NET MVC
                </CardText>
                <div className="viewContainer">
                  <a
                    href="http://sf.quancoder.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton disabled"
                  >
                    Private Code
                  </a>
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item md={4}>
              <Card body outline color="info" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/sBwKeva.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Paint App</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  This app allow user choose between 3 colors and draw on a
                  canvas
                </CardText>

                <div className="viewContainer">
                  <a
                    href="http://quancoder.com/painApp.html"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/paintApp"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card body outline color="warning" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/Z8Ptyir.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Quan's Jobboard</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Final project at Centriq - Utilized .NET MVC, Bootstrap,
                  SQL,etc to build full CRUD functionalities
                </CardText>

                <div className="viewContainer">
                  <a
                    href="http://fsdp.quancoder.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/JobBoard"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>

            <Grid item md={4}>
              <Card body outline color="danger" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/gDPxTpw.jpg"
                  alt="Card image cap"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Product Management</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Redux product management app with React,
                  React Router, Redux, Redux thunk, and MockApi
                </CardText>

                <div className="viewContainer">
                  <a
                    href="https://amazing-varahamihira-f1cf39.netlify.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/React-ProductManagement"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item md={4}>
              <Card body outline color="success" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/zLhlBrA.jpg"
                  alt="Manga API"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Manga API</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Simple REST API with Nodejs, Express, Ejs, MongoDb
                </CardText>

                <div className="viewContainer">
                  <a
                    href="http://dragonballs.herokuapp.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/DragonballsAPI"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card body outline color="info" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/Ni6z8P2.jpg"
                  alt="Newsletter Signup"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Newsletter Signup</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Newsletter Signup with Nodejs, express, Mailchimp, Heroku
                </CardText>

                <div className="viewContainer">
                  <a
                    href="http://warm-coast-01131.herokuapp.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/NewsletterSignUp"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton"
                  >
                    View Code
                  </a>
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card body outline color="warning" className={classes.border}>
                <CardImg
                  top
                  width="100"
                  height="200px"
                  src="https://i.imgur.com/Fioiz02.jpg"
                  alt="youtube clone"
                />
                <CardTitle className={classes.CardTitle}>
                  <h4>Youtube Clone</h4>
                </CardTitle>
                <CardText className={classes.CardTitle}>
                  Reactjs, Material UI
                </CardText>

                <div className="viewContainer">
                  <a
                    href="https://hopeful-euclid-579b5d.netlify.com/"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton "
                  >
                    View Project
                  </a>
                  <a
                    href="https://github.com/xilatleo/YoutubeClone"
                    target="_blank"
                    className="btn btn-danger btn-sm viewButton disabled"
                  >
                    Private Code
                  </a>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </AbsoluteWrapper>
    );
  }
}

export default withStyles(useStyles)(project);

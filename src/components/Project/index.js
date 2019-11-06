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
              <a href="http://quancoder.com/codeEditor.html" target="_blank">
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
                </Card>
              </a>
            </Grid>

            <Grid item md={4}>
              <a href="http://quancoder.com/DateCount.html" target="_blank">
                <Card body outline color="primary" className={classes.border}>
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
                </Card>
              </a>
            </Grid>

            <Grid item  md={4}>
              <a href="http://sf.quancoder.com/" target="_blank">
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
                </Card>
              </a>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid item md={4}>
              <a href="http://quancoder.com/painApp.html" target="_blank">
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
                </Card>
              </a>
            </Grid>

            <Grid item md={4}>
              <a href="http://fsdp.quancoder.com/" target="_blank">
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
                </Card>
              </a>
            </Grid>

            <Grid item md={4}>
              <a
                href="https://amazing-varahamihira-f1cf39.netlify.com/"
                target="_blank"
              >
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
                    Simple CRUD React - Redux product management app with React,
                    React Router, Redux, Redux thunk, and MockApi
                  </CardText>
                </Card>
              </a>
            </Grid>
          </Grid>
        </div>
      </AbsoluteWrapper>
    );
  }
}

export default withStyles(useStyles)(project);

import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import Avatar from "@material-ui/core/Avatar";
import useStyles from './styles'
import { withStyles } from "@material-ui/styles";

class Contact extends Component {  
  render(){
    const {classes} = this.props
    return (
      <div className={classes.contactContainer}>
        <Grid container spacing={5}>
          <Grid item md={4}>
            <Paper className={classes.root}>
              <Grid container spacing={2} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid item md-4>
                  {" "}
                  <Avatar
                    alt="Quan Trinh"
                    src="https://i.imgur.com/IrkqhGZ.jpg?1"
                    className={classes.bigAvatar}
                  />
                </Grid>
                <Grid item md-4>
                  {" "}
                  <Typography variant="h3" component="h3">
                    Contact Me
                  </Typography>
                </Grid>
              </Grid>
              <hr/>
              <Typography
                variant="h5"
                component="p"
                style={{ marginTop: 10, marginBottom: 20 }}
              >
                Feel free to use the form or get in touch with me directly at
              </Typography>
              <MailOutlineIcon
                style={{ color: "rgb(77, 171, 247)", fontSize: 50 }}
              />
              <p style={{ fontSize: 25 }}>quan.h.trinh@outlook.com</p>
              <p>or</p>
              <PhoneIcon style={{ color: "#f50057", fontSize: 50 }} />{" "}
              <p style={{ fontSize: 25 }}>(562) 331 4150</p>
            </Paper>
          </Grid>
          <Grid item md={8}>
            <Form className="contactForm">
              <FormGroup>
                <Label for="FormName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="FormName"
                  placeholder="Please enter your name"
                  // onChange = {this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="FormEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="FormEmail"
                  placeholder="Please enter your email"
                  // onChange = {this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Your Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Please enter your message"
                  style={{ height: 248, resize: "none" }}
                  //   onChange = {this.handleChange}
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Grid>
        </Grid>
      </div>
    ) 
    
    };

}

export default withStyles(useStyles)(Contact);

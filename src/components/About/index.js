import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Timeline, Event } from "react-timeline-scribble";
import AbsoluteWrapper from "./../Wrapper/AbsoluteWrapper";
import './styles.css'
function About() {
  const useStyles = makeStyles({
    card: {
      maxWidth: 500,
      height: 710
    },
    CardActions: {
      display: "flex",
      justifyContent: "center"
    },
    root: {
      height: "100%",
      minWidth: 550,
      padding: 20,
      overflowY: "scroll"
    },
    cardItem: {
      height: 220
    },
    skillContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
    },
    resume: {
      height: 730
    },
    itag: {
      textAlign: "center",
      marginTop: 5
    },
    CardActionAreaResume: {
      height: "100%"
    }
  });
  const classes = useStyles();
  return (
    <AbsoluteWrapper>
      <Grid container spacing={2} style={{ marginTop: 50 }}>
        <Grid item md={5} xs={12}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Personal photo"
                height="500"
                width="500"
                image="https://i.imgur.com/IrkqhGZ.jpg?1"
                title="Personal photo"
              />
              <CardContent style={{textAlign:'center'}}>
                <Typography gutterBottom variant="h4" component="h2">
                  Quan Trinh
                </Typography>
                
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.CardActions}>
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
            </CardActions>
          </Card>
        </Grid>

        <Grid item md={6}  xs={12} className={classes.resume}>
          <Paper className={classes.root}  id='resume'>
            <Typography
              variant="h3"
              component="h3"
              style={{ textAlign: "center", marginBottom: 30 }}
            >
              Resume
              <Button
                variant="contained"
                style={{ left: 100 }}
                href="http://quancoder.com/Resume.pdf"
                id = 'pdfVersion'
              >
                PDF version
              </Button>
            </Typography>

            <Typography component="p">
              <div>
                <h2>SUMMARY OF QUALIFICATIONS </h2>
                <ul>
                  <li>
                    Solid foundational knowledge of designing and developing
                    full-stack web applications using .NET framework.
                  </li>
                  <li>
                    Multi-tasking and time management to keep the highly
                    efficiency workflow.
                  </li>
                  <li>
                    {" "}
                    Good listening skill and problem solving skill that have
                    been builded throughout retail working experience
                  </li>
                </ul>
              </div>
              <div>
                <h2>TECHNICAL SKILLS </h2>
                <Grid container spacing={5} className={classes.skillContainer}>
                  <Grid item md={3} xs={12}>
                    <Card className={classes.cardItem}>
                      <CardActionArea className={classes.CardActionAreaResume}>
                        <div className={classes.itag}>
                          <i
                            class="fas fa-code fa-2x"
                            style={{ color: "#4dabf7" }}
                          ></i>
                        </div>

                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ textAlign: "center" }}
                          >
                            Front End
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            HTML5, JavaScript, jQuery, jQueryUI, CSS3,
                            Bootstrap, ReactJS, Redux 
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid item md={3}  xs={12}>
                    <Card className={classes.cardItem}>
                      <CardActionArea className={classes.CardActionAreaResume}>
                        <div className={classes.itag}>
                          <i
                            class="fas fa-code fa-2x"
                            style={{ color: "#4dabf7" }}
                          ></i>
                        </div>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ textAlign: "center" }}
                          >
                            Middle Tier
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Visual Studio, C#.NET, ASP.NET, LINQ, MVC, EF
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid item md={3}  xs={12}>
                    <Card className={classes.cardItem}>
                      <CardActionArea className={classes.CardActionAreaResume}>
                        <div className={classes.itag}>
                          <i
                            class="fas fa-code fa-2x"
                            style={{ color: "#4dabf7" }}
                          ></i>
                        </div>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ textAlign: "center" }}
                          >
                            Back End
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            ADO.NET, SQL, SQL Server, MongoDB, Nodejs, Express
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Fragment>
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                    <Timeline>
                      <Event
                        interval={"11/2018 – 06/2019"}
                        title={"UbreakIFix, Lenexa, Kansas"}
                        subtitle={"Technician"}
                      >
                        <ul>
                          <li>Check in and process customer devices</li>
                          <li>
                            Fix all the laptops, desktops, phones, Consoles
                          </li>
                          <li>Inventory counting and part ordering</li>
                        </ul>
                      </Event>
                      <Event
                        interval={"11/2017 – 03/2018"}
                        title={"Sobahn Restaurant,  Overland Park, Kansas"}
                        subtitle={"Chef, Server"}
                      >
                        <ul>
                          <li>Greet customer, seat them at table</li>
                          <li>
                            Take order and process order from customer to
                            kitchen
                          </li>
                          <li>Handling cash and card payment</li>
                          <li>Ensure customer has good experience.</li>
                          <li>Prepare food and inventory counting</li>
                        </ul>
                      </Event>
                      <Event
                        interval={"10/2012 – 02/2013"}
                        title={"Flowerbox, HoChiMinh City, Vietnam"}
                        subtitle={"Marketing Assistant"}
                      >
                        <ul>
                          <li>
                            Create all marketing plans, POSM plans, cooperation
                            plan for company’s products
                          </li>
                          <li>
                            Propose ideas for Marketing campaigns, designs
                            (Brochua, Wobbler, Voucher, etc)
                          </li>
                          <li>
                            In charge of POSM printing Support Social Marketing
                            Manager in SEO works, and write content for social
                            media like Facebook fan page, or Website. Building
                            backlinks, enhancing both On-site and Off-site
                          </li>
                          <li>
                            Build relationship with cosmetic brands, fashion
                            brands, media, shopping malls, supermarkets for the
                            cooperation.
                          </li>
                          <li>Set up flower booths for buildings, events.</li>
                        </ul>
                      </Event>
                      <Event
                        interval={"2007 – 2009"}
                        title={"Trika Chemical Trading Company, Vietnam"}
                        subtitle={"Sales Assistant"}
                      >
                        <ul>
                          <li>
                            Translating official documents (English –
                            Vietnamese, Vietnamese – English)
                          </li>
                          <li>Taking orders from customer</li>
                          <li>
                            Searching for potential customers and developing
                            market share for company’s product
                          </li>
                          <li>
                            IT-helpdesk, install software, replace components
                            for PC, troubleshooting PC, printer and network.
                          </li>
                        </ul>
                      </Event>
                    </Timeline>
                  </Fragment>
                </Grid>
              </div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </AbsoluteWrapper>
  );
}

export default About;

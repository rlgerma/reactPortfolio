import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const PortfolioText = () => (
  // card #1
  <div className="contain">
    <div className="rw">
      <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll={true}
          clickable
          currentFigureScale={1.3}
          enableHeading={false}
          media={{
            '@media (max-width: 500px)': {
              width: '400px',
              height: '600px',
              fontSize: '6px',
              padding: '1em',
              margin: '0 auto',
            },
            '@media (max-width: 900px)': {
              width: '600px',
              height: '300px',
            },
            '@media (min-width: 900px)': {
              width: '100%',
              height: '600px',
            },
          }}
        >
          <div className="wcard" data-action="1">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961986/02-dl-port_jykq0f.jpg"
                alt="deedlist"
              />
              <CardBody>
                <CardTitle className="title">Deedlist</CardTitle>
                <CardSubtitle className="subTitle">
                  Express.Js/MySQL/Materialize/Handlebars/Sequelize
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A Craigslist like web app I contributed to that
                  stores/searches 'needs' or 'deeds' for people that need help
                </CardText>
                <a href="https://deedlist.herokuapp.com">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="wcard" data-action="2">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961986/01-bt-port_kbbfoe.jpg"
                alt="budget tracker"
              />
              <CardBody>
                <CardTitle className="title">Budget Tracker</CardTitle>
                <CardSubtitle className="subTitle">
                  GatsbyJs/React/MongoDB/Auth0
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A PWA that takes in user data and stashes it locally till a
                  connection to a secure database is made. For use in a
                  financial setting.
                </CardText>
                <a href="https://github.com/rlgerma92/budgetTracker">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="wcard" data-action="3">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961986/03-wt-port_wvdi4f.jpg"
                alt="workout tracker"
              />
              <CardBody>
                <CardTitle className="title">Workout Tracker</CardTitle>
                <CardSubtitle className="subTitle">
                  Express.Js/MongoDB/Graph.Js/Bootstrap
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A web app for people that want to track their workouts and
                  progress over time! Graphs display real time data.
                </CardText>
                <a href="https://trackthatworkout.herokuapp.com/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="wcard" data-action="4">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961986/04-n-port_ydte3o.jpg"
                alt="note taker"
              />
              <CardBody>
                <CardTitle className="title">Note Taker</CardTitle>
                <CardSubtitle className="subTitle">
                  Express.Js/Bootstrap
                </CardSubtitle>
                <CardText className="bodyCopy">
                  An online note taking tool that creates, saves, and deletes
                  your personalized notes. No sign up required!
                </CardText>
                <a href="https://agile-taiga-39753.herokuapp.com/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="wcard" data-action="5">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961986/05-rec-port_gzjqce.jpg"
                alt="reverse engineer code"
              />
              <CardBody>
                <CardTitle className="title">Reverse Engineer Code</CardTitle>
                <CardSubtitle className="subTitle">A blog post</CardSubtitle>
                <CardText className="bodyCopy">
                  An article I wrote about deconstructing the various files in
                  modern MVC frameworks
                </CardText>
                <a href="https://spark.adobe.com/page/Pkquz58VaeU0F/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div className="wcard" data-action="6">
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/t_portfolioCard/v1585961987/06-f-port_v81l1s.jpg
              "
                alt="Foodle"
              />
              <CardBody>
                <CardTitle className="title">Foodle</CardTitle>
                <CardSubtitle className="subTitle">
                  A meal recipe search engine
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A meal recipe search engine I co-engineered with some former
                  classmates at University of Denver. Now deprecated :/
                </CardText>
                <a href="https://spark.adobe.com/page/Pkquz58VaeU0F/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </Coverflow>
      </StyleRoot>
    </div>
  </div>
);

export default PortfolioText;

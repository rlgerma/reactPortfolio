import React from 'react';
import Collapsible from 'react-collapsible';
import Coverflow from 'react-coverflow';
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

const fn = () => {
  console.log('img');
};

const PortfolioText = () => (
  // card #1
  <>
    <div className="contain">
      <div className="rw">
        <Coverflow
          height="600"
          displayQuantityOfSide={4}
          navigation={true}
          enableScroll={false}
          enableHeading={false}
          currentFigureScale={1}
          otherFigureScale={0.2}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            >
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1586323615/jfnmusic_iga0wb.jpg"
                alt="joyful noise music"
                data-action="https://joyfulnoisemusic.netlify.com/"
              />
              <CardBody>
                <CardTitle className="title">Joyful Noise Music</CardTitle>
                <CardSubtitle className="subTitle">
                  Gatsby/React/Netlify/Bootstrap
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A business website made for a music school & store in
                  Brighton, CO.
                </CardText>
                <a href="https://joyfulnoisemusic.netlify.com/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1585961986/02-dl-port_jykq0f.jpg"
                alt="deedlist"
                data-action="https://deedlist.herokuapp.com"
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
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,f_auto,h_200,w_400/v1585961986/01-bt-port_kbbfoe.jpg"
                alt="budget tracker"
                data-action="https://github.com/rlgerma92/budgetTracker"
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
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1585961986/03-wt-port_wvdi4f.jpg"
                alt="workout tracker"
                data-action="https://trackthatworkout.herokuapp.com/"
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
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1586323938/cbd-landing_ktiacf.jpg"
                alt="joyful noise music"
                data-action="https://silly-dubinsky-dbe3af.netlify.com/"
              />
              <CardBody>
                <CardTitle className="title">
                  CBDistillery Landing Page
                </CardTitle>
                <CardSubtitle className="subTitle">
                  Gatsby/React/Netlify/Bootstrap
                </CardSubtitle>
                <CardText className="bodyCopy">
                  A landing page I made for CBDistillery.
                </CardText>
                <a href="https://silly-dubinsky-dbe3af.netlify.com/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1585961986/04-n-port_ydte3o.jpg"
                alt="note taker"
                data-action="https://agile-taiga-39753.herokuapp.com/"
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
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1585961986/05-rec-port_gzjqce.jpg"
                alt="reverse engineer code"
                data-action="https://spark.adobe.com/page/Pkquz58VaeU0F/"
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
          <div>
            <Card>
              <CardImg
                src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_400/v1585961987/06-f-port_v81l1s.jpg"
                alt="Foodle"
                data-action="https://rlgerma92.github.io/Project-One/"
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
                <a href="https://rlgerma92.github.io/Project-One/">
                  <Button>View</Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </Coverflow>
      </div>
    </div>
    <div>
      <Collapsible
        trigger="View"
        triggerTagName="button"
        triggerWhenOpen="Close"
      >
        <Card className="mobileContain">
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
              A Craigslist like web app I contributed to that stores/searches
              'needs' or 'deeds' for people that need help
            </CardText>
            <a href="https://deedlist.herokuapp.com">
              <Button>View</Button>
            </a>
          </CardBody>
        </Card>
        <Card className="mobileContain">
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
              connection to a secure database is made. For use in a financial
              setting.
            </CardText>
            <a href="https://github.com/rlgerma92/budgetTracker">
              <Button>View</Button>
            </a>
          </CardBody>
        </Card>

        <Card className="mobileContain">
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

        <Card className="mobileContain">
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
              An online note taking tool that creates, saves, and deletes your
              personalized notes. No sign up required!
            </CardText>
            <a href="https://agile-taiga-39753.herokuapp.com/">
              <Button>View</Button>
            </a>
          </CardBody>
        </Card>

        <Card className="mobileContain">
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

        <Card className="mobileContain">
          <CardImg
            src="https://res.cloudinary.com/rgermaine-com/image/upload/c_scale,e_auto_color,h_200,w_300/v1585961987/06-f-port_v81l1s.jpg
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
      </Collapsible>
    </div>
  </>
);

export default PortfolioText;

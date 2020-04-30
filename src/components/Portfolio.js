import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Portfolio(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Card key={item.id}>
          <CardImg src={item.image} alt={item.title} />
          <CardBody>
            <CardTitle className="title">{item.title}</CardTitle>
            <CardSubtitle className="subTitle">{item.tech}</CardSubtitle>
            <CardText className="bodyCopy">{item.about}</CardText>
            <a href={item.url}>
              <Button>View</Button>
            </a>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default Portfolio;

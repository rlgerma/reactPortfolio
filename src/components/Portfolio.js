import React from 'react';
import {
  Card,
  CardFooter,
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
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle>{item.tech}</CardSubtitle>
            <CardText>{item.about}</CardText>
          </CardBody>
          <a href={item.url}>
            <CardFooter>
              <Button>View</Button>
            </CardFooter>
          </a>
        </Card>
      ))}
    </>
  );
}

export default Portfolio;

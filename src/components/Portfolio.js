import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { Card, Button, Row, Col } from 'antd';
import Link from './Link';

const FlipCard = sporp => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set(state => !state)} className="card-deck">
      <a.div
        className="card-before"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {sporp.front}
      </a.div>
      <a.div
        className="card-after"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        {sporp.back}
      </a.div>
    </div>
  );
};

const Portfolio = props => {
  const { edges } = props;
  const { Meta } = Card;
  return (
    <Row justify="center">
      {edges.map(({ node: item }) => (
        <Col xs={24} sm={20} md={12} lg={8} xl={8} key={item.id}>
          <div className="card-case" style={{ margin: '25% 0' }}>
            <FlipCard
              back={
                <Card
                  style={{
                    backgroundColor: '#434343',
                    minHeight: '250px',
                  }}
                  cover={
                    <Card
                      title={item.title}
                      extra={<Link to={item.url}>View</Link>}
                      style={{
                        maxHeight: '400px',
                        backgroundColor: '#434343',
                        color: '#ffffff',
                      }}
                    >
                      <Meta
                        style={{
                          color: '#ffffff',
                        }}
                        title={item.tech}
                        description={item.about}
                      />
                    </Card>
                  }
                />
              }
              front={<Card cover={<img src={item.image} alt={item.title} />} />}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;

import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { Card, Row, Col } from "antd";
import Link from "./Link";
import { FluidValue } from "@react-spring/shared";

interface FlipCardProps {
  front:
    | string
    | React.ReactElement<React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | FluidValue<React.ReactText | null>;
  back:
    | string
    | React.ReactElement<React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | FluidValue<React.ReactText | null>;
}

const FlipCard = (sporp: FlipCardProps) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)} className='card-deck'>
      <a.div className='card-before' style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        {sporp.front}
      </a.div>
      <a.div
        className='card-after'
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
        }}
      >
        {sporp.back}
      </a.div>
    </div>
  );
};

export interface PortfolioProps {
  edges: {
    node: {
      id: string;
      title: string;
      url: string;
      tech: string;
      about: string;
      image: string;
    };
  }[];
}

const Portfolio = (props: PortfolioProps): JSX.Element => {
  const { edges } = props;
  const { Meta } = Card;
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {edges.map(({ node: item }) => (
        <Col
          span={8}
          xl={8}
          lg={8}
          md={24}
          sm={24}
          xs={24}
          key={item.id}
          style={{ margin: "2.5% auto 2.5%" }}
        >
          <div className={`card-case`} style={{ margin: "25% 0" }}>
            <FlipCard
              back={
                <Card
                  bordered={false}
                  style={{
                    backgroundColor: "#434343",
                    minHeight: "250px",
                  }}
                  cover={
                    <Card
                      title={item.title}
                      extra={<Link to={item.url}>View</Link>}
                      style={{
                        maxHeight: "400px",
                        backgroundColor: "#434343",
                        color: "#ffffff",
                      }}
                    >
                      <Meta
                        style={{
                          color: "#ffffff",
                        }}
                        title={item.tech}
                        description={item.about}
                      />
                    </Card>
                  }
                />
              }
              front={
                <Card
                  bordered={false}
                  style={{
                    minHeight: "250px",
                    maxHeight: "400px",
                  }}
                  cover={<img src={item.image} alt={item.title} />}
                  className='beforeCard'
                >
                  <h5 style={{ color: "#f0f0f0" }}>{item.title}</h5>
                </Card>
              }
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Portfolio;

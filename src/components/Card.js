import React from 'react';

const Card = props => ({
  render() {
    const { image } = this.props.data;
    const { title } = this.props.data;
    const { subtitle } = this.props.data;
    return (
      <figure className="snip1584">
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href="#" />
      </figure>
    );
  },
});
export default Card;

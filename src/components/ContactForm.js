import React from 'react';
import styled from 'styled-components';
import Pattern from '../images/move.gif';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Form = styled.form``;

const Name = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Email = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Message = styled.textarea`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Submit = styled.input`
  border: solid 0.1px #292929;
  padding: 15px 30px;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 0;
  background-color: #fff;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    background-image: url(${Pattern});
    text-decoration: none;
    transform: scale(1.3);
  }
`;

const ModalButton = styled.button`
  border: solid 1px #ccc;
  padding: 15px 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 0;
  background-color: #fff;
  margin: 0 auto;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  &:hover {
    border: solid 1px ghostwhite;
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    background-image: url(${Pattern});
    text-decoration: none;
    transform: scale(1.3);
  }
`;

const Modal = styled.div`
  background: ghostwhite;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 2000;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  p {
    line-height: 1.6;
    font-family: raleway, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.5em;
    color: #001100;
    margin: 1em auto;
  }
`;

const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
      submitting: false,
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    this.setState({
      submitting: true,
    });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
      submitting: false,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { name, email, message, showModal, submitting } = this.state;
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          Don’t fill this out: <input name="bot" onChange={this.handleChange} />
        </p>
        <ScrollAnimation
          duration={2}
          animateIn="bounceInLeft"
          animateOut="bounceOutRight"
          initiallyVisible={false}
        >
          <Name
            name="name"
            type="text"
            title="Name"
            placeholder="Full Name"
            value={name}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <ScrollAnimation
          duration={3}
          animateIn="bounceInRight"
          animateOut="bounceOutLeft"
          initiallyVisible={false}
        >
          <Email
            name="email"
            type="email"
            title="Email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <ScrollAnimation
          duration={3}
          animateIn="bounceInUp"
          animateOut="bounceOutDown"
          initiallyVisible={false}
        >
          <Message
            name="message"
            title="Message"
            type="text"
            placeholder="Message"
            value={message}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <Submit
          name="submit"
          type="submit"
          value={submitting ? 'Sending...' : 'Send'}
          disabled={submitting}
        />
        <ModalOverlay onClick={this.closeModal} visible={showModal} />

        <Modal visible={showModal}>
          <p>Thanks for reaching out!</p>
          <p>I'll get back to you shortly.</p>
          <p>-Richard </p>
          <ModalButton onClick={this.closeModal}>Okay</ModalButton>
        </Modal>
      </Form>
    );
  }
}

export default ContactForm;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Form = styled.form``;

const Name = styled.input`
  border: 0;
  padding: 10px;
  color: #fff;
  background-color: #434343;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Email = styled.input`
  border: 0;
  padding: 10px;
  color: #fff;
  background-color: #434343;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Message = styled.textarea`
  border: 0;
  padding: 10px;
  color: #fff;
  background-color: #434343;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

const Calendly = styled.input`
  border: solid 0.1px transparent;
  padding: 15px;
  margin: 0 0 20px;
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  font-family: "Raleway";
  font-weight: 300;
  cursor: pointer;
  border-radius: 0;
  color: #fff;
  background-color: transparent;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  &:hover {
    cursor: pointer;
    color: #006bff;
    background-color: transparent;
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const Submit = styled.input`
  display: flex;
  justify-content: center;
  border: solid 0.1px #292929;
  padding: 15px 30px;
  margin: 0 auto 20px;
  text-transform: uppercase;
  font-family: "Raleway";
  font-weight: 300;
  cursor: pointer;
  border-radius: 0;
  color: #fff;
  background-color: #434343;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  &:hover {
    cursor: pointer;
    color: #02808c;
    background-color: #fff;
    text-decoration: none;
    transform: scale(1.1);
  }
`;

const ModalButton = styled.button`
  border: solid 1px #ccc;
  padding: 15px 30px;
  text-transform: uppercase;
  font-family: "Raleway";
  font-weight: 300;
  cursor: pointer;
  border-radius: 0;
  color: #fff;
  background-color: #434343;
  margin: 0 auto;
  transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  &:hover {
    cursor: pointer;
    color: #02808c;
    background-color: #fff;
    text-decoration: none;
    transform: scale(1.1);
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
  opacity: ${(props: { visible: any }) => (props.visible ? "1" : "0")};
  visibility: ${(props: { visible: any }) => (props.visible ? "visible" : "hidden")};
  p {
    line-height: 1.6;
    font-family: "Raleway";
    font-weight: 300;
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
  opacity: ${(props: { visible: any }) => (props.visible ? "1" : "0")};
  visibility: ${(props: { visible: any }) => (props.visible ? "visible" : "hidden")};
`;

const encode = (data: { [x: string]: string | number | boolean; "form-name"?: any }) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

class ContactForm extends React.Component<
  Record<string, unknown>,
  {
    name: string;
    email: string;
    message: string;
    showModal: boolean;
    submitting: boolean;
    [key: string]: any;
  }
> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showModal: false,
      submitting: false,
    };
  }

  handleChange = (error: { target: { name: any; value: any } }): void =>
    this.setState({ [error.target.name]: error.target.value });

  handleSubmit = (error: { preventDefault: () => void }): void => {
    this.setState({
      submitting: true,
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(this.handleSuccess)
      .catch((error) => alert(error));
    error.preventDefault();
  };

  handleSuccess = (): void =>
    this.setState({
      name: "",
      email: "",
      message: "",
      showModal: true,
      submitting: false,
    });

  closeModal = (): void => this.setState({ showModal: false });

  render(): JSX.Element {
    const { name, email, message, showModal, submitting } = this.state;
    return (
      <Form
        name='contact'
        onSubmit={this.handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='bot'
        onClick={this.closeModal}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p hidden>
          Don’t fill this out: <input name='bot' onChange={this.handleChange} />
        </p>
        <ScrollAnimation duration={2} animateIn='bounceInLeft' animateOnce initiallyVisible={false}>
          <Name
            name='name'
            type='text'
            title='Name'
            placeholder='Full Name'
            value={name}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <ScrollAnimation
          duration={3}
          animateIn='bounceInRight'
          animateOnce
          initiallyVisible={false}
        >
          <Email
            name='email'
            type='email'
            title='Email'
            placeholder='Email'
            value={email}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <ScrollAnimation duration={3} animateIn='bounceInUp' animateOnce initiallyVisible={false}>
          <Message
            name='message'
            title='Message'
            placeholder='Message'
            value={message}
            onChange={this.handleChange}
            required
            disabled={submitting}
          />
        </ScrollAnimation>
        <ScrollAnimation duration={3} animateIn='bounceInUp' animateOnce initiallyVisible={false}>
          <Submit
            name='submit'
            type='submit'
            value={submitting ? "Sending..." : "Send"}
            disabled={submitting}
          />{" "}
        </ScrollAnimation>
        <ModalOverlay onClick={this.closeModal} visible={showModal} />

        <Modal visible={showModal}>
          <p>Thanks for reaching out</p>
          <p>I will get back to you shortly.</p>
          <p>- Richard </p>
          <ModalButton onClick={this.closeModal}>Tight</ModalButton>
        </Modal>
      </Form>
    );
  }
}

export default ContactForm;

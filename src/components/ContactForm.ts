
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

const Submit = styled.input`
  border: solid 0.1px #292929;
  padding: 15px 30px;
  margin: 0 0 20px;
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
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
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
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      showModal: false,
      submitting: false,
    };
  }

  handleChange = (error) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (error) => {
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

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
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
        name='contact'
  }
}

export default ContactForm;

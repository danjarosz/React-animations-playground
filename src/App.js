import React, { Component } from "react";
import { Transition } from 'react-transition-group';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div className="App">
        <h1>React Animations</h1>
        <Transition 
          in={modalIsOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {
            state => (<Modal show={state} closed={this.closeModal}/>)
          }
        </Transition>
        <Backdrop show={modalIsOpen}/>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

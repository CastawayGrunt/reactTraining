import React, { Component } from "react";
import Modal from "./Modal";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main className="rounded-md">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1 className="text-lg font-bold text-white bg-purple-700 p-4 rounded-t-md">
            Invalid Input
          </h1>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

export default Dashboard;

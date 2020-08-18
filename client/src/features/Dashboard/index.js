import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import moment from 'moment';

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      newBookingData: {},
      data: [],
    };
  }

  _handleOpenModal = () => {
    this.setState({
      isShowModal: true,
    });
  };

  _handleCloseModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  _handleChange = (e) => {
    let { name, value } = e.target;
    this.setState((preState) => ({
      ...preState,
      newBookingData: {
        ...preState.newBookingData,
        [name]: value,
      },
    }));
  };

  _handleOnSubmit = () => {
    const { newBookingData } = this.state;
    console.log(Object.keys(newBookingData).length);
    if (Object.keys(newBookingData).length !== 0) {
      this.setState((preState) => ({
        ...preState,
        data: [
          ...preState.data,
          {
            ...newBookingData,
            status: 'Pending Review',
          },
        ],
        isShowModal: false,
      }));
    }
  };

  _handleCancelBooking = (positions) => {
    this.setState((preState) => ({
      ...preState,
      data: [...preState.data].filter((item, index) => index !== positions),
    }));
  };

  render() {
    const { isShowModal, data, newBookingData } = this.state;
    console.log(Object.keys(newBookingData).length);
    return (
      <div>
        <DashBoardComponent
          data={data}
          isShowModal={isShowModal}
          isDisableCreateButton={Object.keys(newBookingData).length === 0}
          handleOnSubmit={this._handleOnSubmit}
          handleOpenModal={this._handleOpenModal}
          handleCloseModal={this._handleCloseModal}
          handleChange={this._handleChange}
          handleCancelBooking={this._handleCancelBooking}
        />
      </div>
    );
  }
}

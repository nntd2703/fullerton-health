import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import moment from 'moment';
import { PERMISSION, DEFAULT_DATA, STATUS } from '../../constant';

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    const { permission } = this.props;

    this.state = {
      isShowModal: false,
      newBookingData: {},
      data: permission === PERMISSION.admin ? DEFAULT_DATA : [],
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

  _handleApproveBooking = (positions) => {
    this.setState((preState) => {
      const cloneData = [...preState.data];
      cloneData[positions] = {
        ...cloneData[positions],
        status: STATUS.approved,
      };
      return {
        ...preState,
        data: [...cloneData],
      };
    });
  };

  _handleRejectBooking = (positions) => {
    this.setState((preState) => {
      const cloneData = [...preState.data];
      cloneData[positions] = {
        ...cloneData[positions],
        status: STATUS.reject,
      };
      return {
        ...preState,
        data: [...cloneData],
      };
    });
  };

  render() {
    const { permission } = this.props;
    const { isShowModal, data, newBookingData } = this.state;
    return (
      <div>
        <DashBoardComponent
          permission={permission}
          data={data}
          isShowModal={isShowModal}
          isDisableCreateButton={Object.keys(newBookingData).length === 0}
          handleOnSubmit={this._handleOnSubmit}
          handleOpenModal={this._handleOpenModal}
          handleCloseModal={this._handleCloseModal}
          handleChange={this._handleChange}
          handleCancelBooking={this._handleCancelBooking}
          handleApproveBooking={this._handleApproveBooking}
          handleRejectBooking={this._handleRejectBooking}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import { PERMISSION, DEFAULT_DATA, STATUS } from '../../constant';
import {ModalHandleStatus} from "./form/ModalHandleStatus";


export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    const { permission } = this.props.location.state;

    this.state = {
      isShowModal: false,
      newBookingData: {},
      data: DEFAULT_DATA,
      modalHandleStatus: null,
    };

    this.permission = permission;
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

    console.log(name, value);
    this.setState(
      (preState) => ({
        ...preState,
        newBookingData: {
          ...preState.newBookingData,
          [name]: value,
        },
      }),
      () => {
        console.log(name, value);
      }
    );
  };

  _handleOnSubmit = () => {
    const { newBookingData } = this.state;
    if (Object.keys(newBookingData).length > 0) {
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

  _handleApproveBooking = (item, positions) => {
    this.setState({
      modalHandleStatus: (
        <ModalHandleStatus
          type={STATUS.approved}
          onModalClose={() => {
            this.setState({ modalHandleStatus: null });
          }}
          item={item}
          handleApprove={(dateTime) => {
            this._updateStatusBooking(positions, STATUS.approved, {
              name: 'dateTime',
              value: dateTime,
            });
            this.setState({ modalHandleStatus: null });
          }}
          handleReject={(reason) => {
            this._updateStatusBooking(positions, STATUS.approved, {
              name: 'reason',
              value: reason,
            });
            this.setState({ modalHandleStatus: null });
          }}
        />
      ),
    });
  };

  _handleRejectBooking = (positions) => {
    this.setState({
      modalHandleStatus: (
        <ModalHandleStatus
          type={STATUS.reject}
          onModalClose={() => {
            this.setState({ modalHandleStatus: null });
          }}
          handleReject={(reason) => {
            this._updateStatusBooking(positions, STATUS.reject, {
              name: 'reason',
              value: reason,
            });
            this.setState({ modalHandleStatus: null });
          }}
        />
      ),
    });
  };

  _updateStatusBooking = (positions, status, { name, value }) => {
    this.setState((preState) => {
      const cloneData = [...preState.data];
      cloneData[positions] = {
        ...cloneData[positions],
        status: status === null ? STATUS.pending : status,
        [name]: value || cloneData[positions][name],
      };
      return {
        ...preState,
        data: [...cloneData],
      };
    });
  };

  render() {
    const { isShowModal, data, newBookingData, modalHandleStatus } = this.state;

    return (
      <div>
        {modalHandleStatus}
        <DashBoardComponent
          permission={this.permission}
          data={data}
          isShowModal={isShowModal}
          isDisableCreateButton={Object.keys(newBookingData).length === 0}
          handleOnSubmit={this._handleOnSubmit}
          handleOpenModal={this._handleOpenModal}
          handleCloseModal={this._handleCloseModal}
          handleFieldChange={this._handleChange}
          handleCancelBooking={this._handleCancelBooking}
          handleApproveBooking={this._handleApproveBooking}
          handleRejectBooking={this._handleRejectBooking}
        />
      </div>
    );
  }
}

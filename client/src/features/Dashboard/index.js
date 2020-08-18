import React, { Component, useState } from 'react';
import DashBoardComponent from '../../components/DashBoard';
import moment from 'moment';
import { PERMISSION, DEFAULT_DATA, STATUS } from '../../constant';
import Modals from '../../generic-components/Popover';
import {
  CCol,
  CFormGroup,
  CInputRadio,
  CLabel,
  CModalFooter,
  CButton,
  CInput,
} from '@coreui/react';

const BodyApprovalModal = (props) => {
  const { item, handleApprove, onModalClose, updateDateBooking } = props;

  const [dateTime, setDateTime] = useState(null);

  return (
    <CCol xs="12">
      <CFormGroup variant="checkbox" inline>
        <CInputRadio
          className="form-check-input"
          id="radio1"
          name="dateTime"
          value={item.oneOptionDate}
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
        />
        <CLabel variant="checkbox" htmlFor="radio1">
          {item.oneOptionDate}
        </CLabel>
      </CFormGroup>
      <CFormGroup variant="checkbox" inline>
        <CInputRadio
          className="form-check-input"
          id="radio2"
          name="dateTime"
          value={item.secondOptionDate}
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
        />
        <CLabel variant="checkbox" htmlFor="radio2">
          {item.secondOptionDate}
        </CLabel>
      </CFormGroup>
      <CFormGroup variant="checkbox" inline>
        <CInputRadio
          className="form-check-input"
          id="radio3"
          name="dateTime"
          value={item.thirdOptionDate}
          onChange={(e) => {
            setDateTime(e.target.value);
          }}
        />
        <CLabel variant="checkbox" htmlFor="radio3">
          {item.thirdOptionDate}
        </CLabel>
      </CFormGroup>
      <CModalFooter>
        <div className="btn-group text-center w-100">
          <CButton
            color="secondary"
            size="md"
            className="m-2"
            onClick={() => onModalClose()}
          >
            Cancel
          </CButton>
          <CButton
            color="info"
            size="md"
            className="m-2"
            onClick={() => handleApprove(dateTime)}
          >
            Approved
          </CButton>
        </div>
      </CModalFooter>
    </CCol>
  );
};

const BodyRejectModal = (props) => {
  const { onModalClose, handleReject } = props;

  const [reason, setReason] = useState(null);

  return (
    <CCol xs="12">
      <CFormGroup inline>
        <CLabel htmlFor="text-input"> Reason: </CLabel>
        <CInput
          id="text-input"
          name="reason"
          placeholder="Text"
          onChange={(e) => {
            setReason(e.target.value);
          }}
        />
      </CFormGroup>
      <CModalFooter>
        <div className="btn-group text-center w-100">
          <CButton
            color="secondary"
            size="md"
            className="m-2"
            onClick={() => onModalClose()}
          >
            Cancel
          </CButton>
          <CButton
            color="danger"
            size="md"
            className="m-2"
            onClick={() => handleReject(reason)}
          >
            Reject
          </CButton>
        </div>
      </CModalFooter>
    </CCol>
  );
};

const ModalHandleStatus = (props) => {
  const [isShowModal, setModalState] = useState(true);

  return (
    <div>
      {props.type === STATUS.approved ? (
        <Modals
          isShowModal={isShowModal}
          handleCloseModal={() => {
            setModalState(false);
            props.onModalClose();
          }}
          title="Choose proposed dates"
          body={
            <BodyApprovalModal {...props} handleApprove={props.handleApprove} />
          }
        />
      ) : (
        <Modals
          isShowModal={isShowModal}
          handleCloseModal={() => {
            setModalState(false);
            props.onModalClose();
          }}
          title="Input Reason"
          body={
            <BodyRejectModal {...props} handleReject={props.handleReject} />
          }
        />
      )}
    </div>
  );
};

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    const { permission } = this.props;

    this.state = {
      isShowModal: false,
      newBookingData: {},
      data: permission === PERMISSION.admin ? DEFAULT_DATA : [],
      modalHandleStatus: null,
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
    const { permission } = this.props;
    const { isShowModal, data, newBookingData, modalHandleStatus } = this.state;

    return (
      <div>
        {modalHandleStatus}
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

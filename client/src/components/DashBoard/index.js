import React, { Component } from 'react';
import Table from '../../generic-components/Table';
import {
  CContainer,
  CRow,
  CHeader,
  CButton,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CSelect,
  CInput,
  CFormText,
  CLabel,
} from '@coreui/react';
import Modals from '../../generic-components/Popover';
import { ModalBody } from './form/ModalBody';

export default class DashBoardComponent extends Component {
  render() {
    const {
      isShowModal,
      data,
      handleCloseModal,
      handleChange,
      handleOnSubmit,
      handleOpenModal,
      isDisableCreateButton,
      handleCancelBooking,
    } = this.props;

    return (
      <CContainer fluid className="dash-board">
        <CRow className="d-flex justify-content-between m-2">
          <CHeader>Dashboard</CHeader>
          <CButton color="danger" size="md">
            Sign out
          </CButton>
        </CRow>
        {isShowModal ? (
          <Modals
            isShowModal={isShowModal}
            handleCloseModal={handleCloseModal}
            title="Create new a Booking"
            body={
              <ModalBody
                handleCloseModal={handleCloseModal}
                handleFieldChange={handleChange}
                handleOnSubmit={handleOnSubmit}
                isDisableCreateButton={isDisableCreateButton}
              />
            }
          />
        ) : null}
        <div className="c-body">
          <main className="c-main">
            <div className="fade show">
              <CCol xs="12">
                <CCard>
                  <CCardHeader className="d-flex justify-content-between">
                    Booking Table
                    <CButton
                      size="sm"
                      color="success"
                      onClick={handleOpenModal}
                    >
                      Create a new Booking
                    </CButton>
                  </CCardHeader>
                  <CCardBody>
                    <Table
                      data={data}
                      handleCancelBooking={handleCancelBooking}
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </div>
          </main>
        </div>
      </CContainer>
    );
  }
}

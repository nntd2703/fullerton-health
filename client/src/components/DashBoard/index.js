import React, { Component } from "react";
import Table from "../../generic-components/Table";
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
} from "@coreui/react";
import Modals from "../../generic-components/Popover";
import { ModalBody, ModalFooter } from "./form/ModalBody";

export default class DashBoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  handleCloseModal = () => {
    this.setState({
      isShowModal: false,
    });
  };

  render() {
    const { isShowModal } = this.state;
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
            handleCloseModal={this.handleCloseModal}
            title="Create new a Booking"
            body={<ModalBody />}
            footer={<ModalFooter handleCloseModal={this.handleCloseModal} />}
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
                      onClick={() => {
                        this.setState({
                          isShowModal: true,
                        });
                      }}
                    >
                      Create a new Booking
                    </CButton>
                  </CCardHeader>
                  <CCardBody>
                    <Table />
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

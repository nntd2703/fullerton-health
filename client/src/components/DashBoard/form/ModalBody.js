import React from "react";
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

export const ModalBody = (props) => {
  return (
    <CCardBody>
      <CForm
        action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
      >
        <CFormGroup row>
          <CCol md="4">
            <CLabel htmlFor="select">Type of event</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CSelect custom name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">Health Talk</option>
              <option value="2">Wellness Events</option>
              <option value="3">Fitness Activities</option>
            </CSelect>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="4">
            <CLabel htmlFor="text-input">Text Input</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput id="text-input" name="text-input" placeholder="Text" />
            <CFormText>This is a help text</CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="4">
            <CLabel htmlFor="date-input">Date Input Option #1</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              type="date"
              id="date-input"
              name="date-input"
              placeholder="date"
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="4">
            <CLabel htmlFor="date-input">Date Input Option #2</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              type="date"
              id="date-input"
              name="date-input"
              placeholder="date"
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="4">
            <CLabel htmlFor="date-input">Date Input Option #3</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              type="date"
              id="date-input"
              name="date-input"
              placeholder="date"
            />
          </CCol>
        </CFormGroup>
      </CForm>
    </CCardBody>
  );
};

export const ModalFooter = (props) => {
  return (
    <div className="btn-group text-center w-100">
      <CButton
        color="secondary"
        size="md"
        className="m-2"
        onClick={props.handleCloseModal}
      >
        Cancel
      </CButton>
      <CButton color="info" size="md" className="m-2">
        Create
      </CButton>
    </div>
  );
};

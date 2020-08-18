import React from 'react';
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
  CModalBody,
  CModalFooter,
} from '@coreui/react';
import { TYPE_OF_EVENT } from '../../../constant';

export const ModalBody = (props) => {
  return (
    <>
      <CModalBody>
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
                <CSelect
                  custom
                  name="typeOfEvent"
                  id="select"
                  onChange={props.handleFieldChange}
                >
                  {TYPE_OF_EVENT.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </CSelect>
                <CFormText>Free test</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="4">
                <CLabel htmlFor="text-input">Location of Event </CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <CInput
                  id="text-input"
                  name="locationOfEvent"
                  placeholder="Text"
                  onChange={props.handleFieldChange}
                />
                <CFormText>Free test</CFormText>
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
                  name="oneOptionDate"
                  placeholder="One Option Date"
                  onChange={props.handleFieldChange}
                />
                <CFormText>Free test</CFormText>
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
                  name="secondOptionDate"
                  placeholder="Second Option Date"
                  onChange={props.handleFieldChange}
                />
                <CFormText>Free test</CFormText>
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
                  name="thirdOptionDate"
                  placeholder="Third Option Date"
                  onChange={props.handleFieldChange}
                />
                <CFormText>Free test</CFormText>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
      </CModalBody>
      <CModalFooter>
        <div className="btn-group text-center w-100">
          <CButton
            color="secondary"
            size="md"
            className="m-2"
            onClick={props.handleCloseModal}
          >
            Cancel
          </CButton>
          <CButton
            color="info"
            size="md"
            className="m-2"
            onClick={props.handleOnSubmit}
            disabled={props.isDisableCreateButton}
          >
            Create
          </CButton>
        </div>
      </CModalFooter>
    </>
  );
};

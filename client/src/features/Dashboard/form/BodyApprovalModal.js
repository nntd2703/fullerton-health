import React, { useState } from "react";
import {CButton, CCol, CFormGroup, CInputRadio, CLabel, CModalFooter} from "@coreui/react";

export const BodyApprovalModal = (props) => {
    const {item, handleApprove, onModalClose } = props;

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
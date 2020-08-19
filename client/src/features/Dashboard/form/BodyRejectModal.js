import React, {useState} from "react";
import {CButton, CCol, CFormGroup, CInput, CLabel, CModalFooter} from "@coreui/react";

export const BodyRejectModal = (props) => {
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

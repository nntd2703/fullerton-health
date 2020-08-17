import React from "react";
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const Modals = (props) => {
  const { isShowModal, title, body, footer, handleCloseModal } = props;
  return (
    <CModal
      show={isShowModal}
      onClose={() => {
        handleCloseModal();
      }}
    >
      <CModalHeader closeButton>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>
      <CModalBody>{body}</CModalBody>
      <CModalFooter>{footer}</CModalFooter>
    </CModal>
  );
};

export default Modals;

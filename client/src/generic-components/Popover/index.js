import React from 'react';
import { CModal, CModalHeader, CModalTitle } from '@coreui/react';

const Modals = (props) => {
  const { isShowModal, title, body, handleCloseModal, type } = props;
  return (
    <CModal
      show={isShowModal}
      onClose={() => {
        handleCloseModal();
      }}
      color={type || 'success'}
    >
      <CModalHeader closeButton>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>
      {body}
    </CModal>
  );
};

export default Modals;

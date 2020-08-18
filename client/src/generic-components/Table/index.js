import React from 'react';
import { CButton, CDataTable, CBadge } from '@coreui/react';
import { FIELDS, TYPE_OF_EVENT, PERMISSION } from '../../constant';

const Table = (props) => {
  const getBadge = (status) => {
    switch (status) {
      case 'Approval':
        return 'success';
      case 'Pending Review':
        return 'warning';
      case 'Reject':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const { permission, data } = props;

  return (
    <CDataTable
      items={data}
      fields={FIELDS}
      itemsPerPage={10}
      pagination
      sorter
      tableFilter
      scopedSlots={{
        typeOfEvent: ({ typeOfEvent }) => {
          const { label = '' } = typeOfEvent
            ? TYPE_OF_EVENT.find((item) => item.value === typeOfEvent)
            : '';
          return <td>{label}</td>;
        },
        dateTime: (item) => (
          <td>
            <CBadge color="secondary">{item.oneOptionDate}</CBadge>
            <CBadge color="secondary">{item.secondOptionDate}</CBadge>
            <CBadge color="secondary">{item.thirdOptionDate}</CBadge>
          </td>
        ),
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        cancel: (item, index) => {
          return (
            <td className="py-2">
              {permission === PERMISSION.admin ? (
                <>
                  <CButton
                    size="sm"
                    color="success"
                    className="ml-1"
                    onClick={() => {
                      props.handleApproveBooking(index);
                    }}
                  >
                    Approved
                  </CButton>
                  <CButton
                    size="sm"
                    color="danger"
                    className="ml-1"
                    onClick={() => {
                      props.handleRejectBooking(index);
                    }}
                  >
                    Reject
                  </CButton>
                </>
              ) : (
                <CButton
                  size="sm"
                  color="danger"
                  className="ml-1"
                  onClick={() => {
                    props.handleCancelBooking(index);
                  }}
                >
                  Cancel
                </CButton>
              )}
            </td>
          );
        },
      }}
    />
  );
};

export default Table;

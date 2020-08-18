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
        dateTime: (item) => {
          return !item.dateTime ? (
            <td>
              <CBadge color="secondary">{item.oneOptionDate}</CBadge>
              <CBadge color="secondary">{item.secondOptionDate}</CBadge>
              <CBadge color="secondary">{item.thirdOptionDate}</CBadge>
            </td>
          ) : (
            <td>{item.dateTime}</td>
          );
        },
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            {item.reason ? `Reason reject: ${item.reason}` : null}
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
                      props.handleApproveBooking(item, index);
                    }}
                    disabled={!!item.dateTime || !!item.reason}
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
                    disabled={!!item.dateTime || !!item.reason}
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
                  disabled={!!item.dateTime || !!item.reason}
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

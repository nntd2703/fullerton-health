import React from "react";
import { CButton, CDataTable, CBadge } from "@coreui/react";
import usersData from "./example";

const Table = () => {
  const fields = [
    { key: "typeOfEvent", _style: { width: "40%" } },
    { key: "locationOfEvent", _style: { width: "20%" } },
    { key: "dateTime", _style: { width: "20%" } },
    { key: "status", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Cancel":
        return "secondary";
      case "Pending":
        return "warning";
      case "Reject":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CDataTable
      items={usersData}
      fields={fields}
      itemsPerPage={10}
      pagination
      sorter
      tableFilter
      scopedSlots={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item, index) => {
          return (
            <td className="py-2">
              <CButton size="sm" color="danger" className="ml-1">
                Cancel
              </CButton>
            </td>
          );
        },
      }}
    />
  );
};

export default Table;

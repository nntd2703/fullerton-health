import React, {useState} from "react";
import {STATUS} from "../../../constant";
import Modals from "../../../generic-components/Popover";
import {BodyApprovalModal} from "./BodyApprovalModal";
import {BodyRejectModal} from "./BodyRejectModal";

export const ModalHandleStatus = (props) => {
    const [isShowModal, setModalState] = useState(true);

    return (
        <div>
            {props.type === STATUS.approved ? (
                <Modals
                    isShowModal={isShowModal}
                    handleCloseModal={() => {
                        setModalState(false);
                        props.onModalClose();
                    }}
                    title="Choose proposed dates"
                    body={
                        <BodyApprovalModal {...props} handleApprove={props.handleApprove} />
                    }
                />
            ) : (
                <Modals
                    isShowModal={isShowModal}
                    handleCloseModal={() => {
                        setModalState(false);
                        props.onModalClose();
                    }}
                    title="Input Reason"
                    body={
                        <BodyRejectModal {...props} handleReject={props.handleReject} />
                    }
                />
            )}
        </div>
    );
};
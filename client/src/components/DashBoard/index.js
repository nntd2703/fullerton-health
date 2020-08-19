import React, {Component} from 'react';
import Table from '../../generic-components/Table';
import {
    CContainer,
    CRow,
    CHeader,
    CButton,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';
import Modals from '../../generic-components/Popover';
import {ModalBody} from './form/ModalBody';
import {PERMISSION} from '../../constant';
import {fakeAuth} from "../../Authientication";
import {Redirect} from "react-router-dom";

export default class DashBoardComponent extends Component {
    render() {
        const {
            permission,
            isShowModal,
            data,
            handleCloseModal,
            handleCancelBooking,
            handleOpenModal,
            handleRejectBooking,
            handleApproveBooking,
        } = this.props;

        return (
            <CContainer fluid className="dash-board">
                <CRow className="d-flex justify-content-between m-2">
                    <CHeader>Dashboard</CHeader>
                    <CButton color="danger" size="md" onClick={() => {
                        fakeAuth.signout();
                        return (<Redirect
                            to={{
                                pathname: '/login',
                            }}
                        />)
                    }}>
                        Sign out
                    </CButton>
                </CRow>
                {isShowModal ? (
                    <Modals
                        isShowModal={isShowModal}
                        handleCloseModal={handleCloseModal}
                        title="Create new a Booking"
                        body={<ModalBody {...this.props} />}
                    />
                ) : null}
                <div className="c-body">
                    <main className="c-main">
                        <div className="fade show">
                            <CCol xs="12">
                                <CCard>
                                    <CCardHeader className="d-flex justify-content-between">
                                        Booking Table
                                        {permission !== PERMISSION.admin ? (
                                            <CButton
                                                size="sm"
                                                color="success"
                                                onClick={handleOpenModal}
                                            >
                                                Create a new Booking
                                            </CButton>
                                        ) : null}
                                    </CCardHeader>
                                    <CCardBody>
                                        <Table
                                            permission={permission}
                                            data={data}
                                            handleCancelBooking={handleCancelBooking}
                                            handleRejectBooking={handleRejectBooking}
                                            handleApproveBooking={handleApproveBooking}
                                        />
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </div>
                    </main>
                </div>
            </CContainer>
        );
    }
}

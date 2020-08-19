import React, {Component} from 'react';
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CFormText,
    CButton,
} from '@coreui/react';
import {PERMISSION} from '../../constant';

export default class LoginFormComponent extends Component {
    render() {
        const {handleLogin} = this.props;
        return (
            <CContainer fluid>
                <CRow className="h-100 justify-content-center align-items-center">
                    <CCol sm="12" md="4">
                        <h3>Welcome to Login Form ...!</h3>
                        <CForm action="" method="post">
                            <CFormGroup>
                                <CLabel htmlFor="nf-email">Email</CLabel>
                                <CInput
                                    type="email"
                                    id="nf-email"
                                    name="nf-email"
                                    placeholder="Enter Email.."
                                    autoComplete="email"
                                />
                                <CFormText className="help-block">
                                    Please enter your email
                                </CFormText>
                            </CFormGroup>
                            <CFormGroup>
                                <CLabel htmlFor="nf-password">Password</CLabel>
                                <CInput
                                    type="password"
                                    id="nf-password"
                                    name="nf-password"
                                    placeholder="Enter Password.."
                                    autoComplete="current-password"
                                />
                                <CFormText className="help-block">
                                    Please enter your password
                                </CFormText>
                            </CFormGroup>
                            <div className="btn-group text-center w-100">
                                <CButton color="warning" size="md" className="m-2">
                                    Sign up
                                </CButton>
                                <CButton
                                    color="info"
                                    size="md"
                                    className="m-2"
                                    onClick={() => {
                                        handleLogin(PERMISSION.admin);
                                    }}
                                >
                                    Sign in as Admin
                                </CButton>
                                <CButton
                                    color="info"
                                    size="md"
                                    className="m-2"
                                    onClick={() => {
                                        handleLogin(PERMISSION.user);
                                    }}
                                >
                                    Sign in as User
                                </CButton>
                            </div>
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer>
        );
    }
}

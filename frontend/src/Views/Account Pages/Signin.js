import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Navbar from '../../Components/Navbar';
import SigninForm from './SigninForm';

function Signin() {
    return (
        <>
            <div class="container position-sticky z-index-sticky top-0">
                <div class="row">
                    <div class="col-12">
                        <Navbar />
                    </div>
                </div>
            </div>
            <SigninForm/>
        </>
    )
}

export default Signin;
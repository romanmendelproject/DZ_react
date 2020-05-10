import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../redux/auth-reducer";

const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={"Repeat password"} name={"password2"} type={"password"}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <button>Regiser</button>
            </div>
        </form>
    )
}

const RegisterReduxForm = reduxForm({ form: 'register' })(RegisterForm)

const Register = (props) => {
    const onSubmit = (formData) => {
        props.register(formData.login, formData.password, formData.password2);
    }
    if (props.isAuth) {
        return <Redirect to={"/courses"} />
    }
    return <div>
        <h1>Register</h1>
        <RegisterReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { register })(Register);
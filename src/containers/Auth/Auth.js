import React from 'react';

import classes from './Auth.module.css';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Auth extends React.Component {
    state = {
        controls: {
            email: {
                elementType: "input",
                elementConfig: {
                  type: "email",
                  placeholder: "Your Email"
                },
                value: "",
                validation: {
                  required: true,
                  isEmail: true,
                },
                valid: false,
                touched: false
              },
            password: {
                elementType: "input",
                elementConfig: {
                  type: "password",
                  placeholder: "Your Password"
                },
                value: "",
                validation: {
                  required: true,
                  minLength: 6,  
                },
                valid: false,
                touched: false
              },
        }
    }

    render() {
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
            id: key,
            config: this.state.controls[key]
            });
        };

        const form = formElementsArray.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                changed={event => this.inputChangedHandler(event, formElement.id)}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
            />
            ));

        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    };
};

export default Auth;
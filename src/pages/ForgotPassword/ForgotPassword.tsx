import styles from './ForgotPassword.module.scss';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import Form from '../../components/Form/Form';
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { resetPassword } from '../../utils/ingredientsApi';
import { useValidation } from '../../utils/Validate';

const ForgotPassword:FC<{isVisited:(a: boolean) => void}> = ({isVisited}) => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies<string>(['stellarBurger']);
    const [email, setEmail] = useState<null | string>(null)
    const { values, errors, isValid } = useValidation();

    function handleChange(evt: ChangeEvent) {
        const target = evt.target as HTMLInputElement;
        const name = target.name;
        const value = target.value;
        setEmail(value)
        isVisited(true)
        
    }

    function handleReset(e: FormEvent) {
        e.preventDefault()
        setCookie("isUserVisited", true, {maxAge: 500})
        resetPassword(values.email)
        .then(res => navigate('/reset-password'))
        .catch(err => console.log(err))
    }
    return (
        <Form
            title="Восстановление пароля" submitTitle="Восстановить"
            link="/login" linkQuestion="Вспомнили пароль?" linkText="Войти" onSubmit={handleReset}
        >
            <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Укажите e-mail"
                minLength={2}
                maxLength={50}
                onChange={handleChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
            />
            <span
                className={
                    errors["email"] === ""
                    ? styles.error
                    : styles.error_active
                }
            >
                {errors["email"]}
            </span>
        </Form>
    )
}

// ForgotPassword.propTypes = {
//     isVisited: PropTypes.func
// }

export default ForgotPassword;
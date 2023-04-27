import React, { useState, useEffect } from 'react';
//styles
import styles from './Login.module.css';

//validate
import { validation } from './ValidationForm';

import { Alert, Box, Button, Snackbar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {

    const [open, setOpen] = useState(false)
    const [openError, setOpenError] = useState(false)

    const [valueInput, setValueInput] = useState({
        name: '',
        email: '',
        password: '',
        lastName: '',
        numberPhone: '',
        conformPassword: '',
        isAccepted: false
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
        lastName: false,
        numberPhone: false,
        confirmPassword: false,
    });
    
    const focusHandler = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    };

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(validation(valueInput))
    }, [valueInput, touched])
    
    const changeHandler = (event) => {
        if(event.target.name === 'isAccepted') {
            setValueInput({...valueInput, [event.target.name]: event.target.checked})
        } else {
            setValueInput({...valueInput, [event.target.name]: event.target.value})
        }
    };

    const openHandler = (e) => {
        e.preventDefault()
        const key = Object.keys(errors);
        
        if(key.length === 0) {
            setOpen(true)
        } else {
            setOpenError(true)
            setTouched({
                name: true,
                email: true,
                password: true,
                lastName: true,
                numberPhone: true,
                confirmPassword: true,
            })
        }
    };

    const closeHandler = () => {
        setOpen(false)
        setOpenError(false)
    }
    
    return (
        <div className={styles.mainContainer}>
        <form className={styles.container}>
            <div className={styles.containerTop}>
                <h2>ثبت نام در بای شاپ</h2>
            </div>
            <div className={styles.containerBottom}>
                <div>
                    <div>
                        <input name='name' type='text' placeholder='نام' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.name && touched.name && errors.name}</span>
                    </div>
                    <div>
                        <input name='lastName' type='text' placeholder='نام خانوادگی' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.lastName && touched.lastName && errors.lastName}</span>
                    </div>
                    <div>
                        <input name='numberPhone' type='text' placeholder='تلفن همراه' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.numberPhone && touched.numberPhone && errors.numberPhone}</span>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <input name='email' type='text' placeholder='ایمیل' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div>
                        <input name='password' type='password' placeholder='رمز عبور' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.password && touched.password && errors.password}</span>
                    </div>
                    <div>
                        <input name='confirmPassword' type='password' placeholder='تکرار رمز عبور' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                    </div>
                </div>
            </div>
            <div className={styles.isAccepted}>
                <div>
                    <p>حریم خصوصی را خوانده ام و قبول دارم</p>
                    <input id='isAccepted' name='isAccepted' type='checkbox' onChange={changeHandler} />
                    <label for='isAccepted' />
                </div>
                <span>{errors.isAccepted && errors.isAccepted}</span>
            </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='success' sx={{width: '250px'}}>
                        ثبت نام با موفقیت انجام شد!
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='error' sx={{width: '250px'}}>
                        ثبت نام با خطا مواجه شد!
                    </Alert>
                </Snackbar>
            <Button onClick={openHandler} sx={{width: '50%', m: 2}} variant='contained' type='submit'>ثبت نام</Button>
            <Link className={styles.signIn} to='/signIn'>ورود</Link>
        </form>
        </div>
    );
};

export default Login;
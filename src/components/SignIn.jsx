import React, { useState, useEffect } from 'react';
//styles
import styles from './Login.module.css';

//validate
import { validationSignIn } from './ValidationSignIn';

import { Alert, Box, Button, Snackbar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [open, setOpen] = useState(false)
    const [openError, setOpenError] = useState(false)

    const [valueInput, setValueInput] = useState({
        email: '',
        password: '',
        numberPhone: '',
    });

    const [touched, setTouched] = useState({
        email: false,
        password: false,
        numberPhone: false,
    });
    
    const focusHandler = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    };

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(validationSignIn(valueInput))
    }, [valueInput, touched])

    const changeHandler = (event) => {
        setValueInput({...valueInput, [event.target.name]: event.target.value})
    };

    const openHandler = (e) => {
        e.preventDefault()
        const key = Object.keys(errors);
        
        if(key.length === 0) {
            setOpen(true)
        } else {
            setOpenError(true)
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
                <h2> ورود به بای شاپ</h2>
            </div>
            <div className={styles.containerBottom}>
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
                        <input name='numberPhone' type='text' placeholder='تلفن همراه' onChange={changeHandler} onFocus={focusHandler} />
                        <span>{errors.numberPhone && touched.numberPhone && errors.numberPhone}</span>
                    </div>
                </div>
            </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='success' sx={{width: '300px'}}>
                         ورود با موفقیت انجام شد!
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='error' sx={{width: '300px'}}>
                         ورود با خطا مواجه شد!
                    </Alert>
                </Snackbar>
            <Button onClick={openHandler} sx={{width: '50%', m: 2}} variant='contained' type='submit'> ورود</Button>
        </form>
        </div>
    );
};

export default SignIn;
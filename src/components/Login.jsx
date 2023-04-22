import React, { useState } from 'react';
//styles
import styles from './Login.module.css';

import { Button } from '@mui/material';

const Login = () => {

    const [valueInput, setValueInput] = useState({
        name: '',
        email: '',
        password: '',
        lastName: '',
        numberPhone: '',
        conformPassword: '',
        isAccepted: false
    });
    console.log(valueInput)
    const changeHandler = (event) => {
        if(event.target.name === 'isAccepted') {
            setValueInput({...valueInput, [event.target.name]: event.target.checked})
        } else {
            setValueInput({...valueInput, [event.target.name]: event.target.value})
        }
    };
    
    return (
        <div className={styles.mainContainer}>
        <form className={styles.container}>
            <div className={styles.containerTop}>
                <h2>ثبت نام در بای شاپ</h2>
            </div>
            <div className={styles.containerBottom}>
                <div>
                    <div>
                        <input name='name' type='text' placeholder='نام' onChange={changeHandler} />
                    </div>
                    <div>
                        <input name='email' type='text' placeholder='ایمیل' onChange={changeHandler} />
                    </div>
                    <div>
                        <input name='password' type='password' placeholder='رمز عبور' onChange={changeHandler} />
                    </div>
                </div>
                <div>
                    <div>
                        <input name='lastName' type='text' placeholder='نام خانوادگی' onChange={changeHandler} />
                    </div>
                    <div>
                        <input name='numberPhone' type='text' placeholder='تلفن همراه' onChange={changeHandler} />
                    </div>
                    <div>
                        <input name='confirmPassword' type='password' placeholder='تکرار رمز عبور' onChange={changeHandler} />
                    </div>
                </div>
            </div>
            <div className={styles.isAccepted}>
                <p>حریم خصوصی را خوانده ام و قبول دارم</p>
                <input id='isAccepted' name='isAccepted' type='checkbox' onChange={changeHandler} />
                <label for='isAccepted' />
            </div>
            <Button onClick={e => e.preventDefault()} sx={{width: '50%', m: 2}} variant='contained' type='submit'>ثبت نام</Button>
        </form>
        </div>
    );
};

export default Login;
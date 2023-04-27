import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Snackbar, TextField } from '@mui/material';
//styles
import styles from './Footer.module.css';

//validate
import { validateFooterEmail } from './ValidateFooterEmail.jsx';

import one from '../footerAssets/cash-on-delivery.svg';
import two from '../footerAssets/days-return.svg';
import three from '../footerAssets/express-delivery.svg';
import four from '../footerAssets/original-products.svg';
import five from '../footerAssets/support.svg';

const Footer = () => {

    const [open, setOpen] = useState(false)
    const [openError, setOpenError] = useState(false)

    const [ value, setValue] = useState({
        email: ''
    });

    const [touched, setTouched] = useState({
        email: false
    })

    const [ errors, setErrors] = useState({});

    useEffect(() => {
        setErrors(validateFooterEmail(value))
        console.log(errors)
    }, [value, touched])

    const focusHandler = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }
    
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
        <>
        <Container maxWidth='xl'>
            <div className={styles.container} >
                <div>
                    <h2>بای شاپ</h2>
                    <p>تلفن پشتیبانی 000***000 | 7 روز هفته،24 ساعته پاسخگوی شما هستیم</p>
                </div>
                <div className={styles.support}>
                    <div>
                        <img src={one} alt='cash-on-delivery' />
                        <p>
                        امکان پرداخت در محل
                        </p>
                    </div>
                    <div>
                        <img src={two} alt='days-return' />
                        <p>
                        هفت روز ضمانت بازگشت کالا
                        </p>
                    </div>
                    <div>
                        <img src={three} alt='express-delivery' />
                        <p>
                        امکان تحویل اکسپرس
                        </p>
                    </div>
                    <div>
                        <img src={four} alt='cash-on-deliveroriginal-products' />
                        <p>
                        ضمانت اصل بودن کالا
                        </p>
                    </div>
                    <div>
                        <img src={five} alt='support' />
                        <p>
                        7 روز هفته، 24 ساعته
                        </p>
                    </div>
                </div>
                <div className={styles.field}>
                    <h4>با ما همراه باشید!</h4>
                    <div>
                        <div className={styles.emailValidate}>
                            <input type='text' value={value.email} onFocus={focusHandler} onChange={e => setValue({email: e.target.value})} name='email' placeholder='ایمیل شما' />
                            <span>{errors.email && touched.email && errors.email}</span>
                        </div>
                        <Button onClick={openHandler} sx={{mr: 1, height: '45px', width: 'auto'}} variant='contained' disableElevation>ثبت</Button>
                    </div>
                </div>
            </div>
        </Container>
            <div className={styles.footerPower}>
                <h3>قدرت گرفته از علیرضا کمالی</h3>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='success' sx={{width: '250px'}}>
                        منتظر پیام های ما باشید.
                    </Alert>
                </Snackbar>
                <Snackbar open={openError} autoHideDuration={6000} onClose={closeHandler}>
                    <Alert variant='filled' severity='warning' sx={{width: '250px'}}>
                        ایمیل معتبر وارد کنید.
                    </Alert>
                </Snackbar>
            </>
    );
};

export default Footer;
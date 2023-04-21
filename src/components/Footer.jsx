import React from 'react';
import { Button, Container, TextField } from '@mui/material';
//styles
import styles from './Footer.module.css';

import one from '../footerAssets/cash-on-delivery.svg';
import two from '../footerAssets/days-return.svg';
import three from '../footerAssets/express-delivery.svg';
import four from '../footerAssets/original-products.svg';
import five from '../footerAssets/support.svg';

const Footer = () => {
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
                        <input type='text' name='email' placeholder='ایمیل شما' />
                        <Button sx={{mr: 1, }} variant='contained' disableElevation>ثبت</Button>
                    </div>
                </div>
            </div>
        </Container>
            <div className={styles.footerPower}>
                <h3>قدرت گرفته از علیرضا کمالی</h3>
            </div>
            </>
    );
};

export default Footer;
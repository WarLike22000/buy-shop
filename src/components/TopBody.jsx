import React from 'react';
import styles from './TopBody.module.css';

const TopBody = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h2>فروشگاه آنلاین بای شاپ</h2>
                <h5>سریع و آسان خرید کن!</h5>
            </div>
        </div>
    );
};

export default TopBody;
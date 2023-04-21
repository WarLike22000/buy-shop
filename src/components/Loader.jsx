import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.container}>
            <h1>در حال بررسی سیستم شما...</h1>
        </div>
    );
};

export default Loader;
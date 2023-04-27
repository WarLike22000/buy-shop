import React from 'react';
import styles from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={styles.container}>
            <FallingLines
                color="#4993FA"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    );
};

export default Loader;
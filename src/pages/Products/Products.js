import React from 'react';
import styles from './styles.module.css';

const Products = ({item}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={item.image} title="" alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.price}>{item.price}</div>
                <div className={styles.description}>
                    {item.description}
                    

                </div>
            </div>
        </div>
    );
  };

export default Products;



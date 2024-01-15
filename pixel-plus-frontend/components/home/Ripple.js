import React, { useRef, useEffect } from 'react';

import styles from './Ripple.module.css'

const Ripple = ({ x, y, id, removeRipple }) => {
    const rippleRef = useRef();
   
    useEffect(() => {
      const rippleElement = rippleRef.current;
      rippleElement.addEventListener('animationend', () => removeRipple(id));
   
      return () => {
        rippleElement.removeEventListener('animationend', () => removeRipple(id));
      };
    }, []);
   
    return <div ref={rippleRef} className={styles.ripple} style={{ left: `${x}px`, top: `${y}px` }}></div>;
   };

   export default Ripple;
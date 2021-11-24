/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const variants: any = {
  click: { y: [0, 3, 0], scale: [1, 1.25, 1], transition: { duration: 0.2 } },
  unclick: {
    y: [0, 3, 0],
    scale: [1, 1.1, 1],
    // rotate: [0, 2, -2, 0],
    transition: { duration: 0.2 },
  },
  enlarge: { scale: [1, 1.04], transition: { duration: 0.15 } },
  delarge: { scale: [1, 1.1] },
};

const Button = (props: any) => {
  const { type } = props;

  let buttonText: string = '';
  let buttonURL: string = '';
  let emoji: string = '';

  switch (type) {
    case 'mining':
      buttonText = 'Mining';
      emoji = '⛏️';
      buttonURL = '/docs/wallet/intro/';
      break;
    case 'wallet':
      buttonText = 'Wallet';
      emoji = '🪙';
      buttonURL = '/docs/wallet/intro/';
      break;
    case 'network':
      buttonText = 'Network';
      emoji = '🔗';
      break;
    case 'community':
      buttonText = 'Community';
      emoji = '📱';
      break;
    case 'smartnodes':
      buttonText = 'Smartnodes';
      emoji = '⚙';
      break;
    default:
      break;
  }

  console.log(type);
  return (
    <>
      <motion.div
        initial={false}
        variants={variants}
        animate=""
        className="col"
        whileHover="enlarge"
        whileTap=""
        key="keytest"
      >
        <Link to={buttonURL} className={styles.nounderline}>
          <button className="button button--block button--danger shadow--sm">
            <div className="container">
              <div className="row">
                <div className="col col--4 ">{buttonText}</div>
                <div className="col col--2 col--offset-4">
                  <motion.div
                    initial={false}
                    variants={variants}
                    animate="visible"
                    className="col"
                    whileHover={{
                      scale: 1.2,
                      // rotate: [0, Math.random() * (15 - 10) + 10, 0],
                      y: [0, -1, 1, 0],
                    }}
                    whileTap={
                      // add more later
                      // eslint-disable-next-line no-constant-condition
                      true
                        ? { scale: 0.9, transition: { duration: 0.5 } }
                        : { scale: 1.4, transition: { duration: 0.2 } }
                    }
                    key="keytest"
                  >
                    <div>{emoji}</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default Button;

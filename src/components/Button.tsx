/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import {
  CubeTransparentIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ChipIcon,
} from '@heroicons/react/outline';
// import Layout from '@theme/Layout';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './Button.module.css';

const Button = (props: any) => {
  const { type } = props;
  const isDarkTheme = useColorMode().colorMode === 'dark';
  // const { isDarkTheme, colorMode } = useThemeConfig();

  const variants: any = {
    click: { y: [0, 3, 0], scale: [1, 1.25, 1], transition: { duration: 0.2 } },
    unclick: {
      y: [0, 3, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 0.2 },
    },
    enlarge: {
      scale: [1, 1.05],
      transition: { duration: 0.08 },
    },
    delarge: { scale: [1, 1.1] },
  };

  let buttonText: string = '';
  let buttonURL: string = '';
  let description: string = '';
  let emoji: any = '';

  switch (type) {
    case 'mining':
      buttonText = 'Mining';
      emoji = (
        <ChipIcon
          className={`${
            isDarkTheme ? styles.svg_wrap_dark : styles.svg_wrap_light
          }`}
        />
      );
      buttonURL = 'docs/mining/';
      description = 'Topics around mining Raptoreum';
      break;
    case 'wallet':
      buttonText = 'Wallet';
      emoji = (
        <CreditCardIcon
          className={`${
            isDarkTheme ? styles.svg_wrap_dark : styles.svg_wrap_light
          }`}
        />
      );
      buttonURL = 'docs/wallet/';
      description = 'Find a wallet - Learn about the CLI Wallet';
      break;
    case 'network':
      buttonText = 'Network';
      emoji = '🔗';
      break;
    case 'community':
      buttonText = 'Community';
      emoji = (
        <CubeTransparentIcon
          className={`${
            isDarkTheme ? styles.svg_wrap_dark : styles.svg_wrap_light
          }`}
        />
      );
      description =
        'This is a test description and it will describe how this is a test inside of the description.';
      break;
    case 'smartnodes':
      buttonText = 'Smartnodes';
      emoji = (
        <CubeTransparentIcon
          className={`${
            isDarkTheme ? styles.svg_wrap_dark : styles.svg_wrap_light
          }`}
        />
      );
      buttonURL = 'docs/smartnodes/';
      description = 'Learn about Smartnodes, creation & maintenance.';
      break;
    case 'papers':
      buttonText = 'Papers';
      emoji = (
        <DocumentTextIcon
          className={`${
            isDarkTheme ? styles.svg_wrap_dark : styles.svg_wrap_light
          }`}
        />
      );
      buttonURL = 'docs/raptoreum/papers/raptoreumlightpaper';
      description = 'Read proposals and developmental plans';
      break;
    default:
      break;
  }
  return (
    <>
      <motion.div
        initial={false}
        variants={variants}
        animate=""
        className="col"
        whileHover="enlarge"
        whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
        key="keytest"
      >
        <Link to={buttonURL}>
          <div className="card ">
            <div className="card__image">
              <button className="button button--block button--primary shadow--sm">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div
                        className={`${
                          isDarkTheme
                            ? styles.button_header
                            : styles.dark_mode_light_text
                        }`}
                      >
                        {buttonText}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="card__header shadow--lg">
              <motion.div
                initial
                variants={variants}
                animate="visible"
                // className={isDarkTheme ? styles.white_text : styles.black_text}
                whileHover={{
                  scale: 1.2,
                  y: [0, -1, 1, 0],
                  transition: { duration: 0.1 },
                  color: !isDarkTheme
                    ? ['#0892d0', '#000000']
                    : ['#0892d0', '#FFFFFF'],
                }}
                whileTap={
                  // eslint-disable-next-line no-constant-condition
                  true
                    ? { scale: 0.9, transition: { duration: 0.05 } }
                    : { scale: 1.4, transition: { duration: 0.2 } }
                }
                key="keytest"
                style={{
                  display: 'flex',
                  margin: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {emoji}
              </motion.div>
            </div>
            <div
              className={`card__body ${
                isDarkTheme ? styles.white_text : styles.black_text
              }`}
              style={{
                display: 'flex',
                margin: 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {description}
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Button;

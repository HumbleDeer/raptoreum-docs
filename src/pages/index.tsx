/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import Button from '../components/Button';

import HomepageFeatures from '../components/HomepageFeatures';

const variants: any = {
  click: { y: [0, 3, 0], scale: [1, 1.25, 1], transition: { duration: 0.5 } },
  unclick: {
    y: [0, 3, 0],
    scale: [1, 1.1, 1],
    rotate: [0, 2, -2, 0],
    transition: { duration: 0.5 },
  },
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

        <div className={clsx('container', styles.container)}>
          <img
            src="img/raptoreum_logo.png"
            height="128"
            width="128"
            alt="Raptoreum"
          />
          <h1 className="hero__title">Raptoreum</h1>
          <div className="row">
            <div className="col col--3 padding-top--lg margin-top--sm">
              <Button type="mining" />
            </div>
            <div className="col col--3 padding-top--lg margin-top--sm">
              <Button type="wallet" />
            </div>
            <div className="col col--3 padding-top--lg margin-top--sm">
              <Button type="network" />
            </div>
            <div className="col col--3 padding-top--lg margin-top--sm">
              <Button type="smartnodes" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Site description <head />"
    >
      <main>
        <HomepageHeader />

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

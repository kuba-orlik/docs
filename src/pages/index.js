import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageCategories from '../components/HomepageCategories';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <h1>Support Documentation</h1>
        <p>Explore advice and explanations for all of our features, and discover new tips and tricks to get the most out of your subscription.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Explore advice and explanations for all of our features, and discover new tips and tricks to get the most out of your subscription.">
      <HomepageHeader />
      <main>
        <HomepageCategories />
      </main>
    </Layout>
  );
}

import Layout from "@theme/Layout";
import React from "react";
import { releasesConfig as pageConfig } from "../page-content/releases.config";
import TextBlock from "../components/blocks/text-block";
import styles from "./releases.module.scss";

export default function Releases() {
  return (
    <Layout>
      <section
        className={`page-section bg-white ${styles.releaseSection}`}
        aria-labelledby="release-links-heading"
      >
        <div className="page-section__inner">
          <div className="section-kicker">GitHub releases</div>
          <h1 id="release-links-heading" className={styles.pageTitle}>
            Fluxnova Releases
          </h1>
          <p className={styles.releaseLead}>
            Each Fluxnova component publishes its own release notes on GitHub.
            Choose a product below to view versions, changelogs, and assets.
          </p>
          <div className={styles.releaseGrid}>
            {pageConfig.releaseLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  className={styles.releaseCard}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.releaseIcon} aria-hidden="true">
                    <Icon fill="currentColor" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span className={styles.releaseCta}>View releases →</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <TextBlock config={pageConfig.about} />
    </Layout>
  );
}

/* eslint-disable import/no-unresolved */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styles from './PDFReader.module.css';

export default function PDFReader(props: any): JSX.Element {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { url } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      <div className={styles.pageNavigator}>
        <div>
          <span className="badge badge--danger">
            Page {pageNumber} of {numPages}
          </span>
        </div>
        <div className={styles.alignRight}>
          <a href={url} download>
            <button className="button button--sm button--success">
              📜 Download
            </button>
          </a>
        </div>
      </div>
      <div className={styles.alignRight}>
        <button className="button button--sm button--info" onClick={prevPage}>
          ← Previous
        </button>
        <button
          className="button button--sm button--info margin-left--xs"
          onClick={nextPage}
        >
          Next →
        </button>
      </div>
      <div className={styles.pageNavigator}>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} className={styles.pdfContainer} />
        </Document>
      </div>
    </>
  );
}

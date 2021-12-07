/* eslint-disable consistent-return */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import axios from 'axios';
import _ from 'lodash';
import styles from './ReleaseWidget.module.css';

export default function ReleaseWidget(props: any): JSX.Element {
  const [releaseData, setReleaseData] = useState(null);
  const { releaseType } = props;

  const getReleasesFromGithub = async () => {
    console.log('getReleasesFromGithub');
    const data = await axios.get(
      'https://api.github.com/repos/Raptor3um/raptoreum/releases/latest'
    );
    return data;
  };

  useEffect(() => {
    console.log(releaseData);
    (async () => {
      if (!releaseData) {
        const data: any = await getReleasesFromGithub().then((result: any) => {
          console.log(result.data);
          return result.data;
        });
        setReleaseData(data);
      }
    })();
  }, [releaseData]);

  const VersionNumberWidget = () => {
    if (!releaseData) return;
    const result: string = releaseData?.tag_name;

    return (
      <>
        <span className="badge badge--secondary">{result}</span>
      </>
    );
  };

  const getWindowsZipRelease = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('windows_64.zip')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getWindowsZipReleaseDownloadLink = (): any => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('windows_64.zip')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const getWindowsInstallerRelease = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('windows_64_setup.exe')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getWindowsInstallerDownloadLink = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('windows_64_setup.exe')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const getUbuntu18Release = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('ubuntu18')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getUbuntu18ReleaseDownloadLink = (): any => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('ubuntu18')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const getUbuntu20Release = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('ubuntu20')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getUbuntu20ReleaseDownloadLink = (): any => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('ubuntu20')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const getMacRelease = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('MAC')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getMacReleaseDownloadLink = (): any => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('MAC')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const getBootstrapRelease = () => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('bootstrap')) {
        return true;
      }
    });

    return <>{result.name}</>;
  };

  const getBootstrapReleaseDownloadLink = (): any => {
    if (!releaseData) return;
    const result = _.find(releaseData.assets, (object: any) => {
      if (object?.name?.includes('bootstrap')) {
        return true;
      }
    });

    return result.browser_download_url;
  };

  const WindowsReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Windows Installer</div>
              <div className="col col--6">
                <a href={getWindowsInstallerDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getWindowsInstallerRelease()}
                  </button>
                </a>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Windows Standalone</div>
              <div className="col col--6">
                <a href={getWindowsZipReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getWindowsZipRelease()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const UbuntuReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Ubuntu 18</div>
              <div className="col col--6">
                <a href={getUbuntu18ReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getUbuntu18Release()}
                  </button>
                </a>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Ubuntu 20</div>
              <div className="col col--6">
                <a href={getUbuntu20ReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getUbuntu20Release()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const WindowsCLIReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Windows Binaries</div>
              <div className="col col--6">
                <a href={getWindowsZipReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getWindowsZipRelease()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const UbuntuCLIReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Ubuntu 18</div>
              <div className="col col--6">
                <a href={getUbuntu18ReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getUbuntu18Release()}
                  </button>
                </a>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Ubuntu 20</div>
              <div className="col col--6">
                <a href={getUbuntu20ReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getUbuntu20Release()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const MacReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Mac</div>
              <div className="col col--6">
                <a href={getMacReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getMacRelease()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const BootstrapReleaseWidget = () => {
    return (
      <>
        <div>
          <div className="container padding--sm">
            <div className="row padding--sm">
              <div className="col col--4">
                <strong>Release {VersionNumberWidget()}</strong>
              </div>
              <div className="col col--6">
                <strong>Download</strong>
              </div>
            </div>
            <div className="row padding--sm">
              <div className="col col--4">Latest Bootstrap</div>
              <div className="col col--6">
                <a href={getBootstrapReleaseDownloadLink()} download>
                  <button className="button button--primary">
                    {' '}
                    💾 {getBootstrapRelease()}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const widgetToDisplay = (): any => {
    switch (releaseType) {
      case 'windows':
        return <WindowsReleaseWidget />;
      case 'ubuntu':
        return <UbuntuReleaseWidget />;
      case 'windows-cli':
        return <WindowsCLIReleaseWidget />;
      case 'ubuntu-cli':
        return <UbuntuCLIReleaseWidget />;
      case 'mac':
        return <MacReleaseWidget />;
      case 'bootstrap':
        return <BootstrapReleaseWidget />;
      default:
        break;
    }
  };

  return <>{widgetToDisplay()}</>;
}

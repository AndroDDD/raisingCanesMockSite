import React from "react";
import { ImageBackground, View, StyleSheet, Dimensions } from "react-native";
import { Timeline } from "react-twitter-widgets";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  Pause,
  PlayArrow,
} from "@material-ui/icons";
import { gsap } from "gsap";

import $ from "jquery";

import { dataBaseUrl } from "../../../../routes/routerBlock";
import { handleImageResize } from "../../Desktop/FrontPage/FrontPage";

import "./MobileFrontPageStyles.scss";

const MobileFrontPage: React.FC = () => {
  // Handle screen resize view updates
  const [screenHeight, setScreenHeight] = React.useState(() => {
    return Dimensions.get("screen").height;
  });
  const [screenWidth, setScreenWidth] = React.useState(() => {
    return Dimensions.get("screen").width;
  });

  $(window).on("resize", () => {
    setScreenHeight(() => {
      return Dimensions.get("screen").height;
    });

    setScreenWidth(() => {
      return Dimensions.get("screen").width;
    });
  });

  React.useEffect(() => {
    console.log("updating styles");
    setStyles(() => {
      return {
        ...styles,
        mainDisplaySupport: {
          ...styles.mainDisplaySupport,
          minHeight: screenHeight,
        },
      };
    });
    // if (facebookIFrameRef.current) {
    //  facebookIFrameRef.current.contentWindow.location.reload();
    //}
  }, [screenHeight]);

  // Declare stylesheet for styles manipulation
  const [styles, setStyles] = React.useState({
    mainDisplay: styles2.mainDisplay,
    mainDisplaySupport: {
      width: "100%",
      minHeight: screenHeight,
    },
    mockSiteTitle: `mockSiteTitle`,
    mobileHeaderBarContainer: `mobileHeaderBarContainer`,
    mobileHeaderBar: `mobileHeaderBar`,
    mobileHeaderBarLeftSide: `mobileHeaderBarLeftSide`,
    mobileHeaderBarRightSide: `mobileHeaderBarRightSide`,
    mobileNavMenuIcon: `mobileNavMenuIcon`,
    extendedNavMenu: `mobileExtendedNavMenu`,
    extendedMenuListItemButton: `mobileExtendedMenuListItemButton`,
    mobileLocationIcon: `mobileLocationIcon`,
    mobileFoodMenuIcon: `mobileFoodMenuIcon`,
    mobileOrderNowButton: `mobileOrderNowButton`,
    logoIconContainer: `mobileLogoIconContainer`,
    logoIcon: `mobileLogoIcon`,
    slideShow: `mobileSlideShow`,
    slideShowImageDisplay: `mobileSlideShowImageDisplay`,
    slideShowImgNav: `mobileSlideShowImgNav`,
    slideShowImgNavPrev: `mobileSlideShowImgNavPrev`,
    slideShowImgNavPrevButton: `mobileSlideShowImgNavPrevButton`,
    slideShowImgNavNext: `mobileSlideShowImgNavNext`,
    slideShowImgNavNextButton: `mobileSlideShowImgNavNextButton`,
    slideShowImgIndexIndicator: `mobileSlideShowImgIndexIndicator`,
    slideShowImgIndexIndicatorButton: `mobileSlideShowImgIndicatorButton`,
    slideShowCurImgIndexIndicatorButton: `mobileSlideShowCurImgIndexIndicatorButton`,
    slideShowImgPause: `mobileSlideShowImgPause`,
    slideShowImgPauseButton: `mobileSlideShowImgPauseButton`,
    slideShowLogoDisplay: `mobileSlideShowLogoDisplay`,
    slideShowLogoImg: `mobileSlideShowLogoImg`,
    curSlideShowImageDisplay: `mobileCurSlideShowImageDisplay`,
    curSlideShowImage: {},
    prevSlideShowImageDisplay: `mobilePrevSlideShowImageDisplay`,
    prevSlideShowImage: {},
    randomImage: `mobileRandomImage`,
    linkedImagesContainer: `linkedImagesContainer`,
    linkedImage: `linkedImage`,
    middleContent: `mobileMiddleContent`,
    middleContentLeft: `mobileMiddleContentLeft`,
    middleContentMiddle: `mobileMiddleContentMiddle`,
    middleContentRight: `mobileMiddleContentRight`,
    bottomContent: `mobileBottomContent`,
    bottomContentMostLeft: `mobileBottomContentMostLeft`,
    bottomContentMiddleLeft: `mobileBottomContentMiddleLeft`,
    bottomContentMiddleRight: `mobileBottomContentMiddleRight`,
    bottomContentMostRight: `mobileBottomContentMostRight`,
    bottomContentMostRightLabel: `mobileBottomContentMostRightLabel`,
    footerBar: `mobileFooterBar`,
    sectionLabel: `mobileSectionLabel`,
    titleNinfoBundle: `mobileTitleNinfoBundle`,
    bundleTitle: `mobileBundleTitle`,
    bundleInfo: `mobileBundleInfo`,
    titleNinfoBundlev2: `mobileTitleNinfoBundlev2`,
    bundleTitlev2: `mobileBundleTitlev2`,
    bundleInfov2: `mobileBundleInfov2`,
    titleNinfoBundlev3: `mobileTitleNinfoBundlev3`,
    bundleTitlev3: `mobileBundleTitlev3`,
    bundleInfov3: `mobileBundleInfov3`,
    socialMediaIcons: `mobileSocialMediaIcons`,
    companyTrademarkInfo: `mobileCompanyTrademarkInfo`,
    clickableImage: `mobileClickableImage`,
  });

  // Declare variable holding random image urls
  const [randomImages, setRandomImages] = React.useState(() => {
    return [
      `${dataBaseUrl}images/5131480feb87051b5ce8df49985d1796-RestaurantRecovery_WebSiteSlider.jpg`,
      `${dataBaseUrl}images/c1baa50ec14008eff8f82a2b83626629-22801_SystemwideRecruiting_WebSlider.jpg`,
      `${dataBaseUrl}images/b44977f9e882be9451e111f7df048193-22935-Football-Web-Slider.jpg`,
      `${dataBaseUrl}images/822a6161833e4e0480f351aa06989387-21059_VeteransObs_WebSlider.jpg`,
    ];
  });

  // Declare variable holding current slide show image index
  const [curSlideShowImgIndex, setCurSlideShowImgIndex] = React.useState(() => {
    return 0;
  });
  // Declare variable holding prev slide show img
  const [prevSlideShowImgIndex, setPrevSlideShowImgIndex] = React.useState(
    () => {
      return 0;
    }
  );
  // Declare variable holding slide show image iterations
  const [slideShowImgIteration, setSlideShowImgIteration] = React.useState(
    () => {
      return 0;
    }
  );
  // Declare variable tracking if slide show is playing
  const [isSlideShowPlaying, setIsSlideShowPlaying] = React.useState(true);

  // Declare variable tracking if extended navigation menu is open
  const [isExtendedNavMenuOpen, setIsExtendedNavMenuOpen] = React.useState(
    () => {
      return false;
    }
  );
  // Declare refs for data extraction and manipulation
  let gsapTlRef = React.useRef<any>();
  let slideShowImageDisplayRef = React.useRef<any>();
  let curSlideShowImageRef = React.useRef<any>();
  let curSlideShowImageDisplayRef = React.useRef<any>();
  let prevSlideShowImageRef = React.useRef<any>();
  let prevSlideShowImageDisplayRef = React.useRef<any>();
  let middleContentRightRef = React.useRef<any>();
  let facebookIFrameRef = React.useRef<any>();
  let extendedMenuRef = React.useRef<any>();

  // Declare function handling slide show image switching
  const handleImageSwitch = () => {
    setTimeout(() => {
      setSlideShowImgIteration(() => {
        return slideShowImgIteration + 1;
      });
    }, 5000);
  };

  // Handle slideshow image switching animation
  React.useEffect(() => {
    let clarifyImageIndex = () => {
      if (curSlideShowImgIndex < randomImages.length - 1) {
        return curSlideShowImgIndex + 1;
      } else if (curSlideShowImgIndex >= randomImages.length - 1) {
        return 0;
      } else {
        return 0;
      }
    };
    let clarifiedImageIndex = clarifyImageIndex();
    if (isSlideShowPlaying) {
      if (slideShowImgIteration !== 0) {
        setCurSlideShowImgIndex(() => {
          return clarifiedImageIndex;
        });

        gsapTlRef.current = gsap
          .timeline()
          .set(prevSlideShowImageRef.current, {
            attr: {
              src:
                randomImages[
                  clarifiedImageIndex - 1 < 0
                    ? randomImages.length - 1
                    : clarifiedImageIndex - 1
                ],
            },
          })
          .set(prevSlideShowImageDisplayRef.current, {
            position: "relative",
            top: "-100%",
            left: "0%",
          })
          .set(curSlideShowImageDisplayRef.current, {
            position: "relative",
            top: "0%",
            right: "-100%",
          })
          .to(prevSlideShowImageDisplayRef.current, {
            left: "-105%",
            duration: 3,
            delay: 1,
          })
          .to(curSlideShowImageDisplayRef.current, {
            right: "0%",
            duration: 3,
            delay: -2.9,
          })
          .call(() => {
            handleImageSwitch();
          });
      } else {
        handleImageSwitch();
      }
    }
  }, [slideShowImgIteration]);

  // Handle component return view
  return (
    <ImageBackground
      source={{
        uri: `${dataBaseUrl}images/617f196f0689f03bcfa3f06d17c03abd-raisingCanesBackwall.jpg`,
      }}
      style={[styles.mainDisplay, styles.mainDisplaySupport]}
    >
      <div className={styles.mockSiteTitle}>{`Raising Canes Mock Site`}</div>
      <div className={styles.mobileHeaderBarContainer}>
        <div className={styles.mobileHeaderBar}>
          <div className={styles.mobileHeaderBarLeftSide}>
            <img
              src={`${dataBaseUrl}images/5bbd0a1c1b6f5c11de3c266c3e0b21cc-navMenuHamburgerIconv2.png`}
              className={styles.mobileNavMenuIcon}
              onClick={(event) => {
                if (isExtendedNavMenuOpen) {
                  gsapTlRef.current = gsap
                    .timeline()
                    .to(extendedMenuRef.current, { duration: 1, opacity: 0 });
                  setIsExtendedNavMenuOpen(() => {
                    return false;
                  });
                } else {
                  gsapTlRef.current = gsap
                    .timeline()
                    .to(extendedMenuRef.current, { duration: 1, opacity: 1 });

                  setIsExtendedNavMenuOpen(() => {
                    return true;
                  });
                }
              }}
            />
          </div>
          <div className={styles.mobileHeaderBarRightSide}>
            <img
              src={`${dataBaseUrl}images/2b7db1c6580f5234106f2040ce8d3ebf-raisingCanesLocationIcon.png`}
              className={styles.mobileLocationIcon}
            />
            <img
              src={`${dataBaseUrl}images/cac7a7f4e9974507a380484fa8e61883-raisingCanesMenuIcon.png`}
              className={styles.mobileFoodMenuIcon}
            />
            <div className={styles.mobileOrderNowButton}>{`ORDER NOW`}</div>
          </div>
        </div>
        <div ref={extendedMenuRef} className={styles.extendedNavMenu}>
          <button
            className={styles.extendedMenuListItemButton}
          >{`OUR STORY`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`NEWS ROOM`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`LETTER FROM THE FOUNDER`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`OUR CONCEPT`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`WHY THE DOG`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`SECRET MILLIONAIRE`}</button>

          <button
            className={styles.extendedMenuListItemButton}
          >{`FAQs`}</button>
        </div>
      </div>
      <div className={styles.logoIconContainer}>
        <img
          src={`${dataBaseUrl}images/4699aa8d63a0c7f285339290fa5a373a-logo_raising_cane.png`}
          alt={`Logo Icon`}
          className={styles.logoIcon}
        />
      </div>

      <div className={styles.slideShow}>
        <div
          ref={slideShowImageDisplayRef}
          className={styles.slideShowImageDisplay}
        >
          <div
            ref={curSlideShowImageDisplayRef}
            className={styles.curSlideShowImageDisplay}
          >
            <img
              ref={curSlideShowImageRef}
              src={randomImages[curSlideShowImgIndex]}
              alt={"random image"}
              width={"100%"}
              height={"100%"}
              className={styles.randomImage}
              style={styles.curSlideShowImage}
              onLoad={(event) => {
                let imgContainerHeight =
                  slideShowImageDisplayRef.current.offsetHeight;
                let imgContainerWidth =
                  slideShowImageDisplayRef.current.offsetWidth;
                handleImageResize(event, imgContainerHeight, imgContainerWidth);
              }}
            />
          </div>
          <div
            ref={prevSlideShowImageDisplayRef}
            className={styles.prevSlideShowImageDisplay}
          >
            <img
              ref={prevSlideShowImageRef}
              src={randomImages[prevSlideShowImgIndex]}
              alt={"random image"}
              width={"100%"}
              height={"100%"}
              className={styles.randomImage}
              style={styles.prevSlideShowImage}
              onLoad={(event) => {
                let imgContainerHeight =
                  slideShowImageDisplayRef.current.offsetHeight;
                let imgContainerWidth =
                  slideShowImageDisplayRef.current.offsetWidth;
                handleImageResize(event, imgContainerHeight, imgContainerWidth);
              }}
            />
          </div>
        </div>
        <div className={styles.slideShowImgNav}>
          <div className={styles.slideShowImgNavPrev}>
            <button
              className={styles.slideShowImgNavPrevButton}
              onClick={(event) => {
                setIsSlideShowPlaying(() => {
                  return false;
                });

                let clarifyImageIndex = () => {
                  if (curSlideShowImgIndex <= 0) {
                    return randomImages.length - 1;
                  } else if (curSlideShowImgIndex > 0) {
                    return curSlideShowImgIndex - 1;
                  } else {
                    return randomImages.length - 1;
                  }
                };
                let clarifiedImageIndex = clarifyImageIndex();

                setCurSlideShowImgIndex(() => {
                  return clarifiedImageIndex;
                });

                gsapTlRef.current = gsap
                  .timeline()
                  .set(prevSlideShowImageRef.current, {
                    attr: {
                      src:
                        randomImages[
                          clarifiedImageIndex + 1 > randomImages.length - 1
                            ? 0
                            : clarifiedImageIndex + 1
                        ],
                    },
                  })
                  .set(prevSlideShowImageDisplayRef.current, {
                    position: "relative",
                    top: "-100%",
                    left: "0%",
                  })
                  .set(curSlideShowImageDisplayRef.current, {
                    position: "relative",
                    top: "0%",
                    right: "105%",
                  })
                  .to(prevSlideShowImageDisplayRef.current, {
                    left: "105%",
                    duration: 3,
                  })
                  .to(curSlideShowImageDisplayRef.current, {
                    right: "0%",
                    duration: 3,
                    delay: -3,
                  });
              }}
            >
              <ArrowBackIosRounded />
            </button>
          </div>
          <div className={styles.slideShowImgNavNext}>
            <button
              className={styles.slideShowImgNavNextButton}
              onClick={(event) => {
                setIsSlideShowPlaying(() => {
                  return false;
                });
                let clarifyImageIndex = () => {
                  if (curSlideShowImgIndex < randomImages.length - 1) {
                    return curSlideShowImgIndex + 1;
                  } else if (curSlideShowImgIndex >= randomImages.length - 1) {
                    return 0;
                  } else {
                    return 0;
                  }
                };
                let clarifiedImageIndex = clarifyImageIndex();

                setCurSlideShowImgIndex(() => {
                  return clarifiedImageIndex;
                });

                gsapTlRef.current = gsap
                  .timeline()
                  .set(prevSlideShowImageRef.current, {
                    attr: {
                      src:
                        randomImages[
                          clarifiedImageIndex - 1 < 0
                            ? randomImages.length - 1
                            : clarifiedImageIndex - 1
                        ],
                    },
                  })
                  .set(prevSlideShowImageDisplayRef.current, {
                    position: "relative",
                    top: "-100%",
                    left: "0%",
                  })
                  .set(curSlideShowImageDisplayRef.current, {
                    position: "relative",
                    top: "0%",
                    right: "-100%",
                  })
                  .to(prevSlideShowImageDisplayRef.current, {
                    left: "-105%",
                    duration: 3,
                  })
                  .to(curSlideShowImageDisplayRef.current, {
                    right: "0%",
                    duration: 3,
                    delay: -2.8,
                  });
              }}
            >
              <ArrowForwardIosRounded />
            </button>
          </div>
        </div>
        <div className={styles.slideShowImgIndexIndicator}>
          {randomImages.map((img, index) => {
            return (
              <button
                key={`${index}`}
                className={
                  curSlideShowImgIndex === index
                    ? styles.slideShowCurImgIndexIndicatorButton
                    : styles.slideShowImgIndexIndicatorButton
                }
                onClick={() => {
                  if (index > curSlideShowImgIndex) {
                    setIsSlideShowPlaying(() => {
                      return false;
                    });

                    setCurSlideShowImgIndex(() => {
                      return index;
                    });

                    gsapTlRef.current = gsap
                      .timeline()
                      .set(prevSlideShowImageRef.current, {
                        attr: { src: randomImages[curSlideShowImgIndex] },
                      })
                      .set(prevSlideShowImageDisplayRef.current, {
                        position: "relative",
                        top: "-100%",
                        left: "0%",
                      })
                      .set(curSlideShowImageDisplayRef.current, {
                        position: "relative",
                        top: "0%",
                        right: "-100%",
                      })
                      .to(prevSlideShowImageDisplayRef.current, {
                        left: "-105%",
                        duration: 3,
                      })
                      .to(curSlideShowImageDisplayRef.current, {
                        right: "0%",
                        duration: 3,
                        delay: -3,
                      });
                  } else if (index < curSlideShowImgIndex) {
                    setIsSlideShowPlaying(() => {
                      return false;
                    });

                    setCurSlideShowImgIndex(() => {
                      return index;
                    });

                    gsapTlRef.current = gsap
                      .timeline()
                      .set(prevSlideShowImageRef.current, {
                        attr: { src: randomImages[curSlideShowImgIndex] },
                      })
                      .set(prevSlideShowImageDisplayRef.current, {
                        position: "relative",
                        top: "-100%",
                        left: "0%",
                      })
                      .set(curSlideShowImageDisplayRef.current, {
                        position: "relative",
                        top: "0%",
                        right: "105%",
                      })
                      .to(prevSlideShowImageDisplayRef.current, {
                        left: "105%",
                        duration: 3,
                      })
                      .to(curSlideShowImageDisplayRef.current, {
                        right: "0%",
                        duration: 3,
                        delay: -3,
                      });
                  }
                }}
              ></button>
            );
          })}
        </div>
        <div className={styles.slideShowImgPause}>
          <button
            className={styles.slideShowImgPauseButton}
            onClick={(event) => {
              if (isSlideShowPlaying) {
                setIsSlideShowPlaying(() => {
                  return false;
                });
              } else {
                setIsSlideShowPlaying(() => {
                  return true;
                });
                handleImageSwitch();
              }
            }}
          >
            {isSlideShowPlaying ? <Pause /> : <PlayArrow />}
          </button>
        </div>
      </div>
      <div className={styles.linkedImagesContainer}>
        <img
          src={`${dataBaseUrl}images/49a308d699cc749f458b89340ba6939e-CanesInTheMoment.jpg`}
          className={styles.linkedImage}
        />
        <img
          src={`${dataBaseUrl}images/bcbcaedb27b96aebd27f4e40db1d9111-COVID-19_WebSite.jpg`}
          className={styles.linkedImage}
        />
        <img
          src={`${dataBaseUrl}images/63f6f00f5ca434886f21e2f3a24146d0-22801_SystemwideRecruiting_WebTile.jpg`}
          className={styles.linkedImage}
        />
      </div>
      <div className={styles.middleContent}>
        <div className={styles.middleContentLeft}>
          <div className={styles.sectionLabel}>{`NEW LOCATIONS`}</div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #513`}</div>
            <div className={styles.bundleInfo}>{`321 W Sunshine St
Springfield, MO 65807`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #386`}</div>
            <div className={styles.bundleInfo}>{`13602 Francisquito Ave
Baldwin Park, CA 91706`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #531`}</div>
            <div className={styles.bundleInfo}>{`10950 Louetta Road
Houston, TX 77070`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #RCC47`}</div>
            <div className={styles.bundleInfo}>{`3275 Maple Ave
Zanesville, OH 43701`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #ELPX3`}</div>
            <div className={styles.bundleInfo}>{`1724 Marshall Rd
Fort Bliss, TX 79906`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div className={styles.bundleTitle}>{`Raising Cane's #586`}</div>
            <div className={styles.bundleInfo}>{`2200 S 1st St
Lufkin, TX 75901`}</div>
          </div>
          <div className={styles.sectionLabel}>{`COMING SOON`}</div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #538`}</div>
            <div className={styles.bundleInfov3}>{`2411 Sycamore Rd
Dekalb, IL 60115`}</div>
          </div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #PRG9`}</div>
            <div className={styles.bundleInfov3}>{`1450 Ala Moana Blvd
Suite 1160q
Honolulu, HI 96814`}</div>
          </div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #499`}</div>
            <div className={styles.bundleInfov3}>{`620 S University Ave
Little Rock, AR 72205`}</div>
          </div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #518`}</div>
            <div className={styles.bundleInfov3}>{`6312 Panama Ln
Bakersfield, CA 93313`}</div>
          </div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #515`}</div>
            <div className={styles.bundleInfov3}>{`5212 N Main St
Mishawaka, IN 46545`}</div>
          </div>
          <div className={styles.titleNinfoBundlev3}>
            <div className={styles.bundleTitlev3}>{`Raising Cane's #401`}</div>
            <div className={styles.bundleInfov3}>{`1190 S Colorado Blvd
Denver, CO 80246`}</div>
          </div>
        </div>
        <div className={styles.middleContentMiddle}>
          <div className={styles.sectionLabel}>{`NEWS`}</div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s Growth Continues with Third Tempe Restaurant`}</div>
            <div
              className={styles.bundleInfo}
            >{`Popular chicken finger brand set to open in Optimist Park NW early 2021`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s Continues San Gabriel Valley Growth with Baldwin Park Restaurant`}</div>
            <div
              className={styles.bundleInfo}
            >{`Popular chicken finger brand set to open Nov. 2`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s Avoids Layoffs as Sales Return to Pre-COVID-19`}</div>
            <div
              className={styles.bundleInfo}
            >{`(April 24, 2020) Of roughly 500 restaurants, 33 non-drive-thru locations temporarily closed.`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s employees take on a new task: sewing face masks`}</div>
            <div
              className={styles.bundleInfo}
            >{`(April 22, 2020) Employees who don’t work at drive-through locations are now focusing on making cloth face coverings to donate.`}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s Makes its Highly Anticipated Victoria Debut`}</div>
            <div
              className={styles.bundleInfo}
            >{`VICTORIA, Texas (March 9, 2020) `}</div>
          </div>
          <div className={styles.titleNinfoBundle}>
            <div
              className={styles.bundleTitle}
            >{`Raising Cane’s Chicken Fingers`}</div>
            <div className={styles.bundleInfo}>{`the Louisiana-based res`}</div>
          </div>
        </div>
        <div ref={middleContentRightRef} className={styles.middleContentRight}>
          <div className={styles.sectionLabel}>{`FACEBOOK`}</div>
          <iframe
            ref={facebookIFrameRef}
            src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRaisingCanesChickenFingers%2F&tabs=timeline&width=${
              middleContentRightRef.current
                ? `${middleContentRightRef.current.offsetWidth}`
                : `360`
            }&height=330&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
            width={
              middleContentRightRef.current
                ? `${middleContentRightRef.current.offsetWidth}`
                : `360`
            }
            height="330px"
            style={{
              border: "none",
              overflow: "hidden",
              marginTop: "0px",
              marginBottom: "1px",
              marginLeft: "1px",
              marginRight: "1px",
            }}
            scrolling="no"
            frameBorder="0"
            allowTransparency={true}
            allow="encrypted-media"
          ></iframe>
          <div
            className={styles.sectionLabel}
            style={{ position: "relative", top: "5px" }}
          >{`TWITTER`}</div>
          <div style={{ position: "relative", top: "5px" }}>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "Raising_Canes",
              }}
              options={{
                width: middleContentRightRef.current
                  ? `${middleContentRightRef.current.offsetWidth}`
                  : `360`,
                height: "333px",
              }}
              renderError={(_err) => (
                <div>{`Unable To Load Twitter Timeline`}</div>
              )}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomContentMostLeft}>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Home`}</div>
            <div className={styles.bundleInfov2}>{`Menu`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`About Us`}</div>
            <div className={styles.bundleInfov2}>{`Our Story`}</div>
            <div className={styles.bundleInfov2}>{`Letter from Founder`}</div>
            <div className={styles.bundleInfov2}>{`Our Concept`}</div>
            <div className={styles.bundleInfov2}>{`Why the Dog`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Community`}</div>
            <div className={styles.bundleInfov2}>{`Our Philosophy`}</div>
            <div
              className={styles.bundleInfov2}
            >{`Canes Active Community Involvement`}</div>
            <div
              className={styles.bundleInfov2}
            >{`Community Request System`}</div>
            <div className={styles.bundleInfov2}>{`Plush Puppy`}</div>
          </div>
        </div>
        <div className={styles.bottomContentMiddleLeft}>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Join Us`}</div>
            <div className={styles.bundleInfov2}>{`caniaccareers.com`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Location`}</div>
            <div className={styles.bundleInfov2}>{`Search`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Media`}</div>
            <div className={styles.bundleInfov2}>{`News Room`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Gift Cards & Gear`}</div>
            <div className={styles.bundleInfov2}>{`Purchase a Gift Card`}</div>
            <div className={styles.bundleInfov2}>{`Check your Balance`}</div>
            <div className={styles.bundleInfov2}>{`Cane's Gear`}</div>
            <div className={styles.bundleInfov2}>{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className={styles.bottomContentMiddleRight}>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Caniac Club`}</div>
            <div className={styles.bundleInfov2}>{`Caniac Club Sign Up`}</div>
            <div className={styles.bundleInfov2}>{`Your Account`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Secret Millionaire`}</div>
            <div className={styles.bundleInfov2}>{`The Incredible Story`}</div>
            <div className={styles.bundleInfov2}>{`Meet The People`}</div>
            <div className={styles.bundleInfov2}>{`Learn About Todd`}</div>
          </div>
          <div className={styles.titleNinfoBundlev2}>
            <div className={styles.bundleTitlev2}>{`Contact Us`}</div>
            <div className={styles.bundleInfov2}>{`Raising Cane's Gear`}</div>
            <div className={styles.bundleInfov2}>{`Terms Of Use`}</div>
            <div className={styles.bundleInfov2}>{`Privacy Policy`}</div>
            <div
              className={styles.bundleInfov2}
            >{`Do Not Sell My Personal Information`}</div>
            <div className={styles.bundleInfov2}>{`Raising Cane's Arcade`}</div>
            <div className={styles.bundleInfov2}>{`Privacy Policy`}</div>
            <div className={styles.bundleInfov2}>{`FAQ`}</div>
            <div className={styles.bundleInfov2}>{`Promotions`}</div>
          </div>
        </div>
        <div className={styles.bottomContentMostRight}>
          <div
            className={styles.bottomContentMostRightLabel}
          >{`FOLLOW US`}</div>
          <div className={styles.socialMediaIcons}>
            <img
              className={styles.clickableImage}
              src={`${dataBaseUrl}images/b48deeb5eeb3b04f49b5a69fd4611ffe-twitter.png`}
              alt={`Twitter Icon`}
            />
            <img
              className={styles.clickableImage}
              src={`${dataBaseUrl}images/23419873f3bd9d3c189af5add7eeffee-facebook.png`}
              alt={`Facebook Icon`}
            />
            <img
              className={styles.clickableImage}
              src={`${dataBaseUrl}images/65b12c15d5f5084c9100fcb5e2fd121c-youtube.png`}
              alt={`Youtube Icon`}
            />
            <img
              className={styles.clickableImage}
              src={`${dataBaseUrl}images/7e2ee6ec7e2dc3667e814c1a9931b72b-instagram.png`}
              alt={`Instagram Icon`}
            />
          </div>
          <div
            className={styles.companyTrademarkInfo}
          >{`©2020 Raising Restaurants, LLC. All rights reserved. RAISING CANE’S CHICKEN FINGERS, RAISING CANE’S, ONE LOVE, logos and related marks are trademarks of Raising Cane’s USA, LLC. All other trademarks are the property of their respective owners.`}</div>
        </div>
      </div>
      <div className={styles.footerBar}>{`RESPONDING TO COVID-19`}</div>
    </ImageBackground>
  );
};

const styles2 = StyleSheet.create({
  mainDisplay: {
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "blue",
  },
});

export default MobileFrontPage;

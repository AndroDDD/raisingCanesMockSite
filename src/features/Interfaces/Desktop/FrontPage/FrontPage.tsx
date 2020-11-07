import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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

import "./FrontPageStyles.scss";

// Declare Function Component handling app processes and views
const CharacterData: React.FC = () => {
  // Handle screen resize view updates
  const [screenHeight, setScreenHeight] = React.useState(() => {
    return Dimensions.get("window").height;
  });
  const [screenWidth, setScreenWidth] = React.useState(() => {
    return Dimensions.get("window").width;
  });

  $(window).on("resize", () => {
    setScreenHeight(() => {
      return Dimensions.get("window").height;
    });

    setScreenWidth(() => {
      return Dimensions.get("window").width;
    });
  });

  React.useEffect(() => {
    console.log("updating styles");
    setStyles(() => {
      let subMainDisplayWidth: number = 0;
      if (subMainDisplayRef) {
        console.log(`triggered footer resize`);
        console.log({
          subMainDisplayWidth: subMainDisplayRef.current.offsetWidth,
        });
        subMainDisplayWidth = subMainDisplayRef.current.offsetWidth;
      }
      return {
        ...styles,
        mainDisplaySupport: {
          ...styles.mainDisplaySupport,
          height: screenHeight,
        },
        mainContentSupport: {
          ...styles.mainContentSupport,
          height: screenHeight * 95 * 0.01 - 100,
        },
      };
    });
  }, [screenHeight]);

  // Declare stylesheet for manipulation
  const [styles, setStyles] = React.useState({
    mainDisplay: styles2.mainDisplay,
    mainDisplaySupport: {
      width: "100%",
      minWidth: "980px",
      height: screenHeight,
    },
    subMainDisplay: `subMainDisplay`,
    headerBar: `headerBar`,
    headerNavButtonContainer: `headerNavButtonContainer`,
    headerNavButtonSplit: `headerNavButtonSplit`,
    headerNavButton: `headerNavButton`,
    extendedMenuButtonDisplay: `extendedMenuButtonDisplay`,
    extendedMenuListDisplay: `extendedMenuListDisplay`,
    extendedMenuListSupport: `extendedMenuListSupport`,
    extendedMenuListItemButton: `extendedMenuListItemButton`,
    extendedMenuListItemLastButtonSupport: {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    headerOrderButton: `headerOrderButton`,
    mainContent: `mainContent`,
    mainContentSupport: {
      width: "100%",
      height: screenHeight * 95 * 0.01 - 100,
    },
    topContent: `topContent`,
    slideShow: `slideShow`,
    slideShowImageDisplay: `slideShowImageDisplay`,
    slideShowImgNav: `slideShowImgNav`,
    slideShowImgNavPrev: `slideShowImgNavPrev`,
    slideShowImgNavPrevButton: `slideShowImgNavPrevButton`,
    slideShowImgNavNext: `slideShowImgNavNext`,
    slideShowImgNavNextButton: `slideShowImgNavNextButton`,
    slideShowImgIndexIndicator: `slideShowImgIndexIndicator`,
    slideShowImgIndexIndicatorButton: `slideShowImgIndicatorButton`,
    slideShowCurImgIndexIndicatorButton: `slideShowCurImgIndexIndicatorButton`,
    slideShowImgPause: `slideShowImgPause`,
    slideShowImgPauseButton: `slideShowImgPauseButton`,
    slideShowLogoDisplay: `slideShowLogoDisplay`,
    slideShowLogoImg: `slideShowLogoImg`,
    curSlideShowImageDisplay: `curSlideShowImageDisplay`,
    curSlideShowImage: {},
    prevSlideShowImageDisplay: `prevSlideShowImageDisplay`,
    prevSlideShowImage: {},
    randomImage: `randomImage`,
    topContentBottom: `topContentBottom`,
    topContentBottomLeft: `topContentBottomLeft`,
    topContentBottomMiddle: `topContentBottomMiddle`,
    topContentBottomRight: `topContentBottomRight`,
    middleContent: `middleContent`,
    middleContentLeft: `middleContentLeft`,
    middleContentMiddle: `middleContentMiddle`,
    middleContentRight: `middleContentRight`,
    sectionLabel: `sectionLabel`,
    titleNinfoBundle: `titleNinfoBundle`,
    bundleTitle: `bundleTitle`,
    bundleInfo: `bundleInfo`,
    titleNinfoBundlev2: `titleNinfoBundlev2`,
    bundleTitlev2: `bundleTitlev2`,
    bundleInfov2: `bundleInfov2`,
    titleNinfoBundlev3: `titleNinfoBundlev3`,
    bundleTitlev3: `bundleTitlev3`,
    bundleInfov3: `bundleInfov3`,
    bottomContent: `bottomContent`,
    bottomContentMostLeft: `bottomContentMostLeft`,
    bottomContentMiddleLeft: `bottomContentMiddleLeft`,
    bottomContentMiddleRight: `bottomContentMiddleRight`,
    bottomContentMostRight: `bottomContentMostRight`,
    bottomContentMostRightLabel: `bottomContentMostRightLabel`,
    socialMediaIcons: `socialMediaIcons`,
    companyTrademarkInfo: `companyTrademarkInfo`,
    footerBar: `footerBar`,
    clickableImage: `clickableImage`,
    genericText: styles2.genericText,
  });

  // Declare variable holding random image urls
  const [randomImages, setRandomImages] = React.useState(() => {
    return [
      `${dataBaseUrl}images/5131480feb87051b5ce8df49985d1796-RestaurantRecovery_WebSiteSlider.jpg`,
      `${dataBaseUrl}images/c1baa50ec14008eff8f82a2b83626629-22801_SystemwideRecruiting_WebSlider.jpg`,
      `${dataBaseUrl}images/b44977f9e882be9451e111f7df048193-22935-Football-Web-Slider.jpg`,
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

  // Declare variable tracking if intearcting with button menu list
  const [
    isInteractingWithMenuList,
    setIsInteractingWithMenuList,
  ] = React.useState(() => {
    return false;
  });

  // Declare variable tracking which button menu list
  const [whichButtonMenuList, setWhichButtonMenuList] = React.useState(
    `aboutUs`
  );
  // Declare variable holding menu list dimensions
  const [menuListDimensions, setMenuListDimensions] = React.useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });
  // Declare variable holding mouse position when interacting with button menu list
  const [mousePositions, setMousePositons] = React.useState({ x: 0, y: 0 });

  // Declare refs for data extraction and manipulation
  let gsapTlRef = React.useRef<any>();
  let subMainDisplayRef = React.useRef<any>();
  let aboutUsMenuListRef = React.useRef<any>();
  let communityMenuListRef = React.useRef<any>();
  let giftcardsNgearMenuListRef = React.useRef<any>();
  let slideShowImageDisplayRef = React.useRef<any>();
  let curSlideShowImageRef = React.useRef<any>();
  let curSlideShowImageDisplayRef = React.useRef<any>();
  let prevSlideShowImageRef = React.useRef<any>();
  let prevSlideShowImageDisplayRef = React.useRef<any>();
  let middleContentRightRef = React.useRef<any>();

  // Declare function handling slide show image switching
  const handleImageSwitch = () => {
    setTimeout(() => {
      setSlideShowImgIteration(() => {
        return slideShowImgIteration + 1;
      });
    }, 5000);
  };

  // Declare function handling image resize
  const handleImageResize = (
    event: any,
    containerHeight: number,
    containerWidth: number
  ) => {
    let imgContainerHeight = containerHeight;
    let imgContainerWidth = containerWidth;
    let actualImageHeight = event.currentTarget.naturalHeight;
    let actualImageWidth = event.currentTarget.naturalWidth;

    if (actualImageHeight < actualImageWidth) {
      // Handle resize for landscape
      let imgHeightRatio = imgContainerHeight / actualImageHeight;
      let reconfiggedWidth = imgHeightRatio * actualImageWidth;

      if (reconfiggedWidth > imgContainerWidth) {
        let imgWidthRatio = imgContainerWidth / reconfiggedWidth;
        let reconfiggedHeight = imgWidthRatio * imgContainerHeight;
        event.currentTarget.height = reconfiggedHeight;
        event.currentTarget.width = imgContainerWidth;
        console.log({
          widthClarified: `reconfiggedWidth > imgContainerWidth`,
          imgWidthRatio,
          reconfiggedHeight,
        });
      } else {
        console.log(`reconfiggedWidth < imgContainerWidth`);
        event.currentTarget.height = imgContainerHeight;
        event.currentTarget.width = reconfiggedWidth;
      }
      console.log({
        imgResizeType: `imgResize landscape`,
        imgHeightRatio,
        reconfiggedWidth,
      });
    } else if (actualImageWidth < actualImageHeight) {
      // Handle resize for portrait
      let imgWidthRatio = imgContainerWidth / actualImageWidth;
      let reconfiggedHeight = imgWidthRatio * actualImageHeight;
      if (reconfiggedHeight > imgContainerHeight) {
        let imgHeightRatio = imgContainerHeight / reconfiggedHeight;
        let reconfiggedWidth = imgHeightRatio * imgContainerWidth;
        event.currentTarget.height = imgContainerHeight;
        event.currentTarget.width = reconfiggedWidth;
        console.log({
          heightClarified: `reconfiggedHeight > imgContainerHeight`,
          imgHeightRatio,
          reconfiggedWidth,
        });
      } else {
        event.currentTarget.height = reconfiggedHeight;
        event.currentTarget.width = imgContainerWidth;
        console.log(`reconfiggedHeight < imgContainerHeight`);
      }
      console.log({
        imgResizeType: `imgResize portrait`,
        imgWidthRatio,
        reconfiggedHeight,
      });
    }
    console.log({
      imgContainerHeight,
      imgContainerWidth,
      actualImageHeight,
      actualImageWidth,
    });
  };

  // Handle view manipulation on page scroll
  $(subMainDisplayRef.current).on("scroll", () => {
    aboutUsMenuListRef.current.style.display = "none";
    communityMenuListRef.current.style.display = "none";
    giftcardsNgearMenuListRef.current.style.display = "none";
  });

  // Handle displaying extended nav menu list
  React.useEffect(() => {
    let mousePosXBody = subMainDisplayRef.current.offsetLeft;
    let mousePosYBody = subMainDisplayRef.current.offsetTop;
    let trueMousePosX = mousePositions.x - menuListDimensions.left;
    let trueMousePosY = mousePositions.y - menuListDimensions.top;
    let clarifyMenuListDisplay = () => {
      if (whichButtonMenuList === `aboutUs`) {
        return aboutUsMenuListRef;
      } else if (whichButtonMenuList === `community`) {
        return communityMenuListRef;
      } else if (whichButtonMenuList === `giftcardsNgear`) {
        return giftcardsNgearMenuListRef;
      } else {
        return undefined;
      }
    };
    let clarifiedMenuListDisplay = clarifyMenuListDisplay();

    console.log({
      isInteractingWithMenuList,
      menuListDimensionsHeight: menuListDimensions.height,
      menuListDimensionsWidth: menuListDimensions.width,
      menuListDimensionsTop: menuListDimensions.top,
      menuListDimensionsLeft: menuListDimensions.left,
      mousePosX: mousePositions.x,
      mousePosY: mousePositions.y,
      mousePosXBody,
      mousePosYBody,
      trueMousePosX,
      trueMousePosY,
    });

    if (clarifiedMenuListDisplay) {
      if (
        trueMousePosX <= 1 ||
        trueMousePosX >= menuListDimensions.width - 1 ||
        trueMousePosY <= 1 ||
        trueMousePosY >= menuListDimensions.height - 1
      ) {
        clarifiedMenuListDisplay.current.style.display = "none";
      } else {
        clarifiedMenuListDisplay.current.style.display = "flex";
      }
    }
  }, [mousePositions]);

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
            delay: -3,
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
    <View style={[styles.mainDisplay, styles.mainDisplaySupport]}>
      <div ref={subMainDisplayRef} className={styles.subMainDisplay}>
        <div className={styles.headerBar}>
          <div className={styles.headerNavButtonContainer}>
            <div className={styles.headerNavButtonSplit}>
              <button className={styles.headerNavButton}>{`HOME`}</button>
              <button className={styles.headerNavButton}>{`LOCATIONS`}</button>
              <button className={styles.headerNavButton}>{`MENU`}</button>
              <div className={styles.extendedMenuButtonDisplay}>
                <button
                  className={styles.headerNavButton}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`aboutUs`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >{`ABOUT US`}</button>
                <div
                  ref={aboutUsMenuListRef}
                  className={styles.extendedMenuListDisplay}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`aboutUs`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >
                  <div className={styles.extendedMenuListSupport}></div>
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
                    style={styles.extendedMenuListItemLastButtonSupport}
                  >{`FAQs`}</button>
                </div>
              </div>
              <div className={styles.extendedMenuButtonDisplay}>
                <button
                  className={styles.headerNavButton}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`community`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >{`COMMUNITY`}</button>
                <div
                  ref={communityMenuListRef}
                  className={styles.extendedMenuListDisplay}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`community`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >
                  <div className={styles.extendedMenuListSupport}></div>
                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`THANK YOU HEALTHCARE WORKERS`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`COVID-19 RESPONSE`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`CANES AND YOUR COMMUNITY`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`LEMONADE DAY`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`OUR PHILOSOPHY`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`FUNDRAISER FAQ`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                    style={styles.extendedMenuListItemLastButtonSupport}
                  >{`PLUSH PUPPY`}</button>
                </div>
              </div>
              <button className={styles.headerNavButton}>{`JOIN US`}</button>
            </div>
            <div className={styles.headerNavButtonSplit}>
              <div className={styles.extendedMenuButtonDisplay}>
                <button
                  className={styles.headerNavButton}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`giftcardsNgear`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >{`GIFT CARDS & GEAR`}</button>
                <div
                  ref={giftcardsNgearMenuListRef}
                  className={styles.extendedMenuListDisplay}
                  onMouseOver={() => {
                    setWhichButtonMenuList(`giftcardsNgear`);
                  }}
                  onMouseMove={(event) => {
                    event.persist();
                    let elementHeight = event.currentTarget.offsetHeight;
                    let elementWidth = event.currentTarget.offsetWidth;
                    let elementTop = event.currentTarget.offsetTop;
                    let elementLeft = event.currentTarget.offsetLeft;
                    let mouseXextracted = event.pageX;
                    let mouseYextracted = event.pageY;

                    setMenuListDimensions(() => {
                      return {
                        height: elementHeight,
                        width: elementWidth,
                        top: elementTop,
                        left: elementLeft,
                      };
                    });
                    setMousePositons(() => {
                      return { x: mouseXextracted, y: mouseYextracted };
                    });
                  }}
                >
                  <div className={styles.extendedMenuListSupport}></div>
                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`PURCHASE A GIFT CARD`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                  >{`VIEW YOUR BALANCE`}</button>

                  <button
                    className={styles.extendedMenuListItemButton}
                    style={styles.extendedMenuListItemLastButtonSupport}
                  >{`CANES GEAR`}</button>
                </div>
              </div>
              <button
                className={styles.headerNavButton}
              >{`CANIAC CLUB`}</button>
              <button className={styles.headerNavButton}>{`CONTACT US`}</button>
            </div>
          </div>
          <button className={styles.headerOrderButton}>{`ORDER NOW`}</button>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.topContent}>
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
                      handleImageResize(
                        event,
                        imgContainerHeight,
                        imgContainerWidth
                      );
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
                      handleImageResize(
                        event,
                        imgContainerHeight,
                        imgContainerWidth
                      );
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
                                clarifiedImageIndex + 1 >
                                randomImages.length - 1
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
                        } else if (
                          curSlideShowImgIndex >=
                          randomImages.length - 1
                        ) {
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
                          delay: -3,
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
              <div className={styles.slideShowLogoDisplay}>
                <img
                  src={`${dataBaseUrl}images/4699aa8d63a0c7f285339290fa5a373a-logo_raising_cane.png`}
                  alt={`Slide Show Logo`}
                  width={`100%`}
                  height={`100%`}
                  className={styles.slideShowLogoImg}
                  onLoad={(event) => {
                    handleImageResize(event, 200, 200);
                  }}
                />
              </div>
            </div>
            <div className={styles.topContentBottom}>
              <div className={styles.topContentBottomLeft}>
                <img
                  className={styles.clickableImage}
                  src={`${dataBaseUrl}images/49a308d699cc749f458b89340ba6939e-CanesInTheMoment.jpg`}
                  alt={`In The Moment`}
                  width={`100%`}
                  height={`100%`}
                  onLoad={(event) => {
                    let parentElHeight =
                      event.currentTarget.parentElement?.offsetHeight;
                    let parentElWidth =
                      event.currentTarget.parentElement?.offsetWidth;
                    console.log({
                      fromtopbottomheight: parentElHeight,
                      fromtopbottomwidth: parentElWidth,
                    });
                    handleImageResize(
                      event,
                      parentElHeight ? parentElHeight : 250,
                      parentElWidth ? parentElWidth : 250
                    );
                  }}
                />
              </div>
              <div className={styles.topContentBottomMiddle}>
                <img
                  className={styles.clickableImage}
                  src={`${dataBaseUrl}images/bcbcaedb27b96aebd27f4e40db1d9111-COVID-19_WebSite.jpg`}
                  alt={`Resonding To Covid-19`}
                  width={`100%`}
                  height={`100%`}
                  onLoad={(event) => {
                    let parentElHeight =
                      event.currentTarget.parentElement?.offsetHeight;
                    let parentElWidth =
                      event.currentTarget.parentElement?.offsetWidth;
                    console.log({
                      fromtopbottomheight: parentElHeight,
                      fromtopbottomwidth: parentElWidth,
                    });
                    handleImageResize(
                      event,
                      parentElHeight ? parentElHeight : 250,
                      parentElWidth ? parentElWidth : 250
                    );
                  }}
                />
              </div>
              <div className={styles.topContentBottomRight}>
                <img
                  className={styles.clickableImage}
                  src={`${dataBaseUrl}images/63f6f00f5ca434886f21e2f3a24146d0-22801_SystemwideRecruiting_WebTile.jpg`}
                  alt={`Raising Canes Recruitment`}
                  width={`100%`}
                  height={`100%`}
                  onLoad={(event) => {
                    let parentElHeight =
                      event.currentTarget.parentElement?.offsetHeight;
                    let parentElWidth =
                      event.currentTarget.parentElement?.offsetWidth;
                    console.log({
                      fromtopbottomheight: parentElHeight,
                      fromtopbottomwidth: parentElWidth,
                    });
                    handleImageResize(
                      event,
                      parentElHeight ? parentElHeight : 250,
                      parentElWidth ? parentElWidth : 250
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.middleContent}>
            <div className={styles.middleContentLeft}>
              <div className={styles.sectionLabel}>{`NEW LOCATIONS`}</div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #513`}</div>
                <div className={styles.bundleInfo}>{`321 W Sunshine St
Springfield, MO 65807`}</div>
              </div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #386`}</div>
                <div className={styles.bundleInfo}>{`13602 Francisquito Ave
Baldwin Park, CA 91706`}</div>
              </div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #531`}</div>
                <div className={styles.bundleInfo}>{`10950 Louetta Road
Houston, TX 77070`}</div>
              </div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #RCC47`}</div>
                <div className={styles.bundleInfo}>{`3275 Maple Ave
Zanesville, OH 43701`}</div>
              </div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #ELPX3`}</div>
                <div className={styles.bundleInfo}>{`1724 Marshall Rd
Fort Bliss, TX 79906`}</div>
              </div>
              <div className={styles.titleNinfoBundle}>
                <div
                  className={styles.bundleTitle}
                >{`Raising Cane's #586`}</div>
                <div className={styles.bundleInfo}>{`2200 S 1st St
Lufkin, TX 75901`}</div>
              </div>
              <div className={styles.sectionLabel}>{`COMING SOON`}</div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #538`}</div>
                <div className={styles.bundleInfov3}>{`2411 Sycamore Rd
Dekalb, IL 60115`}</div>
              </div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #PRG9`}</div>
                <div className={styles.bundleInfov3}>{`1450 Ala Moana Blvd
Suite 1160q
Honolulu, HI 96814`}</div>
              </div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #499`}</div>
                <div className={styles.bundleInfov3}>{`620 S University Ave
Little Rock, AR 72205`}</div>
              </div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #518`}</div>
                <div className={styles.bundleInfov3}>{`6312 Panama Ln
Bakersfield, CA 93313`}</div>
              </div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #515`}</div>
                <div className={styles.bundleInfov3}>{`5212 N Main St
Mishawaka, IN 46545`}</div>
              </div>
              <div className={styles.titleNinfoBundlev3}>
                <div
                  className={styles.bundleTitlev3}
                >{`Raising Cane's #401`}</div>
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
                <div
                  className={styles.bundleInfo}
                >{`the Louisiana-based res`}</div>
              </div>
            </div>
            <div
              ref={middleContentRightRef}
              className={styles.middleContentRight}
            >
              <div className={styles.sectionLabel}>{`FACEBOOK`}</div>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRaisingCanesChickenFingers%2F&tabs=timeline&width=${
                  middleContentRightRef.current
                    ? `${middleContentRightRef.current.offsetWidth}`
                    : `360`
                }&height=220&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width={
                  middleContentRightRef.current
                    ? `${middleContentRightRef.current.offsetWidth}`
                    : `360`
                }
                height="220px"
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
                    height: "220px",
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
                <div
                  className={styles.bundleInfov2}
                >{`Letter from Founder`}</div>
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
                <div
                  className={styles.bundleTitlev2}
                >{`Gift Cards & Gear`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Purchase a Gift Card`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Check your Balance`}</div>
                <div className={styles.bundleInfov2}>{`Cane's Gear`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className={styles.bottomContentMiddleRight}>
              <div className={styles.titleNinfoBundlev2}>
                <div className={styles.bundleTitlev2}>{`Caniac Club`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Caniac Club Sign Up`}</div>
                <div className={styles.bundleInfov2}>{`Your Account`}</div>
              </div>
              <div className={styles.titleNinfoBundlev2}>
                <div
                  className={styles.bundleTitlev2}
                >{`Secret Millionaire`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`The Incredible Story`}</div>
                <div className={styles.bundleInfov2}>{`Meet The People`}</div>
                <div className={styles.bundleInfov2}>{`Learn About Todd`}</div>
              </div>
              <div className={styles.titleNinfoBundlev2}>
                <div className={styles.bundleTitlev2}>{`Contact Us`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Raising Cane's Gear`}</div>
                <div className={styles.bundleInfov2}>{`Terms Of Use`}</div>
                <div className={styles.bundleInfov2}>{`Privacy Policy`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Do Not Sell My Personal Information`}</div>
                <div
                  className={styles.bundleInfov2}
                >{`Raising Cane's Arcade`}</div>
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
        </div>
        <div
          className={styles.footerBar}
          style={{
            width: subMainDisplayRef.current
              ? `${subMainDisplayRef.current.offsetWidth - 20}px`
              : `100%`,
            height: "50px",
          }}
        >{`Responding to COVID-19`}</div>
      </div>
    </View>
  );
};

// Declare stylesheet for react native components
const styles2 = StyleSheet.create({
  mainDisplay: {
    paddingTop: "10px",
    paddingBottom: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 15, 85, 1)",
    backgroundColor: "rgba(112, 128, 144, 1)",
    overflow: "hidden",
  },
  genericText: { color: "rgba(0, 15, 85, 1)", textAlign: "center" },
});

export default CharacterData;

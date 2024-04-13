import React,{ FunctionComponent } from "react";
import ReactDOM from "react-dom";
import styles from "./App.module.css";
import  '../src/components/login ';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

const App= () => {
  return (
    <div width="50px" height="50px" background-color="green" className={styles.App2}>
      <div className={styles.App2Child} />
      <div className={styles.App2Item} />
      <img id="wheat"
        className={styles.App2Inner}
        alt=""
        src="/Wheat.jpg"
        style={{width:"200px",height:"150px"}}
      />
      <Router>
      <Switch>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
      <div className={styles.cropcareconnect} >CropCareConnect</div>
      <div className={styles.rentalServices}>
        <p className={styles.rental}>Rental</p>
        <p className={styles.rental}>Services</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.App2Child2} />
      <div className={styles.home}>
        <p className={styles.rental}>Home</p>
      </div>
      <div className={styles.library}>Library</div>
      <div className={styles.news}>
        <p className={styles.rental}>News</p>
      </div>
      <div className={styles.contactUs}>
        <p className={styles.rental}>Contact us</p>
      </div>
      <div className={styles.component2}>
        <img className={styles.vectorIcon} alt="" src="/Wheat.svg" />
        <div className={styles.loginRegister}>Login | Register</div>
        <div className={styles.component2Child} />
        <i className={styles.yourCart}>Your cart</i>
      </div>
      <div className={styles.component1}>
        <div className={styles.component1Child} />
        <div className={styles.component1Item} />
        <div className={styles.search}>search</div>
        <div className={styles.searchProduct}>search product</div>
        <div className={styles.allCategories}>All categories</div>
        <img className={styles.component1Inner} alt="" src="/polygon-1.svg" />
        <div className={styles.lineDiv} />
      </div>
      <div  className={styles.component3}>
        <i className={styles.introducingTheNewContainer}>
          <p className={styles.introducingTheNew}>{`Pesticides `}</p>
          <p className={styles.introducingTheNew}>Related to Wheat</p>
          <p className={styles.rental}>&nbsp;</p>
          <p className={styles.rental}>&nbsp;</p>
          <p className={styles.rental}>&nbsp;</p>
        </i>
        <i className={styles.introducingTheNewContainer1}>
          <p className={styles.rental}>{`Introducing the New `}</p>
          <p className={styles.blankLine3}>&nbsp;</p>
        </i>
        <i className={styles.unmatchedPerformanceInContainer}>
          <p className={styles.rental}>Recommended shops for</p>
          <p className={styles.rental}>you</p>
        </i>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <i className={styles.shopNow}>Shop Now</i>
        </div>
      </div>
      <i className={styles.pesticidesRelatedToContainer}>
        <p className={styles.rental}>{`Pesticides related to `}</p>
        <p className={styles.rental}>Wheat</p>
        <p className={styles.rental}>{` `}</p>
        <p className={styles.blankLine3}>&nbsp;</p>
      </i>
      <i className={styles.popularTools}>Popular Tools</i>
      <i className={styles.crops}>Crops</i>
      <div className={styles.component9}>
        <i className={styles.laptops}>Tractor</i>
        <i className={styles.smartphones}> Shovel</i>
        <i className={styles.cameras} />
        <i className={styles.headphones}>Headphones</i>
        <i className={styles.smartWatches}>Smart watches</i>
        <i className={styles.tablets}>Tablets</i>
      </div>
      <i className={styles.wheat1}>Wheat</i>
      <i className={styles.tobacco}>Tobacco</i>
      <i className={styles.maize}>Maize</i>
      <i className={styles.paddy}>Paddy</i>
      <img className={styles.component5Icon} alt="" src="/component-5@2x.png" />
      <img className={styles.component4Icon} alt="" src="/component-4.svg" />
      <div className={styles.freeShippingParent}>
        <div className={styles.freeShipping}>
          <span className={styles.freeShipping1}>Free Shipping</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <img
          className={styles.freeShippingIcon}
          alt=""
          src="/free-shipping@2x.png"
        />
      </div>
      <div className={styles.component8}>
        <div className={styles.paymentMethod}>{`Payment method `}</div>
        <img className={styles.keepassIcon} alt="" src="/keepass@2x.png" />
      </div>
      <div className={styles.component}>
        <div className={styles.onlineSupport}>{`Online support `}</div>
        <img
          className={styles.onlineSupportIcon}
          alt=""
          src="/online-support@2x.png"
        />
      </div>
      <div className={styles.component6}>
        <div className={styles.fastDelivery}>Fast Delivery</div>
        <img
          className={styles.deliveryTimeIcon}
          alt=""
          src="/delivery-time@2x.png"
        />
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10@2x.png" />
      <img
        className={styles.App2Child3}
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className={styles.App2Child4}
        alt=""
        src="/rectangle-12@2x.png"
      />
      <img
        className={styles.App2Child5}
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
        className={styles.App2Child6}
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className={styles.App2Child7}
        alt=""
        src="/rectangle-18@2x.png"
      />
      <img
        className={styles.App2Child8}
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className={styles.App2Child9}
        alt=""
        src="/rectangle-23@2x.png"
      />
      <img
        className={styles.App2Child10}
        alt=""
        src="/rectangle-19@2x.png"
      />
      <img className={styles.groupIcon} alt="" src="/group-4.svg" />
      <img className={styles.App2Child11} alt="" src="/group-5.svg" />
      <img className={styles.App2Child12} alt="" src="/group-8.svg" />
      <img className={styles.App2Child13} alt="" src="/group-8.svg" />
      <i className={styles.views}>
        <span>(</span>
        <span className={styles.views1}>4 views</span>
        <span className={styles.span1}>)</span>
      </i>
      <i className={styles.views2}>
        <span>(</span>
        <span className={styles.views1}>4 views</span>
        <span className={styles.span1}>)</span>
      </i>
      <i className={styles.views4}>
        <span>(</span>
        <span className={styles.views1}>4 views</span>
        <span className={styles.span1}>)</span>
      </i>
      <i className={styles.views6}>
        <span>(</span>
        <span className={styles.views1}>4 views</span>
        <span className={styles.span1}>)</span>
      </i>
      <div className={styles.product}>Product</div>
      <div className={styles.component10}>
        <div className={styles.smartphones1}>
          <span className={styles.freeShipping1}>{`     `}</span>
          <span className={styles.tractor}>Tractor</span>
        </div>
        <div className={styles.headphones1}>Seed machine</div>
        <div className={styles.watches}>Sickle</div>
        <div className={styles.tablets1}> Seed machine</div>
        <div className={styles.camera}>
          <span className={styles.freeShipping1}>{`      `}</span>
          <span className={styles.shovel}>Shovel</span>
        </div>
      </div>
      <div className={styles.component11}>
        <div className={styles.faq}>Faq</div>
        <div className={styles.shipping}>
          <p className={styles.rental}>Shipping</p>
        </div>
      </div>
      <div className={styles.moneyGuaranteeParent}>
        <div className={styles.moneyGuarantee}>Money guarantee</div>
        <img className={styles.walletIcon} alt="" src="/wallet@2x.png" />
      </div>
      <div className={styles.contactUsAboutContainer}>
        <p className={styles.rental}>Contact Us</p>
        <p className={styles.aboutUs}>About Us</p>
      </div>
      <div className={styles.help}>Help</div>
      <div className={styles.about}>About</div>
      <i className={styles.seedMachine}>Seed machine</i>
      <i className={styles.sickle}>Sickle</i>
      <i className={styles.harrows}>Harrows</i>
      <i className={styles.plough}>Plough</i>
      <img
        className={styles.App2Child14}
        alt=""
        src="/rectangle-26@2x.png"
      />
      <div className={styles.seedMachine1}>Seed machine</div>
      <div className={styles.sickle1}>Sickle</div>
      <div className={styles.shovel1}>
        <span className={styles.freeShipping1}>{`      `}</span>
        <span className={styles.shovel}>Shovel</span>
      </div>
      <div className={styles.tractor1}>
        <span className={styles.freeShipping1}>{`     `}</span>
        <span className={styles.tractor2}>Tractor</span>
      </div>
    </div>
  );
};

export default App;

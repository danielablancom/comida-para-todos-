import React, { Fragment } from "react";
//import facebook from "../../icons/facebook.png";
import { Icon } from "@iconify/react";


import facebookIcon from '@iconify/icons-cib/facebook';



import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";

function LinksRRSS() {
  return (
    <Fragment>
       <div className="boxContainerRRSS">
      <div className="containerRRSS">
        <a href="https://www.facebook.com/">

        <Icon icon={facebookIcon} color="#828282" />

          

        </a>
        </div>
        <div className="containerRRSS">
        <a href="https://www.instagram.com/">
          <Icon icon={instagramWithCircle} color="#828282" />
        </a>
        </div>

        <div className="containerRRSS">
        <a href="https://www.twitter.com/">
          <Icon icon={twitterWithCircle} color="#828282" />
        </a>
        </div>
        </div>
    </Fragment>
  );
}
export default LinksRRSS;

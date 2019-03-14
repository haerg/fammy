import React, { Component } from 'react';
import './campaignTip.css';
import youtube from './youtube.svg';

class CampaignTip extends Component {
 render = () => {

  return (
      <div className="campaign__tips">

       <div className="campaign__tabs__title_without_broder">How music videos earn
        money?
       </div>

       <div className="campaign__information">
        <div className="campaign__information__icon">
         <img className="campaign__information__icon-original" src={youtube} alt=""/>
        </div>
        <div className="campaign__information__title">
         YouTube Pay Rate Per View
        </div>
        <div className="campaign__information__sub-title">
         On average, you can earn $.80 according to 1,000 perspectives monetized by banner
         advertisements,
         or, $5-$8 consistent with 1,000 views on a video monetized by means of rollout
         commercials.
         So, on a video with 1,000,000 views monetized by rollout ads, you can earn 5,000-8,000.
        </div>
       </div>

      </div>
  );

 };
}

export default CampaignTip;

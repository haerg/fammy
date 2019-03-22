import React, { Component } from 'react';
import './campaignTip.css';
import youtube from './youtube.svg';
import Typography from '@material-ui/core/Typography';

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
            <Typography component="p" variant="h6">
                YouTube Pay Rate Per View
            </Typography>
            <Typography component="p" variant="subtitle1">
                On average, video can earn $0.80 according to 1,000 perspectives monetized by banner
                advertisements,
                or $5-$8 consistent with 1,000 views on a video monetized by means of rollout
                commercials.
                So, on a video with 1,000,000 views monetized by rollout ads, video can earn $5,000-$8,000.
            </Typography>
       </div>

      </div>
  );

 };
}

export default CampaignTip;

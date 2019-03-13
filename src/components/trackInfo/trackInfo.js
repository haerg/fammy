import React, { Component } from 'react';
import './trackInfo.css';
import Header from '../header/header';
import { PLAYLIST } from '../../data.constants';
import CampaignTip from './campaignTip/campaignTip';
import CampaignComments from './campaignComments/campaignComments';
import CampaignMedia from './campaignMedia/campaignMedia';
import CampaignDetails from './campaignDetails/campaignDetails';

class TrackInfo extends Component {

 constructor({ match }) {
  super();

  const element = PLAYLIST.find(e => e.id === +match.params.id);
  this.state = {
   element,
   comments: element.comments,
  };
 }

 render = () => {

  return (
      <div className="track-info-container">

       <Header/>

       <div className="track-info-container__body">
        <div className="track-info-container__first">
         <CampaignMedia media={this.state.element.media}/>

         <CampaignDetails element={this.state.element}/>
        </div>

        <div className="track-info-container__second">

         <div className="track-info-container__campaign_content">
          <div className="track-info-container__tabs">
           <div className="track-info-container__tabs__title">
            Comments({this.state.comments.length})
           </div>
           <div className="track-info-container__tabs__body">
            <CampaignComments comments={this.state.comments}/>
           </div>
          </div>
         </div>

         <CampaignTip/>

        </div>

       </div>
      </div>
  );

 };
}

export default TrackInfo;

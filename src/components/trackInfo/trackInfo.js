import React, { Component } from 'react';
import './trackInfo.css';
import Header from '../header/header';
import { PLAYLIST } from '../../data.constants';
import CampaignTip from './campaignTip/campaignTip';
import CampaignComments from './campaignComments/campaignComments';
import CampaignMedia from './campaignMedia/campaignMedia';
import CampaignDetails from './campaignDetails/campaignDetails';
import CompaignSlider from './compaignSlider/compaignSlider'
import CampaignChanges from './compaignChanges/compaignChanges'
import MainFooter from '../MainFooter/MainFooter';


import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../../App";

class TrackInfo extends Component {

 constructor({ match }) {
  super();

  const element = PLAYLIST.find(e => e.id === +match.params.id);
  this.state = {
   element,
   comments: element.comments,
   updates: element.updates,
  };
 }

 myCallback = (dataFromChild) => {
   switch (dataFromChild) {
    case 0:
     this.setState({isShowStory: true, isShowChanges: false, isShowComments: false});
     break
    case 1:
     this.setState({isShowStory: false, isShowChanges: true, isShowComments: false});
     break
    case 2:
     this.setState({isShowStory: false, isShowChanges: false, isShowComments: true});
     break
    default:
     break
   }
 }

 render = () => {

  const isShowComments = this.state.isShowComments;
  const isShowChanges = this.state.isShowChanges;
  const isShowStory = this.state.isShowStory;

  let componentUnderSlider;

  if (isShowComments) {
   componentUnderSlider = <CampaignComments comments={this.state.comments}/>
  } else if (isShowChanges) {
   componentUnderSlider = <CampaignChanges updates={this.state.updates}/>
  } else if (isShowStory) {
   componentUnderSlider = <CampaignComments comments={this.state.comments}/>
  } else {
   componentUnderSlider = <CampaignComments comments={this.state.comments}/>
  }

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
            <CompaignSlider callbackFromParent={this.myCallback}/>
           </div>
           <div className="track-info-container__tabs__body">
           </div>
           {componentUnderSlider}
          </div>
         </div>
         <CampaignTip/>
        </div>

       </div>
       <MainFooter/>
      </div>
  );

 };
}

export default TrackInfo;
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
import CampaignStory from './compaignStory/compaignStory'
import MainFooter from '../MainFooter/MainFooter';
import TrackInfoPlayer from '../trackInfo/trackInfoPlayer/trackInfoPlayer';
import FammyPlayer from '../../components/fammyTop/fammyPlayer/fammyPlayer';


import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import App from "../../App";
// import FammyPlayer from "../fammyTop/fammyTop";

class TrackInfo extends Component {

 constructor({ match }) {
  super();

  const element = PLAYLIST.find(e => e.id === +match.params.id);

  if (!element.audio) {
   element.audio = new Audio(element.audioUrl);
   element.audio.onended = this.goNextTrack;
  }

  this.state = {
   element,
   currentTrack: element,
   comments: element.comments,
   updates: element.updates,
   story: element.story,
  };
 }

 playTrack = (item) => {
  if (this.state.currentTrack && this.state.currentTrack.id !== item.id) {
   const prevItem = PLAYLIST.find(i => i.id === this.state.currentTrack.id);
   this.pause(prevItem);
  }

  if (item.audio.paused) {
   this.play(item);
  } else {
   this.pause(item);
  }
  this.setState({ currentTrack: item });
 };

 pauseTrack = () => {
  this.playTrack(this.state.currentTrack);
 };


 play = (item) => {
  item.isPlaying = true;
  item.audio.play();
 };

 pause = (item) => {
  item.isPlaying = false;
  item.audio.pause();
 };


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
   componentUnderSlider = <CampaignStory story={this.state.story}/>
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
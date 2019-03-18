import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './campaignDetails.css';
import { withStyles } from '@material-ui/core';
import facebook from './facebook-logo.svg';
import twitter from './twitter-logo-on-black-background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PLAYLIST} from "../../../data.constants";
import TrackInfoPlayer from '../../trackInfo/trackInfoPlayer/trackInfoPlayer';

const styles = theme => ({
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
 },
 favoriteIcon: {
  margin: '4px',
 },
 normalLabel: {
  textTransform: 'none',
 },
 button: {
  marginTop: 10,
 },
 leftIcon: {
  marginRight: theme.spacing.unit,
 },
 rightIcon: {
  marginLeft: theme.spacing.unit,
 },
 iconSmall: {
  fontSize: 20,
 },
 icon: {
  margin: theme.spacing.unit * 2,
 },
 btnIcon: {
  marginTop: 10,
 },
});

class CampaignDetails extends Component {

 constructor({ element }) {
  super();

  if (!element.audio) {
   element.audio = new Audio(element.audioUrl);
   element.audio.onended = this.goNextTrack;
  }

  this.state = {
   element,
   currentTrack: element,
   comments: element.comments,
   updates: element.updates,
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

 render = () => {
  const { classes } = this.props;
  const funded = (this.state.element.info.moneyCurrent / this.state.element.info.moneyNeeded *
      100).toFixed(0);

  return (
      <div className="campaign-details">
       <div className="campaign-details__title">Campaign</div>

       <div className="campaign-details__track">
        <div className="campaign-details__track__avatar">
         <img alt="avatar" src={this.state.element.logoUrl}/>
        </div>
        <div className=" campaign-details__track__song">
         <div
             className=" campaign-details__track__song__title">{this.state.element.track}</div>
         <div className=" campaign-details__track__album">{this.state.element.artist}</div>
        </div>
       </div>

       <div className=" campaign-details__owner-container">
        <div className=" campaign-details__owner-container__title">Project owner</div>
        <div className=" campaign-details__owner">
         <div className=" campaign-details__owner__avatar">
          <img alt=" avatar"
               src="
               https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"/>
         </div>
         <div className="campaign-details__owner__data">
          <div className="campaign-details__owner__name">
           {this.state.element.author.name}
          </div>
          <div className="campaign-details__owner__location">
           {this.state.element.author.location}
          </div>
         </div>
        </div>
       </div>

       <div className="campaign-details__progress">
        <div className="campaign-details__progress__funded">
         <span className="campaign-details__progress__main">{funded}%</span>
         <span className="campaign-details__progress__details">Funded</span>
        </div>
        <div className="campaign-details__progress__backers">
            <span
                className="campaign-details__progress__main">{this.state.element.info.backers}</span>
         <span className="campaign-details__progress__details">Backers</span>
        </div>
        <div className="campaign-details__progress__days-left">
            <span
                className="campaign-details__progress__main">{this.state.element.info.daysLeft}</span>
         <span className="campaign-details__progress__details">Days left</span>
        </div>

       </div>

       <TrackInfoPlayer
           item={this.state.currentTrack}
           playTrack={this.playTrack}
           pauseTrack={this.pauseTrack}
       />

       <div className="campaign-details__back-song-btn">Back this song</div>

       <div className="campaign-details__share">

        <div className="campaign-details__share_fav">
         <Button variant="text" size="small" classes={{
          root: classes.button,
          label: classes.normalLabel,
         }}>
          <FontAwesomeIcon icon="heart" size="lg" style={{
           marginRight: '4px',
          }}/>
          Add to favorites
         </Button>
        </div>

        <div className="campaign-details__share_link">
         <Button variant="text" size="small" classes={{
          root: classes.btnIcon,
          label: classes.normalLabel,
         }}>
          <img className="campaign-details__share_image" src={facebook} alt=""/>
         </Button>
         <Button variant="text" size="small" classes={{
          root: classes.btnIcon,
          label: classes.normalLabel,
         }}>
          <img className="campaign-details__share_image" src={twitter} alt=""/>
         </Button>
         <Button variant="text" size="small" classes={{
          root: classes.btnIcon,
          label: classes.normalLabel,
         }}>
          <FontAwesomeIcon icon="envelope" size="lg"/>
         </Button>

         <Button variant="text" size="small" classes={{
          root: classes.btnIcon,
          label: classes.normalLabel,
         }}>
          <FontAwesomeIcon icon="link" size="lg"/>
         </Button>
        </div>

       </div>

      </div>
  );

 };
}

export default withStyles(styles)(CampaignDetails);

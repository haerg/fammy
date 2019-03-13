import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './trackInfo.css';
import Header from '../header/header';
import { PLAYLIST } from '../../data.constants';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import StarBorder from '@material-ui/icons/StarBorder';
import facebook from '../trackInfo/facebook-logo.svg';
import twitter from '../trackInfo/twitter-logo-on-black-background.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import TrackInfoTip from './trackInfoTip/trackInfoTip';
import CampaignComments from './campaignComments/campaignComments';
import CampaignMedia from './campaignMedia/campaignMedia';

const styles = theme => ({
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
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
  const { classes } = this.props;

  const funded = (this.state.element.info.moneyCurrent / this.state.element.info.moneyNeeded *
      100).toFixed(0);

  return (
      <div className="track-info-container">

       <Header/>

       <div className="track-info-container__body">
        <div className="track-info-container__first">
         <CampaignMedia media={this.state.element.media}/>

         <div className="track-info-container__campaign">
          <div className="track-info-container__campaign__title">Campaign</div>

          <div className="track-info-container__track">
           <div className="track-info-container__track__avatar">
            <img alt="avatar" src={this.state.element.logoUrl}/>
           </div>
           <div className=" track-info-container__track__song">
            <div
                className=" track-info-container__track__song__title">{this.state.element.track}</div>
            <div className=" track-info-container__track__album">{this.state.element.artist}</div>
           </div>
          </div>

          <div className=" track-info-container__owner-container">
           <div className=" track-info-container__owner-container__title">Project owner</div>
           <div className=" track-info-container__owner">
            <div className=" track-info-container__owner__avatar">
             <img alt=" avatar"
                  src="
               https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"/>
            </div>
            <div className="track-info-container__owner__data">
             <div
                 className="track-info-container__owner__name">{this.state.element.author.name}</div>
             <div
                 className="track-info-container__owner__location">{this.state.element.author.location}</div>
            </div>
           </div>
          </div>

          <div className="track-info-container__progress">
           <div className="track-info-container__progress__funded">
            <span className="track-info-container__progress__main">{funded}%</span>
            <span className="track-info-container__progress__details">Funded</span>
           </div>
           <div className="track-info-container__progress__backers">
            <span
                className="track-info-container__progress__main">{this.state.element.info.backers}</span>
            <span className="track-info-container__progress__details">Backers</span>
           </div>
           <div className="track-info-container__progress__days-left">
            <span
                className="track-info-container__progress__main">{this.state.element.info.daysLeft}</span>
            <span className="track-info-container__progress__details">Days left</span>
           </div>
          </div>

          <div className="track-info-container__back-song-btn">Back this song</div>

          <div className="track-info-container__share">

           <div className="track-info-container__share_fav">

            <Button variant="text" size="small" classes={{
             root: classes.button,
             label: classes.normalLabel,
            }}>
             <StarBorder className={classNames(classes.leftIcon, classes.iconSmall)}/>
             Add to favorites
            </Button>

           </div>

           <div className="track-info-container__share_link">

            <Button variant="text" size="small" classes={{
             root: classes.btnIcon,
             label: classes.normalLabel,
            }}>
             <img className="track-info-container__share_image" src={facebook} alt=""/>

            </Button>

            <Button variant="text" size="small" classes={{
             root: classes.btnIcon,
             label: classes.normalLabel,
            }}>

             <img className="track-info-container__share_image" src={twitter} alt=""/>

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

         <TrackInfoTip/>

        </div>

       </div>
      </div>
  );

 };
}

export default withStyles(styles)(TrackInfo);

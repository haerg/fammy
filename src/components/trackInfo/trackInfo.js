import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './trackInfo.css';
import Logo from '../logo/logo';
import { PLAYLIST } from '../../data.constants';
import { withStyles } from '@material-ui/core';

const styles = {
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
};

class TrackInfo extends Component {

 constructor({ match }) {
  super();

  const element = PLAYLIST.find(e => e.id === +match.params.id);
  this.state = {
   element,
   symbolsLeft: 500,
   newComment: '',
   comments: element.comments,
  };
 }

 handleChange = (event) => {
  this.setState({ symbolsLeft: 500 - event.target.value.length, newComment: event.target.value });
 };

 postComment = () => {
  this.setState({
   comments: this.state.comments.concat({
    text: this.state.newComment,
    user: {
     avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
     date: new Date().getTime(),
     name: 'Alex Mood',
    },
   }),
   newComment: '',
  });
 };

 formatDate(param) {
  const date = new Date(param);
  var dd = date.getDate();
  var mm = date.getMonth() + 1;

  var yyyy = date.getFullYear();
  if (dd < 10) {
   dd = '0' + dd;
  }
  if (mm < 10) {
   mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
 }

 render = () => {
  const { classes } = this.props;

  const funded = (this.state.element.info.moneyCurrent / this.state.element.info.moneyNeeded *
      100).toFixed(0);

  const comments = this.state.comments.map((item, index) =>
      <div className="track-info-container__comment" key={index}>
       <div className="track-info-container__comment__avatar">
        <img src={item.user.avatarUrl}/>
       </div>
       <div className="track-info-container__comment__data">
        <div className="track-info-container__comment__header">
         <div className="track-info-container__comment__header__name">{item.user.name}</div>
         <div className="track-info-container__comment__header__date">{this.formatDate(
             item.user.date)}</div>
        </div>
        <div className="track-info-container__comment__text">{item.text}</div>
       </div>
      </div>,
  );
  return (
      <div className="track-info-container">

       <div className="track-info-container__header">
        <Logo/>
       </div>

       <div className="track-info-container__body">
        <div className="track-info-container__first">
         <div className="track-info-container__video">
          Images
         </div>

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
            <span>{funded}%</span>
            <span className="track-info-container__progress__details">Funded</span>
           </div>
           <div className="track-info-container__progress__backers">
            <span>{this.state.element.info.backers}</span>
            <span className="track-info-container__progress__details">Backers</span>
           </div>
           <div className="track-info-container__progress__days-left">
            <span>{this.state.element.info.daysLeft}</span>
            <span className="track-info-container__progress__details">Days left</span>
           </div>
          </div>

          <div className="track-info-container__back-song-btn">Back this song</div>

         </div>
        </div>

        <div className="track-info-container__second">
         <div className="track-info-container__tabs">
          <div className="track-info-container__tabs__title">Comments(30)</div>
          <div className="track-info-container__tabs__body">

           <div className="track-info-container__comments-box">
            <div>
             <textarea maxLength="500" placeholder="Leave your comment here" rows="3"
                       onChange={this.handleChange} value={this.state.newComment}></textarea>
            </div>
            <div className="track-info-container__comments-box__actions">
             <div className="track-info-container__comments-box__actions__limit">
              <span>{this.state.symbolsLeft}</span>
              <span>&nbsp;of&nbsp;</span>
              <span>500</span>
             </div>
             <div>
              <Button variant="text"
                      onClick={this.postComment}
                      classes={{
                       root: classes.root,
                       label: classes.normalLabel,
                      }}>
               Post a comment
              </Button>
             </div>
            </div>
           </div>

           <div className="track-info-container__comments">
            {comments}
           </div>

          </div>
         </div>
        </div>

       </div>

      </div>
  );

 };
}

export default withStyles(styles)(TrackInfo);

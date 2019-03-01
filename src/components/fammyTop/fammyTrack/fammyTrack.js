import React, { Component } from 'react';
import {
 withRouter,
} from 'react-router-dom';
import './fammyTrack.css';
import playBtn from '../images/play-button.svg';
import pauseBtn from '../images/pause-button.svg';
import { func, object } from 'prop-types';

class FammyTrack extends Component {

 playTrack = () => {
  this.props.playTrack(this.props.item);
 };

 backTrack = (event) => {
  event.preventDefault();
  event.stopPropagation();
  alert('smile');
 };

 detailsTrack = (event) => {
  event.preventDefault();
  event.stopPropagation();
  this.props.history.push(`/tracks/${this.props.item.id}`);
 };

 static propTypes = {
  item: object.isRequired,
  playTrack: func.isRequired,
 };

 render() {
  const styles = {
   width: `${this.props.item.info.moneyCurrent / this.props.item.info.moneyNeeded * 100}%`,
  };
  return (
      <div
          className={`fammy-top__chart__track ${this.props.item.isPlaying ? 'current' : ''}`}
          onClick={this.playTrack}>
       <div className="fammy-top__chart__track__id">
        <div className="fammy-top__chart__track__number">{this.props.item.id}</div>
        <div className="fammy-top__chart__track__play"><img src={playBtn} alt=""/></div>
        <div className="fammy-top__chart__track__pause"><img src={pauseBtn} alt=""/></div>
       </div>
       <div className="fammy-top__chart__track__img">
        <img src={this.props.item.logoUrl} alt=""/>
       </div>
       <div className="fammy-top__chart__track__info">
        <div className="fammy-top__chart__track__title">
         <a href="">{this.props.item.track}</a>
        </div>
        <div className="fammy-top__chart__track__artist">
         <a href="">{this.props.item.artist}</a>
        </div>
       </div>

       <div className="fammy-top__chart__track__progress">
        <div className="fammy-top__chart__track__progress__details">
         <div className="fammy-top__chart__track__progress__details-current"
              style={styles}>&nbsp;</div>
        </div>
        <div className="fammy-top__chart__track__progress__sub-details">
         <div>
          {this.props.item.info.daysLeft} days left
         </div>
         <div>
          ${this.props.item.info.moneyCurrent} to go
         </div>
        </div>
       </div>

       <div className="fammy-top__chart__track__back-button" onClick={this.backTrack}>
        Back this song
       </div>

       <div className="fammy-top__chart__track__details-button" onClick={this.detailsTrack}>
        Details
       </div>

      </div>
  );
 }
}

export default withRouter(FammyTrack);

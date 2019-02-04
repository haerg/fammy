import React, { Component } from 'react';
import './fammyPlayer.css';
import playPrevTrack from '../images/play-previous-track.svg';
import playTrack from '../images/play-track.svg';
import pauseTrack from '../images/pause-track.svg';
import playNextTrack from '../images/play-next-track.svg';
// import volumeMuted from './images/volume-muted.svg';
// import volumeHigh from './images/volume-high.svg';

export default class FammyPlayer extends Component {

 constructor(props) {
  super(props);
  this.state = {
   startTime: 0,
  };
 }

 playTrack = () => {
  this.props.playTrack(this.props.item);
 };

 render() {
  const startTime = `0:${this.state.startTime > 10 ? this.state.startTime : ('0' +
      this.state.startTime)}`;

  return (
      <div className={`fammy-top__player ${this.props.item.isPlaying ? 'active' : ''}`}>
       <div className="fammy-top__player__controls">
        <div className="fammy-top__player__control fammy-top__player__controls__prev"
             onClick={this.props.goPrevTrack}>
         <img alt="" src={playPrevTrack}/>
        </div>
        <div className="fammy-top__player__control fammy-top__player__controls__play"
             onClick={this.playTrack}>
         <img alt="" src={playTrack}/>
        </div>
        <div className="fammy-top__player__control fammy-top__player__controls__pause"
             onClick={this.props.pauseTrack}>
         <img alt="" src={pauseTrack}/>
        </div>
        <div className="fammy-top__player__control fammy-top__player__controls__next"
             onClick={this.props.goNextTrack}>
         <img alt="" src={playNextTrack}/>
        </div>
       </div>
       <div className="fammy-top__player__playstatus">
        <span className="fammy-top__player__playstatus__starttime">{startTime}</span>
        <div className="fammy-top__player__playstatus__progressbar-container">
         <input type="range" className="fammy-top__player__playstatus__progressbar" min="0"
                max="30"/>
        </div>
        <span className="fammy-top__player__playstatus__endtime">0:30</span>
       </div>
       <div className="fammy-top__player__track">
        <div className="fammy-top__player__track__img">
         <img src={this.props.item.logoUrl} alt=""/>
        </div>
        <div className="fammy-top__player__track__info">
         <div className="fammy-top__player__track__title">
          <a href="">{this.props.item.track}</a>
         </div>
         <div className="fammy-top__player__track__artist">
          <span>{this.props.item.artist}</span>
         </div>
        </div>
       </div>
      </div>
  );
 }
}

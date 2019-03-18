import React, { Component } from 'react';
import { object, func } from 'prop-types';
import './fammyPlayer.css';
import playPrevTrack from '../../../images/play-previous-track.svg';
import playTrack from '../../../images/play-track.svg';
import pauseTrack from '../../../images/pause-track.svg';
import playNextTrack from '../../../images/play-next-track.svg';
import volumeMuted from '../../../images/volume-muted.svg';
import volumeMed from '../../../images/volume-med.svg';
import volumeHigh from '../../../images/volume-high.svg';

export default class FammyPlayer extends Component {
 state = {
  playingTime: 0,
  volume: 1,
  volumeSrc: volumeHigh,
  isVolumeEditorVisible: false,
 };

 static propTypes = {
  item: object.isRequired,
  goPrevTrack: func.isRequired,
  playTrack: func.isRequired,
  pauseTrack: func.isRequired,
  goNextTrack: func.isRequired,
 };

 playTrack = () => {
  this.props.playTrack(this.props.item);
 };

 changeRange = (event) => {
  this.props.item.audio.currentTime = event.target.value;
  this.setState({ playingTime: event.target.value });
 };

 showVolumeRange = () => {
  this.setState({ isVolumeEditorVisible: !this.state.isVolumeEditorVisible });
 };

 changeVolume = (event) => {
  const volume = +event.target.value;
  let volumeSrc = volumeHigh;

  if (volume === 0) {
   volumeSrc = volumeMuted;
  } else if (volume <= 0.5) {
   volumeSrc = volumeMed;
  }

  this.setState({ volume, volumeSrc });
 };

 render() {
  this.props.item.audio.volume = this.state.volume;
  this.props.item.audio.ontimeupdate = () => {
   this.setState({ playingTime: Math.round(this.props.item.audio.currentTime) });
  };

  const playingTime = `0:${this.state.playingTime >= 10 ? this.state.playingTime : ('0' +
      this.state.playingTime)}`;

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
        <span className="fammy-top__player__playstatus__starttime">{playingTime}</span>
        <div className="fammy-top__player__playstatus__progressbar-container">
         <input type="range"
                className="fammy-top__player__playstatus__progressbar"
                min="0"
                max="30"
                step="1"
                value={this.state.playingTime}
                onChange={this.changeRange}
         />
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

       <div className="fammy-top__player__volume">
        <img src={this.state.volumeSrc} alt="" onClick={this.showVolumeRange}/>

        <div className={`fammy-top__player__volume__popup ${this.state.isVolumeEditorVisible
            ? 'show'
            : ''}`}>
         <input type="range"
                className="fammy-top__player__playstatus__progressbar"
                min="0"
                max="1"
                step="0.1"
                value={this.state.volume}
                onChange={this.changeVolume}/>
         <img src={this.state.volumeSrc} alt="" onClick={this.showVolumeRange}/>
        </div>
       </div>

      </div>
  );
 }
}

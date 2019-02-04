import React, { Component } from 'react';
import './fammyTrack.css';
import playBtn from '../images/play-button.svg';
import pauseBtn from '../images/pause-button.svg';

export default class FammyTrack extends Component {

 playTrack = () => {
  this.props.playTrack(this.props.item);
 };

 render() {

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

       {/*<div className="fammy-top__chart__track__plays">{item.plays}</div>*/}
      </div>
  );
 }
}

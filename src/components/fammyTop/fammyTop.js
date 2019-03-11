import React, { Component } from 'react';
import './fammyTop.css';
import FammyTrack from './fammyTrack/fammyTrack';

import FammyPlayer from './fammyPlayer/fammyPlayer';
import { PLAYLIST } from '../../data.constants';



class FammyTop extends Component {

 state = {
  currentTrack: null,
 };

 play = (item) => {
  item.isPlaying = true;
  item.audio.play();
 };

 pause = (item) => {
  item.isPlaying = false;
  item.audio.pause();
 };

 playTrack = (item) => {
  if (this.state.currentTrack && this.state.currentTrack.id !== item.id) {
   const prevItem = PLAYLIST.find(i => i.id === this.state.currentTrack.id);
   this.pause(prevItem);
  }

  if (!item.audio) {
   item.audio = new Audio(item.audioUrl);
   item.audio.onended = this.goNextTrack;
  }

  if (item.audio.paused) {
   this.play(item);
  } else {
   this.pause(item);
  }
  this.setState({ currentTrack: item });
 };

 goPrevTrack = () => {
  const { id } = this.state.currentTrack;
  const currentTrackIndex = PLAYLIST.findIndex(elem => elem.id === id);
  let prevIndex;

  if (currentTrackIndex) {
   prevIndex = currentTrackIndex - 1;
  } else {
   prevIndex = PLAYLIST.length - 1;
  }

  this.playTrack(PLAYLIST[prevIndex]);
 };

 pauseTrack = () => {
  this.playTrack(this.state.currentTrack);
 };

 goNextTrack = () => {
  const { id } = this.state.currentTrack;
  const currentTrackIndex = PLAYLIST.findIndex(elem => elem.id === id);
  let nextIndex;

  if (currentTrackIndex === PLAYLIST.length - 1) {
   nextIndex = 0;
  } else {
   nextIndex = currentTrackIndex + 1;
  }

  this.playTrack(PLAYLIST[nextIndex]);
 };

 render = () => {
  const playlistEl = PLAYLIST.map((item) => {
   return <FammyTrack
       key={item.id}
       item={item}
       playTrack={this.playTrack}
   />;
  });

  const player = (this.state.currentTrack ? <FammyPlayer
      item={this.state.currentTrack}
      playTrack={this.playTrack}
      pauseTrack={this.pauseTrack}
      goPrevTrack={this.goPrevTrack}
      goNextTrack={this.goNextTrack}
  /> : '');

  return (
      <div className="fammy-top">

       <div className="fammy-top__title">Hot Campaigns</div>
       <div className="fammy-top__chart">
        {playlistEl}
       </div>
       {player}
      </div>
  );
 };
}

export default FammyTop;

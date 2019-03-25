import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import './fammyTop.css';
import FammyTrack from './fammyTrack/fammyTrack';
import FammyPlayer from './fammyPlayer/fammyPlayer';
import { PLAYLIST } from '../../data.constants';
import Button from '@material-ui/core/Button/Button';

const styles = theme => ({
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
 },
});

class FammyTop extends Component {

 state = {
  currentTrack: null,
  offset: 0,
  limit: 5,
  tracks: [],
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

 getTracks = (params) => {
  return PLAYLIST.slice(params.offset, params.offset + params.limit);
 };

 loadData = ({ limit = 5, offset = 0 } = {}) => {
  const newTracks = this.getTracks({ limit, offset });

  if (!newTracks.length) {
   this.setState({ noMoreTracks: true });
  } else {
   const tracks = this.state.tracks.concat(newTracks);
   let noMoreTracks = false;
   if (newTracks.length < this.state.limit) {
    noMoreTracks = true;
   }

   this.setState({ offset: offset, limit, tracks, noMoreTracks });
  }
 };

 showMore = () => {
  this.loadData({ offset: this.state.offset + 5 });
 };

 componentWillMount = () => {
  this.loadData();
 };

 render = () => {
  const playlistEl = this.state.tracks.map((item) => {
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

  const { classes } = this.props;

  const showMoreBtn = (this.state.noMoreTracks ? '' :
      <div className="fammy-top__show-more-container">
       <Button variant="text"
               classes={{
                root: classes.root,
                label: classes.label,
               }} onClick={this.showMore}>
        Show More
       </Button>
      </div>);

  return (
      <div className="fammy-top" ref={this.props.refProp}>

       <div className="fammy-top__title">Hot Campaigns</div>
       <div className="fammy-top__chart">
        {playlistEl}
       </div>
       {showMoreBtn}
       {player}
      </div>
  );
 };
}

export default withStyles(styles)(FammyTop);

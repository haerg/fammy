import React, { Component } from 'react';
import './fammyTop.css';
import { withStyles } from '@material-ui/core/styles';
import playBtn from './images/play-button.svg';
import Progress from '@material-ui/core/LinearProgress';

const styles = {
 root: {
  height: 30,
 },
};

const playlist = [
 {
  id: 1,
  track: 'Without Me',
  artist: 'Halsey',
  logoUrl: 'https://images.shazam.com/coverart/t441990739-b1437575238_s400.jpg',
  audioUrl: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/8f/d8/bf/8fd8bfa5-4a1d-462f-059e-c7b57b5409cd/mzaf_4287859394734930905.plus.aac.p.m4a',
  plays: 3,
  progress: 60,
 },
 {
  id: 2,
  track: 'Sunflower (Spider-Man: Into the Spider-Verse)',
  artist: 'Post Malone & Swae Lee',
  logoUrl: 'https://images.shazam.com/coverart/t442173657-b1445949267_s400.jpg',
  audioUrl: '',
  plays: 22,
  progress: 30,
 },
 {
  id: 3,
  track: 'SICKO MODE',
  artist: 'Travis Scott',
  logoUrl: 'https://images.shazam.com/coverart/t434202110-b1421658123_s400.jpg',
  audioUrl: '',
  plays: 13,
  progress: 90,
 },
 {
  id: 4,
  track: 'Be Alright',
  artist: 'Dean Lewis',
  logoUrl: 'https://images.shazam.com/coverart/t428550515-b1435118880_s400.jpg',
  audioUrl: '',
  plays: 13,
  progress: 80,
 },
 {
  id: 5,
  track: 'You Say',
  artist: 'Lauren Daigle',
  logoUrl: 'https://images.shazam.com/coverart/t430774707-b1409149756_s400.jpg',
  audioUrl: '',
  plays: 13,
  progress: 60,
 },
];

class FammyTop extends Component {
 render() {
  const { classes } = this.props;
  const playlistEl = playlist.map((item) => {
   return <div className="fammy-top__chart__track" key={item.id}>
    <div className="fammy-top__chart__track__id">
     <div>{item.id}</div>
     <div className="fammy-top__chart__track__play"><img src={playBtn}/></div>
    </div>
    <div className="fammy-top__chart__track__img">
     <img src={item.logoUrl} alt=""/>
    </div>
    <div className="fammy-top__chart__track__info">
     <div className="fammy-top__chart__track__title"><a href="">{item.track}</a></div>
     <div className="fammy-top__chart__track__artist"><a href="">{item.artist}</a></div>
    </div>
    {/*<div className="fammy-top__chart__track__plays">{item.plays}</div>*/}
    <div className="fammy-top__chart__track__progress_horizontal_view">
     <Progress variant="determinate" value={item.progress}
               classes={{
                root: classes.root,
               }}
     >
     </Progress>
    </div>
   </div>;
  });
  return (
      <div className="fammy-top">

       <div className="fammy-top__title">Top Music to Invest</div>
       <div className="fammy-top__chart">
        {playlistEl}
       </div>
      </div>
  );
 }
}

export default withStyles(styles)(FammyTop);
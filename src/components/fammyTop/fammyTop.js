import React, { Component } from 'react';
import './fammyTop.css';
import playBtn from './images/play-button.svg';
import pauseBtn from './images/pause-button.svg';

const playlist = [
 {
  id: 1,
  track: 'Without Me',
  artist: 'Halsey',
  logoUrl: 'https://images.shazam.com/coverart/t441990739-b1437575238_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/8f/d8/bf/8fd8bfa5-4a1d-462f-059e-c7b57b5409cd/mzaf_4287859394734930905.plus.aac.p.m4a'),
  plays: 3,
 },
 {
  id: 2,
  track: 'Sunflower (Spider-Man: Into the Spider-Verse)',
  artist: 'Post Malone & Swae Lee',
  logoUrl: 'https://images.shazam.com/coverart/t442173657-b1445949267_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/cb/03/19/cb031939-36c4-7542-af33-a64169be4c8c/mzaf_1558272479967123968.plus.aac.p.m4a'),
  plays: 22,
 },
 {
  id: 3,
  track: 'SICKO MODE',
  artist: 'Travis Scott',
  logoUrl: 'https://images.shazam.com/coverart/t434202110-b1421658123_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/5f/83/70/5f8370e1-84d0-7699-c7c1-d86b8ba3002c/mzaf_1212062608084196781.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 4,
  track: 'Be Alright',
  artist: 'Dean Lewis',
  logoUrl: 'https://images.shazam.com/coverart/t428550515-b1435118880_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/46/29/d7/4629d776-e336-cfb0-d1a9-15cbf5d3bc65/mzaf_5119235406647478413.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 5,
  track: 'You Say',
  artist: 'Lauren Daigle',
  logoUrl: 'https://images.shazam.com/coverart/t430774707-b1409149756_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/91/85/0f/91850f1d-85b8-1aa0-6eea-e5988b0eb194/mzaf_6254647395340771291.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 6,
  track: 'Happier',
  artist: 'Marshmello & Bastille',
  logoUrl: 'https://images.shazam.com/coverart/t435160184-b1424704480_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/9c/e6/fd/9ce6fd38-1225-6ac3-f7a6-da80cb50346e/mzaf_1582186890349153418.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 7,
  track: 'Backin\' It Up',
  artist: 'Pardison Fontaine Feat. Cardi B',
  logoUrl: 'https://images.shazam.com/coverart/t439743280-b1436481322_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/85/9c/fc/859cfc11-eff0-aca8-b50f-679b4aa644af/mzaf_5556395319728888179.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 8,
  track: 'ZEZE',
  artist: 'Kodak Black Feat. Offset & Travis Scott',
  logoUrl: 'https://images.shazam.com/coverart/t443321905-b1438652073_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/28/74/c1/2874c191-db74-ccce-c1d6-de686e2b59e0/mzaf_7006496898019862311.plus.aac.p.m4a'),
  plays: 13,
 },
 {
  id: 9,
  track: 'Wake Up In The Sky',
  artist: 'Gucci Mane, Bruno Mars & Kodak Black',
  logoUrl: 'https://images.shazam.com/coverart/t439575216-b1436089960_s400.jpg',
  audio: new Audio(
      'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/ca/b8/2b/cab82b04-bf80-eca4-9666-1d4ea83d2959/mzaf_6744258349999902748.plus.aac.p.m4a'),
  plays: 13,
 },
];

class FammyTop extends Component {
 constructor() {
  super();
  this.state = {
   activeId: null,
  };
  // this.setActiveElement = this.setActiveElement.bind(this);
 }

 play(audio) {
  audio.play();
 }

 pause(audio) {
  audio.pause();
 }

 setActiveElement(item) {
  if (this.state.activeId && this.state.activeId !== item.id) {
   const prevAudio = playlist.find(i => i.id === this.state.activeId);
   this.pause(prevAudio.audio);
  }

  if (item.audio.paused) {
   this.play(item.audio);
   this.setState({ activeId: item.id });
  } else {
   this.setState({ activeId: null });
   this.pause(item.audio);
  }
 }

 render() {
  const playlistEl = playlist.map((item) => {
   return <div
       className={`fammy-top__chart__track ${item.id === this.state.activeId ? 'current' : ''}`}
       key={item.id}
       onClick={() => this.setActiveElement(item)}>
    <div className="fammy-top__chart__track__id">
     <div className="fammy-top__chart__track__number">{item.id}</div>
     <div className="fammy-top__chart__track__play"><img src={playBtn} alt=""/></div>
     <div className="fammy-top__chart__track__pause"><img src={pauseBtn} alt=""/></div>
    </div>
    <div className="fammy-top__chart__track__img">
     <img src={item.logoUrl} alt=""/>
    </div>
    <div className="fammy-top__chart__track__info">
     <div className="fammy-top__chart__track__title"><a href="">{item.track}</a></div>
     <div className="fammy-top__chart__track__artist"><a href="">{item.artist}</a></div>
    </div>
    {/*<div className="fammy-top__chart__track__plays">{item.plays}</div>*/}
   </div>;
  });
  return (
      <div className="fammy-top">

       <div className="fammy-top__title">Fammy Top</div>
       <div className="fammy-top__chart">
        {playlistEl}
       </div>
      </div>
  );
 }
}

export default FammyTop;

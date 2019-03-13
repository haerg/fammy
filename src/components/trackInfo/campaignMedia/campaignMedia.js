import React, { Component } from 'react';
import './campaignMedia.css';

class CampaignMedia extends Component {

 constructor({ media }) {
  super();

  this.state = {
   currentMedia: media[0],
   media,
  };
 }

 chooseMedia(item) {
  this.setState({ currentMedia: item });
 }

 render = () => {
  const smallMedia = this.state.media.map((item, index) =>
      <div className={'track-info-container__media-small__item ' + (item.id ===
      this.state.currentMedia.id ? 'active' : '')}
           key={index}
           onClick={() => {this.chooseMedia(item);}}>
       <img src={item.url}/>
      </div>,
  );

  return (
      <div className="track-info-container__media">
       <div className="track-info-container__media-big">
        <div className="track-info-container__media__item"><img
            src={this.state.currentMedia.url}/></div>
       </div>
       <div className="track-info-container__media-small">
        {smallMedia}
       </div>
      </div>
  );

 };
}

export default CampaignMedia;

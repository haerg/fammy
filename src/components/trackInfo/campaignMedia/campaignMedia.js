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
      <div className={'campaign__media-small__item ' + (item.id ===
      this.state.currentMedia.id ? 'active' : '')}
           key={index}
           onClick={() => {this.chooseMedia(item);}}>
       <img src={item.url}/>
      </div>,
  );

  return (
      <div className="campaign__media">
       <div className="campaign__media-big">
        <div className="campaign__media__item">
         <img src={this.state.currentMedia.url}/>
        </div>
       </div>
       <div className="campaign__media-small">
        {smallMedia}
       </div>
      </div>
  );

 };
}

export default CampaignMedia;

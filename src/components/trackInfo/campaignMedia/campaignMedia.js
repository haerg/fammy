import React, { Component } from 'react';
import './campaignMedia.css';

class CampaignMedia extends Component {

 constructor({ media }) {
  super();
  console.log(media);
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
       {item.type === 'image' ?
           <img alt="" src={item.url}/> :
           <img alt="" src={'http://i.ytimg.com/vi/' + item.key + '/hqdefault.jpg'}>
           </img>}
      </div>,
  );

  const mediaPreview = (this.state.currentMedia.type === 'image' ?
          <img alt="" src={this.state.currentMedia.url}/> :
          <iframe height="100%" width="100%" allowfullscreen="true"
                  src={this.state.currentMedia.url}>
          </iframe>
  );

  return (
      <div className="campaign__media">
       <div className="campaign__media-big">
        <div className="campaign__media__item">
         {mediaPreview}
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

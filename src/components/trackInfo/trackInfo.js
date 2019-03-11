import React, { Component } from 'react';
import './trackInfo.css';
import Logo from '../logo/logo';

class TrackInfo extends Component {

 render = () => {
  return (
      <div className="track-info-container">

       <div className="track-info-container__header">
        <Logo/>
       </div>

       <div className="track-info-container__body">
        <div className="track-info-container__left">
         Images
        </div>

        <div className="track-info-container__campaign">
         <div className="track-info-container__campaign__title">Campaign</div>

         <div className="track-info-container__track">
          <div className="track-info-container__track__avatar">
           <img alt="avatar" src="https://api.adorable.io/avatars/400/abott@adorable.io.png"/>
          </div>
          <div className="track-info-container__track__song">
           <div className="track-info-container__track__song__title">Without Me</div>
           <div className="track-info-container__track__album">Halsey</div>
          </div>
         </div>

         <div className="track-info-container__owner-container">
          <div className="track-info-container__owner-container__title">Project owner</div>
          <div className="track-info-container__owner">
           <div className="track-info-container__owner__avatar">
            <img alt="avatar"
                 src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"/>
           </div>
           <div className="track-info-container__owner__data">
            <div className="track-info-container__owner__name">John Doe</div>
            <div className="track-info-container__owner__location">San Diego, United States</div>
           </div>
          </div>
         </div>

         <div className="track-info-container__progress">
          <div className="track-info-container__progress__funded">
           <span>75%</span>
           <span className="track-info-container__progress__details">Funded</span>
          </div>
          <div className="track-info-container__progress__backers">
           <span>310</span>
           <span className="track-info-container__progress__details">Backers</span>
          </div>
          <div className="track-info-container__progress__days-left">
           <span>12</span>
           <span className="track-info-container__progress__details">Days left</span>
          </div>
         </div>

         <div className="track-info-container__back-song-btn">Back this song</div>

        </div>

       </div>

      </div>
  );
 };
}

export default TrackInfo;

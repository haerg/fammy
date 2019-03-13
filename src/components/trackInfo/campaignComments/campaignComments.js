import React, { Component } from 'react';
import './campaignComments.css';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
 root: {
  backgroundColor: '#DB5643',
  color: 'white',
  '&:hover': {
   backgroundColor: '#DB5643',
  },
 },
 normalLabel: {
  textTransform: 'none',
 },
});

class CampaignComments extends Component {

 constructor({ comments }) {
  super();

  this.state = {
   symbolsLeft: 500,
   newComment: '',
   comments,
  };
 }

 formatDate(param) {
  const date = new Date(param);
  var dd = date.getDate();
  var mm = date.getMonth() + 1;

  var yyyy = date.getFullYear();
  if (dd < 10) {
   dd = '0' + dd;
  }
  if (mm < 10) {
   mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
 }

 handleChange = (event) => {
  this.setState({ symbolsLeft: 500 - event.target.value.length, newComment: event.target.value });
 };

 postComment = () => {
  this.setState({
   comments: this.state.comments.concat({
    text: this.state.newComment,
    user: {
     avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
     date: new Date().getTime(),
     name: 'Alex Mood',
    },
   }),
   newComment: '',
  });
 };

 render = () => {
  const { classes } = this.props;

  const comments = this.state.comments.map((item, index) =>
      <div className="campaign__comment" key={index}>
       <div className="campaign__comment__avatar">
        <img src={item.user.avatarUrl}/>
       </div>
       <div className="campaign__comment__data">
        <div className="campaign__comment__header">
         <div className="campaign__comment__header__name">{item.user.name}</div>
         <div className="campaign__comment__header__date">{this.formatDate(
             item.user.date)}</div>
        </div>
        <div className="campaign__comment__text">{item.text}</div>
       </div>
      </div>,
  );

  return (
      <div>

       <div className="campaign__comments-box">
        <div>
             <textarea maxLength="500" placeholder="Leave your comment here" rows="3"
                       onChange={this.handleChange} value={this.state.newComment}></textarea>
        </div>
        <div className="campaign__comments-box__actions">
         <div className="campaign__comments-box__actions__limit">
          <span>{this.state.symbolsLeft}</span>
          <span>&nbsp;of&nbsp;</span>
          <span>500</span>
         </div>
         <div>
          <Button variant="text"
                  onClick={this.postComment}
                  classes={{
                   root: classes.root,
                   label: classes.normalLabel,
                  }}>
           Post a comment
          </Button>
         </div>
        </div>
       </div>

       <div className="campaign__comments">
        {comments}
       </div>

      </div>
  );

 };
}

export default withStyles(styles)(CampaignComments);

import React from 'react';

class Audio extends React.Component {
  constructor(props){
    super(props);
  }

//needed to reload the audio element with new src 
  componentDidUpdate(prevProps, prevState){
    this.refs.audio.pause();
    this.refs.audio.load();
  }
  render(){
    return(
      <audio controls ref="audio"><source src={this.props.url}/></audio>
    )
  }
}

export default Audio;

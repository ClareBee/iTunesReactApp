import React from 'react';

class Audio extends React.Component {

  handleSong(){

  }
  render(){
    return(
      <audio controls><source src={this.props.url}/></audio>
    )
  }
}

export default Audio;

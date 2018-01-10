import React from 'react';

class Audio extends React.Component {
  constructor(props){
    super(props);
    this.reloadPage = this.reloadPage.bind(this);
  }

  reloadPage(){
    window.location.reload(true);
  }

  render(){
    return(
      <audio controls onPause={this.reloadPage}><source src={this.props.url}/></audio>
    )
  }
}

export default Audio;

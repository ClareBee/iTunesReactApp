import React from 'react';

class Audio extends React.Component {
  constructor(props){
    super(props);
    this.reloadPage = this.reloadPage.bind(this);
  }

  reloadPage(){
    window.location.reload(true);
  }
  //try to force reload of audio component
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.url !== this.props.url){
  //     this.forceUpdate();
  //   }
  // }
  render(){
    return(
      <audio controls onPause={this.reloadPage}><source src={this.props.url}/></audio>
    )
  }
}

export default Audio;

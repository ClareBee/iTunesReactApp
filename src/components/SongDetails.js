import React from 'react';
import AudioPlayer from "./audio.js";


class SongDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songToPlay: null
    }
    // this.trackChange = this.trackChange.bind(this);
  }

  // trackChange(){
  //   if(!this.props.song){
  //   return null
  //   }
  //   var surl = this.props.song["link"][1]['attributes'].href;
  //   this.setState({songToPlay: surl});
  // }

  render(){
    if(!this.props.song){
    return null
    }
    let songUrl = this.props.song["link"][1]['attributes'].href;
    let songHref = this.props.song["link"][0]['attributes'].href;
    console.log(songHref);
    return(
      <React.Fragment>
      <article id="song-detail">
      <h3 id="song-title">
        Song: {this.props.song.title.label}
      </h3>
      <h3 id="chart-position">Chart Position: {this.props.index + 1} </h3>
      <img src={this.props.song['im:image'][2].label} />
      <h1><i className="fa fa-cart-plus" aria-hidden="true"></i><a href={songHref} target="_blank">{this.props.song['im:price'].label}</a></h1>
      <AudioPlayer onMouseOver={this.trackChange} url={songUrl} />
    </article>
    </React.Fragment>
    );
  }
}

export default SongDetails;

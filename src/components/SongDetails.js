import React from 'react';
import AudioPlayer from "./audio.js";


class SongDetails extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      songToPlay: null
    }
    // this.trackChange = this.trackChange.bind(this);
}

  render(){
    if(!this.props.song){
    return null
    }
    let individual = this.props.song;
    console.log(this.props.song["im:image"][0].label);
    var bla = Object.values(individual);
    console.log(this.state.songToPlay);

    var surl = this.props.song["link"][1]['attributes'].href;


    return(
      <React.Fragment>
      <article id="song-detail">
      <h3 id="song-title">
        Song: {this.props.song.title.label}
      </h3>
      <h3 id="chart-position">Chart Position: {this.props.index + 1} </h3>
      <img src={this.props.song['im:image'][2].label} />
      <h1>{this.props.song['im:price'].label}</h1>
      <AudioPlayer url={surl} ref="AudioPlay"/>
    </article>
    </React.Fragment>
    );
  }
}

export default SongDetails;

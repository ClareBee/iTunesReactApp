import React from 'react';


class SongDetails extends React.Component{
  render(){
    if(!this.props.song){
    return null
  }
    let individual = this.props.song;
    console.log(this.props.song);
    console.log(this.props.song["im:image"][0].label);
    var bla = Object.values(individual);
    console.log(bla[1]);
    console.log(this.props.song["link"][1]['attributes'].href);
    return(
      <article id="song-detail">
        <h3>
      Song: {this.props.song.title.label}
      </h3>
      <h3>Chart Position: {this.props.index + 1} </h3>
      <img src={this.props.song['im:image'][2].label} />
      <h1>{this.props.song['im:price'].label}</h1>
      <audio controls><source src={this.props.song["link"][1]['attributes'].href} /></audio>
      </article>
    );
  }
}

export default SongDetails;

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

    return(
      <article id="country-detail">
        <h3>
      Song: {this.props.song.title.label}
      </h3>
      <img src={this.props.song['im:image'][0].label} />
      <h1>{this.props.song['im:price'].label}</h1>
      </article>
    );
  }
}

export default SongDetails;

import React from 'react';


class SongDetails extends React.Component{
  render(){
    if(!this.props.song){
    return null
  }
    return(
      <article id="country-detail">
        <h3>
      Song: {this.props.song.title.label}
      </h3>
      <h4>
  
        </h4>
      </article>
    );
  }
}

export default SongDetails;

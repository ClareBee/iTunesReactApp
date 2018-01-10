import React from 'react';

class SongList extends React.Component{
  constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);

}
  handleChange(event){
//to pass to the onSelect function
  this.props.onSelect(parseInt(event.target.value, 10));
  window.scrollBy(0, 150);
  //reload audio component/clear cache
  console.log(this.refs.AudioPlay);
}

  render(){
    const top20 = this.props.songs.map((song, index) => {
        return <option value={index} key={index}>Chart Position {index+1} >>> {song.title.label}</option>
      });
    return(
      <select id="songs" onChange={this.handleChange}>
        {top20}
      </select>
    );
  }
}
export default SongList;

import React from 'react';

class SongList extends React.Component{
  constructor(props){
  super(props);
  this.handleChange = this.handleChange.bind(this);

}
  handleChange(event){
//to pass to the onSelect function - what does this line do? is it a React callback?
  this.props.onSelect(parseInt(event.target.value, 10));
  window.scrollBy(0, 300);
  // event.target.next().scrollIntoView(false);
  // event.currentTarget.next().scrollIntoView(false);
  // event.currentTarget.nextSibling.scrollIntoView(false);
  window.scrollTo(0, document.body.scrollHeight);
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

import React from 'react';
import SongList from '../components/SongList';
import SongDetails from '../components/SongDetails';

class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      chosenSong: null
    };
  this.handleChosenSong = this.handleChosenSong.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200){
        console.log("unsuccessful");
      } else {
        const response = request.responseText;
        const data = JSON.parse(response);
        const entries = data.feed.entry;
        this.setState({songs: entries});
      }
    });
    request.send();
  }

  handleChosenSong(index){
  this.setState({chosenSong: index});
}

  render(){
    if(!this.state.songs){
      return null
    }
    const song = this.state.songs[this.state.chosenSong];
    return(
        <div>
        <SongList songs={this.state.songs} onSelect={this.handleChosenSong}/>
        <SongDetails song={song} />
      </div>
    )
  }
}

export default ListContainer;

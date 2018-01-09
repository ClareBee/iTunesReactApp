import React from 'react';
import SongList from '../components/SongList';

class ListContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: null
    };
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
        this.setState({songs: data});
      }
    });
    request.send();
  }

  render(){
    if(this.state.songs !== null){
      console.log(this.state.songs)
    }
    return(
      <SongList songs={this.state.songs}/>


    );
  }
}

export default ListContainer;

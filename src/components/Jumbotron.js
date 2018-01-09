import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Trigger from './TriggeredModal';


class Jumbotrons extends React.Component {
  render(){
    return(

	<Jumbotron className="title">
		<h1 class="title-text">TopTrax</h1>
		<p class="title-text">
			The Top Twenty from iTunes Music - explore and get a sneak preview.
		</p>
    <Trigger />
	</Jumbotron>

    )
  }
}

export default Jumbotrons;

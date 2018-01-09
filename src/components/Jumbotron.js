import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Jumbotrons extends React.Component {
  render(){
    return(

	<Jumbotron className="title">
		<h1>TopTrax</h1>
		<p>
			The Top Twenty from iTunes Music - explore and get a sneak preview.
		</p>
	</Jumbotron>

    )
  }
}

export default Jumbotrons;

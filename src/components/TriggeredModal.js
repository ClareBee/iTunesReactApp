import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class Trigger extends React.Component {
	constructor(...args) {
		super(...args);

		this.handleHide = this.handleHide.bind(this);
		this.state = { show: false };
	}

	handleHide() {
		this.setState({ show: false });
	}
	render() {
		return (
			<div className="modal-container" style={{ height: 200 }}>
				<Button
          className="find-more"
					bsStyle="warning"
					bsSize="large"
					onClick={() => this.setState({ show: true })}
				>
					Find out more!
				</Button>

				<Modal
					show={this.state.show}
					onHide={this.handleHide}
					container={this}
					aria-labelledby="contained-modal-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title">
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
				       <p id="modal-text" >Thanks to <a target="_blank" href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunesApi (external link)</a></p>
					</Modal.Body>
					<Modal.Footer>
						<Button className="btn btn-danger" onClick={this.handleHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Trigger;

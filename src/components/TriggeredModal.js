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
					bsStyle="primary"
					bsSize="large"
					onClick={() => this.setState({ show: true })}
				>
					Launch contained modal
				</Button>

				<Modal
					show={this.state.show}
					onHide={this.handleHide}
					container={this}
					aria-labelledby="contained-modal-title"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title">
							Contained Modal
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
				       something important
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Trigger;

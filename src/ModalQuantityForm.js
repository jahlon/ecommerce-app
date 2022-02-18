import {Component} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import * as ReactDOM from "react-dom";

class ModalQuantityForm extends Component {

    constructor(props) {
        super(props);

        this.setInputFocus = this.setInputFocus.bind(this)
    }

    state = { quantity: '' }

    handleChange = (e) => this.setState({quantity: e.target.value})

    setInputFocus() {
        ReactDOM.findDOMNode(this.myInputRef).focus();
    }

    render() {
        return (
            <Modal show={this.props.isOpen} onHide={this.props.closeModal} onShow={this.setInputFocus}>
                <Modal.Header closeButton>
                    <Modal.Title>{"Add " + this.props.name + " to cart"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Quantity: </Form.Label>
                        <Form.Control
                            ref={c => (this.myInputRef = c)}
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.quantity}
                            placeholder="Quantity" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.props.onAddProductToCart(this.props.sku, this.state.quantity)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalQuantityForm;
import {Component} from "react";
import {Button} from "react-bootstrap";

class Item extends Component {

    handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            this.props.onDeleteItem(id)
        }
    }

    render() {
        return (
            <tr>
                <th scope='row' className='text-center align-middle'>{this.props.id}</th>
                <td className='text-start align-middle'>{this.props.productName}</td>
                <td className='text-center align-middle'>{this.props.quantity}</td>
                <td className='text-end align-middle'>{this.props.unitPrice.toFixed(3)}</td>
                <td className='text-end align-middle'>{this.props.subtotal}</td>
                <td className='text-center'>
                    <Button
                        variant="link"
                        className="bi-x-circle"
                        onClick={() => this.handleDelete(this.props.id)}
                        data-toggle='tooltip' data-placement='right'
                        title='Eliminar item'>
                    </Button>
                </td>
            </tr>
        );
    }
}

export default Item;
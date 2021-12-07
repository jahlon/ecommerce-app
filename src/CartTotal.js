import {Component} from "react";

class CartTotal extends Component {
    render() {
        return (
            <tr className="table-dark">
                <th scope="row" colSpan="4" className="align-content-start">Total:</th>
                <td className="text-end"> {this.props.total.toFixed(2)}</td>
                <td/>
            </tr>
        );
    }
}

export default CartTotal;
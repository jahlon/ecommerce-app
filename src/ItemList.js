import {Component} from "react";
import Item from "./Item";
import CartTotal from "./CartTotal";

function NoItemRow(props) {
    return (
        <tr>
            <td colSpan="6">No hay items en el carrito.</td>
        </tr>
    )
}

class ItemList extends Component {

    constructor(props) {
        super(props);

        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }

    handleDeleteItem = (id) => {
        this.props.onDeleteItem(id)
    }

    render() {
        const items = this.props.items
        const itemComponents = items.map((item) => (
            <Item
                key={item.product.sku + item.id}
                id={item.id}
                productName={item.product.name}
                unitPrice={item.product.unitPrice}
                quantity={item.quantity}
                subtotal={item.subtotal.toFixed(2)}
                onDeleteItem={this.handleDeleteItem}
            />
        ));
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th className="text-center" scope='col'>#</th>
                        <th className="text-start" scope='col'>Product</th>
                        <th className="text-center" scope='col'>Quantity</th>
                        <th className="text-end" scope='col'>Unit price</th>
                        <th className="text-end" scope='col'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {itemComponents.length > 0 ? itemComponents : <NoItemRow/>}
                    <CartTotal
                        total={this.props.total}
                    />
                </tbody>
            </table>
        );
    }
}

export default ItemList;
import {Component} from "react";
import ItemList from "./ItemList";

class ShoppingCart extends Component {
    render() {
        return (
            <div className='container mt-3'>
                <h2>Shopping Cart</h2>
                <ItemList
                    items={this.props.items}
                    total={this.props.total}
                    onDeleteItem={this.props.onDeleteItem}
                />
            </div>
        );
    }
}

export default ShoppingCart;
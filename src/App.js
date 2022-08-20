import {Component} from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import client from "./Client";
import CartItem from "./model/CartItem.ts";

class App extends Component {
    state = {
        items: [],
        total: 0
    }

    constructor(props) {
        super(props);
        this.addProductToCart = this.addProductToCart.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.calculateTotal = this.calculateTotal.bind(this)
    }

    calculateTotal() {
        let cartTotal = 0;
        for(let item of this.state.items){
            cartTotal += item.calculateSubtotal()
        }
        this.setState({total: cartTotal})
    }

    deleteItem(id) {
        client.deleteItem(id)
            .then((response) => {
                const updatedItems = this.state.items.filter((item)=> {
                   return item.id !== id
                });
                this.setState({items: updatedItems})
                this.calculateTotal()
            })
    }

    addProductToCart(productSku, quantity) {
        const item = {
            'productSku': productSku,
            'quantity': quantity
        }

        client.addItemToCart(item)
            .then((response) => {
                this.setState({
                    items: this.state.items.concat(new CartItem(response))
                })
                this.calculateTotal()
            })
    }

    render() {
        return (
            <div className='App vh-100'>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid justify-content-center">
                        <span className="navbar-brand mb-0 h1">ECommerce App</span>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <ProductList
                                onAddProductToCart={this.addProductToCart}
                            />
                        </div>
                        <div className='col-sm-6'>
                            <ShoppingCart
                                items={this.state.items}
                                total={this.state.total}
                                onDeleteItem={this.deleteItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
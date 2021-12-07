import {Component} from "react";
import Product from "./Product";
import SearchForm from "./SearchForm";
import ModalQuantityForm from "./ModalQuantityForm";
import client from "./Client";

class ProductList extends Component{
    state = {
        products: [],
        isModalOpen: false,
        selectedProductSku: "",
        selectedProductName: "",
        searchValue: ""
    }

    componentDidMount() {
        client.getProducts()
            .then((products) => (
                this.setState({products: products})
            ));
    }

    openModal = (productSku) => {
        const selectedProduct = this.state.products.filter((product) => {
           return product.sku === productSku
        });
        this.setState({selectedProductSku: productSku})
        this.setState({selectedProductName: selectedProduct[0].name})
        this.setState({isModalOpen: true})
    }

    closeModal = () => this.setState({isModalOpen: false})

    handleAddProductToCart = (productSku, quantity) => {
        const selectedProduct = this.state.products.filter((product) => {
           return product.sku === productSku
        });
        this.props.onAddProductToCart(selectedProduct[0].sku, Number(quantity))
        this.closeModal()
    }

    handleSearchTextChange = (event) => {
        client.getProducts(event.target.value)
            .then((products) => (
                this.setState({products: products})
            ));
    }

    render() {
        const products = this.state.products;
        const productComponents = products.map((product) => (
            <Product
                key={product.sku}
                sku={product.sku}
                name={product.name}
                description={product.description}
                price={product.unitPrice}
                imageUrl={'images/products/' + product.sku + '.jpg'}
                onOpenModal={this.openModal}
            />
        ));
        return (
            <div className='product-list-overflow container border mt-3 mb-3 pt-3 pb-3 overflow-auto'>
                <SearchForm
                    onTextChange={this.handleSearchTextChange}
                />
                <div className='row mt-3 ms-1'>
                    { productComponents.length > 0 ?
                        productComponents
                        :
                        "No products found."
                    }
                </div>
                { this.state.isModalOpen ?
                    <ModalQuantityForm
                        sku={this.state.selectedProductSku}
                        name={this.state.selectedProductName}
                        closeModal={this.closeModal}
                        isOpen={this.state.isModalOpen}
                        onAddProductToCart={this.handleAddProductToCart}
                    />
                    :
                    null
                }
            </div>
        );
    }
}

export default ProductList;
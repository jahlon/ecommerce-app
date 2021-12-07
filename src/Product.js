import {Component, createRef} from "react";

class Product extends Component {

    constructor(props) {
        super(props);
        this.quantityInput = createRef()
    }

    handleOpenModal = () => (
        this.props.onOpenModal(this.props.sku)
    );

    render() {
        return (
            <div className='col-sm-5 m-3'>
                <div className="card" style={{width: '200px'}}>
                    <img src={this.props.imageUrl} style={{width: '100%', height: '150px'}}
                         className="card-img-top img-fluid" title={this.props.description} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">
                            <b>Price: $ {this.props.price}</b>
                        </p>
                        <button className="btn btn-primary" onClick={this.handleOpenModal}>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
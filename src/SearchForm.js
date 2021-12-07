import {Component} from "react";

class SearchForm extends Component {
    render() {
        return (
          <div>
              <input type="text" className='form-control' id="searchText"
                     placeholder="Search product..." onChange={this.props.onTextChange}/>
          </div>
        );
    }
}

export default SearchForm;
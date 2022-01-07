import React, {Component} from 'react';
import Ratings from './Rating';
import { Media } from 'react-bootstrap';

class Product extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={this.props.data.imageUrl}
                        alt="Image"
                    />
                    <Media.Body>
                        <h5>{this.props.data.ProductName}</h5>
                        { this.props.data.releasedDate }
                        <Ratings rating={this.props.data.rating} numOfReviews={this.props.datanumOfReviews}/>
                        <p>{this.props.data.description}</p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
}

export default Product;
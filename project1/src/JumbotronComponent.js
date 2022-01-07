import react, {component} from 'react';
import {jumbotron, Button, Jumbotron } from 'react-bootstrap';

class JumboTronComponent extends Componet {

    constructor(props){
        super(props);
    }

        render() {
            return(
                <div>
                    <Jumbotron>
                        <h1>Hello, World!</h1>
                        <p>{this.props.children}</p>
                        <p><Button variant="primary">Learn More</Button></p>
                    </Jumbotron>
                </div>
            );
        }
}

exports default JumboTronComponent;
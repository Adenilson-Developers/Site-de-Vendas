import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    render(){
        return(
            <div>
            <Button
            className="item-details-button"
            bsStyle="link"
            onClick={() => this.setState({open: !this.state.open })}
            >
                {this.state.open === false ? `Visualizar` : `Ocultar `} Item
                {this.state.open === false ? ` +`: ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    < img
                                    width={100}
                                    height={100}
                                    alt="thumbnail"
                                    src="https://images-americanas.b2w.io/produtos/01/00/image/12846/5/12846597_1SZ.jpg"
                                    />
                                    </Media.Left>
                                    <Media.Body>
                                        <p>Violão Acústico Kuati Ks2 Nylon Clássico Preto</p>
                                        <Row className="show-grid">
                                            <Col md="{6}">
                                                <strong> {`$${this.props.price}`} </strong>
                                                <br />
                                                <strong className="price-strike">{`$${this.props.price}`} </strong>
                                                </Col>
                                                <Col md="{6}"> Un: 1</Col>
                                            </Row>
                                    </Media.Body>
                                </Media>
                            </Well>
                        </div>
                    </Collapse>

                </div>

            
        );
    }
}
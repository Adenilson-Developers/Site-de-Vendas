import React, { Component } from 'react';

import {
    Button,
    Collapse,
    Well,
    Form,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

class PromoCodeDiscount extends Component{
    constructor(props){
        super(props);

        this.state = {
            open: false,
            
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    };

    render(){
        return(
            <div>
                <Button
                className="promo-code-button"
                bsStyle="link"
                onClick={() => this.setState({ open: !this.state.open})}
            
                >
                    {this.state.open === false ? `Digitar ` : `Ocultar `}
                    codigo
                    {this.state.open === false ? ` + ` : ` -`}

                </Button>
                <Collapse in={this.state.open}>
                <div>
                    <Well>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Form>
                                    <FormGroup controlId="formInlineName">
                                        <ControlLabel>Codigo Promocional</ControlLabel>
                                        <FormControl
                                        type="text"
                                        placeholder="Entre com o codigo promocional"
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                         />
                                    </FormGroup>
                                    <Button
                                    block
                                    bsStyle="success"
                                    className="btn-round"
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                    >
                                        Confirmar
                                        </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Well>

                </div>
                </Collapse>
                </div>
        );
    }
}

const mapStateTopProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateTopProps, {handleChange}) (PromoCodeDiscount);
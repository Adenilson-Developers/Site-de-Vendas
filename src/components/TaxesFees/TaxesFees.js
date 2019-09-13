import React, { Component } from 'react';
import { Col, Row, } from 'react-bootstrap';

export default class TaxesFees extends Component {
    render (){
        return(
            <Row className="show-grid">
                <Col md="{6}">Taxas e Imposto (Brasil)</Col>
                <Col md="{6}">{`$${this.props.taxes}`}</Col>

            </Row>
        );
    }
}
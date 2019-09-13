import React, { Component } from 'react';

import { Row, Col, Tooltip, OverlayTrigger }from 'react-bootstrap';

var style = {
    pickupSavigns: {
        textDecoration: 'underline'
    },
    totalSavings:{
        color: 'red',
        fontweight:800
    }

}

export default class PickupSavigns extends Component {
    render(){
        const tooltip = (
            <Tooltip>
            <p>pegar seu pedido na loja ajuda a reduzir custos e nós repassamos as economias para você</p>
            </Tooltip>
             );
        return(
            <Row className="show-grid">
                <Col md="{6}">
                    <OverlayTrigger placement="buttom" overlay={tooltip}>
                        <div style={style.PickupSavigns}>Poupança</div>
                    </OverlayTrigger>
                    </Col>
                    <Col style={style.totalSavings} md={6}> 
                    {`$${this.props.price}`}
                    </Col>

            </Row>

        );
    }
}
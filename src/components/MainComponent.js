import React from 'react';
import GetCurrencySelect from './GetCurrencySelect';
import Conversion from './Conversion';
import Operations from './Operations';

class MainComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedFrom: null,
            selectedTo: null,
            amount: null
        };
    }

    onFromSelected = ({ target }) => {
        this.setState(() => ({ selectedFrom: target.value }));
    };
    onToSelected = ({ target }) => {
        this.setState(() => ({ selectedTo: target.value }));
    };
    amountChange = ({ target }) => {
        this.setState(() => ({ amount: target.value }));
    };
    s
    render() {
        return (
            <div>
                <GetCurrencySelect
                    onFromSelected={this.onFromSelected}
                    onToSelected={this.onToSelected}
                />
                <input type="text" onChange={this.amountChange} placeholder='amount' />

                <Conversion
                    fromId={this.state.selectedFrom}
                    toId={this.state.selectedTo}
                    amount={this.state.amount}
                />

                <Operations
                    size={4}
                />

            </div>
        );
    }
}

export default MainComponent;
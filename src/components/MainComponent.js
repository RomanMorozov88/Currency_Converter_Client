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
            amount: null,
            loadOperations: false
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

    loadStuff = () => {
        this.setState({ loadWorksheep: !this.state.loadWorksheep });
    }

    LoadConverter = () => {
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

            </div>
        );
    }

    LoadOperations = () => {
        return (
            <div>
                <Operations />
            </div>
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.loadStuff}>Switch!</button>
                <div>{this.state.loadWorksheep ? <this.LoadOperations /> : <this.LoadConverter />}</div>
            </div>
        );
    }
}

export default MainComponent;
import React, { Component } from 'react';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {
    componentDidMount() {
        console.log('[Pizza] did mount');
    }
    render() {
        console.log('[Pizza] render');
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        );
    }
}

export default Pizza;
import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import appRoutes from './routes';
import CartContext from "../context/app-context";
import {MainState} from "../context/models/main";

class Index extends Component {
    state = MainState;

    componentDidMount() {
        this.updateCartStateFromLocalStorage();
    }


    updateCartStateFromLocalStorage = () => {

    };

    handleUpdateMainState = object => this.setState({...object});

    render() {
        return (
            <CartContext.Provider value={{
                ...this.state,
                handleUpdateMainState: this.handleUpdateMainState,
                updateCartStateFromLocalStorage: this.updateCartStateFromLocalStorage
            }}>
                <Switch>
                    {appRoutes.map((route, key) =>
                        <Route
                            key={key}
                            exact
                            {...route}
                        />
                    )}
                </Switch>
            </CartContext.Provider>
        );
    }
}

export default withRouter(Index);

/**
 * Created by Shehz on 18-Jun-18.
 */
import React from 'react';

export default function(ComposedClass) {

    class AuthenticationCheck extends React.Component {
        state = {

        };


        componentWillMount() {
            let cachedUser = localStorage.getItem('User');

            if (cachedUser) {
                this.setState({user: JSON.parse(cachedUser)});
            }
        }

        handleLogout = () => {

        };


        handleLogin = (data) => {

        };


        updateUser = () => {

        };

        render () {

            return (
                <div>
                    <ComposedClass
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        handleLogin={this.handleLogin}
                        updateUser={this.updateUser}
                    />
                </div>
            )
        };
    }

    return AuthenticationCheck;
}

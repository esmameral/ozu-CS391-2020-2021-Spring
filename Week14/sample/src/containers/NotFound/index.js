import React from 'react';
import Header from '../../components/Header'

export default class NotFound extends React.Component {
    render() {
        return <div>
            <Header title="Not Found" />
            <p class="text-center">The link you requested is not found on this server. Please try a link from the menu.</p>
        </div>;
    }
}
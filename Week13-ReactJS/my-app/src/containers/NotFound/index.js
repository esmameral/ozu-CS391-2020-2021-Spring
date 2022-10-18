import React from 'react';
import Heading from '../../components/Heading'

export default class NotFound extends React.Component {
    render() {
        return <div>
            <Heading title="Not Found" />
            <p class="text-center">The link you requested is not found on this server. Please try a link from the menu.</p>
        </div>;
    }
}
import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

class AppView extends React.Component {

    render() {
        return (
        <div className="AppView">
            <TopBar />
            <Header />
            <Content />
        </div>
        );
    }
}

export default AppView;
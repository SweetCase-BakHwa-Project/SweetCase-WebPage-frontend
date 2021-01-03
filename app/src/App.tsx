import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import BakhwaProject from './pages/BakhwaProject';
import SweetCase from './pages/SweetCase';

const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Home} exact />
                <Route path="/sweetcase" component={SweetCase} />
                <Route path="/bakhwaproject" component={BakhwaProject} />
            </BrowserRouter>
        </div>
    );
}

export default App;
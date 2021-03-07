import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHome from './pages/Home';

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={PageHome} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;
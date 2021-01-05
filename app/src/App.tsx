import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import BakhwaProject from './pages/BakhwaProject';
import SweetCase from './pages/SweetCase';
import AlbumPage from './pages/bakhwa/AlbumPage';
import MusicSheets from './pages/bakhwa/MusicSheetsPage';
import About from './pages/bakhwa/AboutPage';

const App: React.FC = () => {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/bakhwaproject/albums" component={AlbumPage} />
                    <Route exact path="/bakhwaproject/musicsheets" component={MusicSheets} />
                    <Route exact path="/bakhwaproject/about" component={About} /> 
                     
                    <Route path="/sweetcase" component={SweetCase} />
                    <Route path="/bakhwaproject" component={BakhwaProject} />
                    <Route path="/" component={Home} exact />
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
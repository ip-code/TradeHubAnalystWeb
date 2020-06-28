import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../Layout/Header/Header';
import Navigation from '../Layout/Navigation/Navigation';
import Footer from '../Layout/Footer/Footer';
import Download from '../Pages/Download/Download';
import News from '../Pages/News/News';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Version from '../Pages/Version/Version';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navigation />
                <Switch>
                    <Route path='/' exact component={Download} />
                    <Route path='/about' component={About} />
                    <Route path='/news' component={News} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/version' component={Version} />
                </Switch>
                <Footer />
            </div>
        </Router >
    );
}

export default App;

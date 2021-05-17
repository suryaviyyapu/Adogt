import React from 'react';
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import ProfileList from "./components/ProfileList";
import Contactus from "./components/Contactus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Navigationbar />

                <Switch>
                    <Route exact path="/" component={ProfileList}/>
                    <Route path="/contactus" component={Contactus}/>
                    <Route path="/pet/:id" component={Profile}/>
                </Switch>

                <Footer />
            </div>
        </Router>
    )
};

export default App;

import Nav from './components/nav';
import Mainsection from './components/mainsection';
import React from 'react';
import Cards from './components/cards';
import Footer from './components/footer';
function App(){
    return(
        <React.Fragment>
        < Nav />
        < Mainsection />
        < Cards />
        < Footer />
        </React.Fragment>
    );
}

export default App;
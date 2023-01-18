import React from 'react';
import '../../styles/main.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const Layout = (props) => {
    return (
        <div className='col-md-12'>
            <Header />
            <main>
                <div>{props.children}</div>
            </main>
            <Footer /> 
        </div>
  );
}

export default Layout;
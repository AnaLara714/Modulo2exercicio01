import './Welcome.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Input from './components/input/Input';


const Welcome = (props) => {

  const {title, footer_desc} = props;

  return (
    <div className="Welcome">
      <Header title={title}></Header>
      <Input/>
      <Footer description={footer_desc}></Footer>
    </div>
  );
}

export default Welcome;

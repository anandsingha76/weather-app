import React from 'react';
import arrow from '../assets/arrow.webp';
import './Convertor.css';


const Convertor = () => {
  return (
    <div className='des-main'>
      <h1 className='header'>Temperature Convertor</h1>
      <input id='fahrenheit' type="number"  placeholder='Enter Fahrenheit' name='f'/>
      <img className='arrow-img' src={arrow} alt="arrow" />
      <input id='celsius' type="number" placeholder='Enter Celsius' name='c'/>
      <div className='btn-box'>
      <button className='btns' onClick={tempCon}>Convert</button>
      <button  className='btns reset-btn' onClick={clearForm}>Reset</button>
      </div>
      
    </div>

    
  )

//    function name(){
//     var a=getCot 
//     var b=
//     if(a!==""){
//     let
//     b=(parseFloat(a)-32) / 1.8
//   }
//   else{
// a=(b*1.8)+32;
//   }
//   }

    function tempCon () {
      let fahrenheit = document.getElementById('fahrenheit').value
      let celsius = document.getElementById('celsius').value

      if(fahrenheit !== '') {
         celsius = (parseFloat(fahrenheit)-32) / 1.8;
      } else {
         fahrenheit = (parseFloat(celsius) * 1.8) + 32;
      }

      document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
      document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    }

    function clearForm() {
      document.getElementById('fahrenheit').value = '';
      document.getElementById('celsius').value = '';
    }
  
}

export default Convertor;




import React from 'react';
import '../../App.css';
import {Button} from '../Button';
import {Images} from "../Images";
import './Pocetna.css';
import Sat from '../Sat';

function Pocetna(){
    return (<div>
       <div className="container">
           <Sat></Sat>
           <h1>Tretmani koje nudi pet salon:</h1>
       </div>

       <div className="container">
           <div class="row">
           {Images.map((item, index) => {
                    return (
                        <div class="content col-sm-4 text-center" key={index}>
                            <img class="img-responsive" src={item.url} alt="" width="100%"/>
                            <div>{item.opis}</div>
                            <Button onClick={() => { alert('Izabrani tretman: ' + item.opis) }} buttonStyle='btn--primary'>Izaberi tretman</Button>
                        </div>
                    )
                })}
           </div>
       </div>
       </div>
    );
}

export default Pocetna;
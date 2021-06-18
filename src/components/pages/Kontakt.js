import React from 'react';
import KontaktForma from '../../components/KontaktForma';

function Kontakt(){
    const kontakt={
        telefon: "065/2430904"
    }
    return(
        <div className="container" style={{marginTop: 2 + 'em'}}>
            <h2>U slučaju da postoji problem sa korišćenjem sajta, ovde nam možete ostaviti poruku: </h2>
            <KontaktForma/>
            <p>A možete nas i kontaktirati putem broja telefona: {kontakt.telefon} </p>
            <br></br>
        </div>
    )
}

export default Kontakt;
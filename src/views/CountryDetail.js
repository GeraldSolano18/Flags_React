import React from 'react';

export const CountryDetail = ({match}) =>{
    console.log('las propsss',match)
    return(
        <div>
            Hola soy el detalle de esta mierda {match.params.id}
        </div>
    )
}
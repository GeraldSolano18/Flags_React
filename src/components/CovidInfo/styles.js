import styled from 'styled-components'

export const CovidStyle = styled.div`


.grid_covid{
    display:grid;
    grid-template-columns:  1fr;
    gap:15px;
    margin-bottom:30px;
}

.grid_box{
    color: rgba(255, 255, 255, 0.7) ;
    text-align:center;
    font-weight:800;
    box-shadow:0px 2px 4px 1px rgba(0,0,0,0.17);
    border-radius:10px;
    height:200px;
    width:100%;
    padding:5px;
    margin-left:auto;
    margin-right:auto;
    .number{
        font-size:80px;
        margin:0;

    }
    .letras{
       
        margin:0;
        position:relative;
        bottom:10px;
    }
 
}

.uno{
    background: linear-gradient(60deg, #ef5350, #e53935);
}
.dos{
    background: linear-gradient(60deg, #26c6da, #00acc1);
}
.tres{
    background: linear-gradient(60deg, #66bb6a, #43a047);
}
.cuatro{
    background: linear-gradient(60deg, #ffa726, #fb8c00);
}

`;


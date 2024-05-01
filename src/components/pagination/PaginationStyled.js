import styled from 'styled-components'

export const PaginationBox = styled.div`
width: 100%;
min-height: 90px;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap: 10px;
margin-bottom: 20px;
`
export const PaginationButton = styled.button`
width: 85px;
height: 35px;
padding: 5px;
color: #d0cece;
background-color: #9207b7 ;
border-radius: 20px;
border: none;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 24px;
   font-weight: bold;
&:hover {
  background-color: #ba38d3;
}
&:active {
  background-color: #c2f5ff;
  border: 1px solid #d0cece;
}
&:disabled {
  background-color: #ba38d3;
}
`
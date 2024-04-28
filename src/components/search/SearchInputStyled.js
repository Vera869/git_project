import styled from 'styled-components'

export const SearchConteiner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`
export const Input = styled.input`
width: 250px;
color: #d0cece;
font-weight: bold;
border-top: none;
border-left: none;
border-right: none;
border: 1px solid #d0cece;
border-radius: 20px;
padding: 8px 8px;
margin-right: 3px;
margin-bottom: 30px;
outline: none;
text-align: center;
background-color: #9207b7 ;
&::placeholder {
   font-style: normal;
   font-weight: 400;
   font-size: 22px;
   line-height: 24px;
   letter-spacing: -0.05px;
   color: #d0cece;
 }
// &:active,
// &:hover  {
//   border: 3px solid #c2f5ff;
// }
`
//#9207b7  #c2f5ff
export const Button = styled.button`
width: 200px;
height: 42px;
color: #d0cece;
background-color: #9207b7 ;
border-radius: 20px;
margin-bottom: 20px;
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
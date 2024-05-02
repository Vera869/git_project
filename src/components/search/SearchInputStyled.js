import styled from 'styled-components'

export const SearchHeader = styled.div`
display: flex;
justify-content: center;
margin-bottom: 32px;
font-size: 52px;
color: #9207b7;
font-weight: bold;
`
export const SearchConteiner = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 32px;
// margin-bottom: 50px;
flex-wrap: wrap;
}
`
export const InputBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;
}
`
export const Input = styled.input`
width: 400px;
color: #9207b7;
font-weight: bold;
border: 1px solid #9207b7;
border-radius: 20px;
padding: 8px 8px;
margin-right: 3px;
margin-bottom: 30px;
outline-color: #9207b7;
text-align: center;
background: transparent;
&::placeholder {
   font-style: normal;
   font-weight: 400;
   font-size: 22px;
   line-height: 24px;
   letter-spacing: -0.05px;
   color: #9207b7;
 }
// &:active,
// &:hover  {
//   border: 3px solid #c2f5ff;
// }
`
export const inputError = styled.div`
color: red;
`
export const Button = styled.button`
width: 200px;
height: 42px;
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
export const SortBox = styled(InputBox)`
min-height: 126px;
justify-content: flex-start;
}
`
export const SortButton = styled.button`
width: 230px;
color: #9207b7;
font-weight: bold;
color: #d0cece;
background-color: #9207b7 ;
border-radius: 20px;
border: none;
padding: 10px 0px;
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
`
//#9207b7  #c2f5ff
export const SortList = styled.div`
position: absolute;
top: 370px;
// left: 590px;
border: 1px solid #d9b6ff;
border-radius: 20px;
background: #8215f9;
padding: 8px 10px;
width: 235px;
// height: 25px;
text-align: start;
opacity: 1;
z-index: 1;
color: #d9b6ff;
`
export const SortListItem = styled.li`
cursor: pointer;
&:hover {
  text-decoration: underline;
}
&:active {
  color: #c2f5ff;
}
`
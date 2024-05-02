import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const UserListConteiner = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-around;
   gap: 32px;
   height: auto;
   width: auto;
   padding: 40px 50px 40px 50px;
`
export const UsersTotalCount = styled.div`
color: #ba38d3;
font-size: 42px;
text-align: center;
width: 100%;
`
export const UserItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   color: #343a40;
   //width: 600px;
   border: 1px solid #9207b7;
   border-radius: 20px;
   font-weight: 400;
   font-style: normal;
   padding: 15px 30px 15px 20px;
`
export const UserImg = styled.img`
   width: 155px;
   height: 155px;
   border-radius: 50%;
   border: 1px solid #d0cece;
`
export const UserLogin = styled.h3`
   color: #ba38d3;
   font-size: 32px;
   margin: 0;
`
export const UserInfo = styled.div`
&:hover {
   cursor: pointer;
}
`
export const UserGit = styled(Link)`
  color: #495057;
&:hover {
   color: black;
   text-decoration: underline;
}
`
export const UsersLoading = styled.div`
color: #ba38d3;
font-size: 42px;
text-align: center;
height: 100px;
width: 100%;
`
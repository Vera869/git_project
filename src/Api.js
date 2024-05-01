//import React from 'react';

const host = 'https://api.github.com/search/';

export async function searchUsers(username, order, perPage, page){
   const response = await fetch(`${host}users?q=${username}+in:user&sort=repositories&order=${order}&perPage=${perPage}&page=${page}`, {
      method: "GET",
      headers: {
         "content-type": "application/json",
         "accept": "application/vnd.github+json",
      },
    })
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
    const res = response.json();
   return res
}

export async function getUserRepos (username){
   const response = await fetch(`${host}users/${username}`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();

   return data
}
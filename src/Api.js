//import React from 'react';

const host = 'https://api.github.com/search/';

export async function searchUsers(username, order, per_page, page){
   const response = await fetch(`${host}users?q=${username}+in:user&sort=repositories&order=${order}&per_page=${per_page}&page=${page}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
    const res = response.json();

   return res
}

export async function getUserRepos (username){
   const response = await fetch(`${host}users/${username}/repos`)
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();

   return data
}
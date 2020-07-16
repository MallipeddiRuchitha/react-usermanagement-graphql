 // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const fetch=require("node-fetch")
const resolvers = {
    Query: {
      //books: () => books,
      user: async ()  =>  {
        let response = await fetch('http://localhost:3000/users', {
            method: "GET",
          });
          const data = await response.json();
       return data;
    }
    },
    Mutation:{
        addUser: async (_,{name,email})  =>  {
            const user={name: name,email:email};
           // const title2=title1
            let response = await fetch('http://localhost:3000/users', {
                 method: "POST",
                 headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },                  
                 body: JSON.stringify(user ),                 
               });
               //console.log(title);
               const data = await response.json();
               console.log(data);
            return data; 
         },

         editUser: async (_,{id,name,email})  =>  {
            const user={id:id,name: name,email:email};
           // const title2=title1
           const url="http://localhost:3000/users/"+id;
            let response = await fetch(url, {
                 method: "PUT",
                 headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  
                 body: JSON.stringify(user),
                 
               });
               console.log("|||||",JSON.stringify(user));
               const data = await response.json();
               console.log(user);
            return data; 
         },
         deleteUser: async (_,{id})  =>  {
            //const user={id:id,name: name,email:email};
           // const title2=title1
           const url="http://localhost:3000/users/"+id;
            let response = await fetch(url, {
                 method: "DELETE",
                 headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  
                 //body: JSON.stringify(user),
                 
               });
               //console.log("|||||",JSON.stringify(user));
              // const data = await response.json();
               console.log(response);
               if(response.statusText==='OK')
            return "deleted"; 
            else
            return "error";
         },
 
        
    }
    
    
  };
  module.exports=resolvers;
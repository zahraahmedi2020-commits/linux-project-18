fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(Response=>Response.json())
.then(data=>{
    document.body.innerHTML+=`<h2>${data.title}</h2>
    <p>${data.body}</p>`;
})
.catch(error=>{console.log("Error:",error)});
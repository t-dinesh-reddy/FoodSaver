// API creates an interface between the backend and frontend 

// gets all of the items in the database
// fetching data from the backend using the PORT = 4000
export const getItems = () => fetch("https://college-food-saver-app.ue.r.appspot.com/").then(res => res.json())

// creates a item in a database 
export const createItem = (item) => fetch("https://college-food-saver-app.ue.r.appspot.com/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(item)
})  

// creates a item in a database 
export const createUser = (user) => fetch("https://college-food-saver-app.ue.r.appspot.com/signup", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})

// login a user database 
export const loginUser = (email) => fetch(`https://college-food-saver-app.ue.r.appspot.com/login/${email}`)
.then(res => {
  return res.json();
  })

// can update a single item 
export const updateItem = (item, id) => fetch(`https://college-food-saver-app.ue.r.appspot.com/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(item)
})  

export const deleteItem = (id) => fetch(`https://college-food-saver-app.ue.r.appspot.com/item/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
})
// get a single item by providing a id 
export const getItem = (id) => fetch(`https://college-food-saver-app.ue.r.appspot.com/${id}`).then(res => res.json())
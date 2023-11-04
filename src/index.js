import React from "react";
import ReactDOM from "react-dom";
//Step 1. Import react-router functions
import { BrowserRouter, Route} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

//Step 2. Change so router is coordinating what is displayed
//Let's add our about and login routes to our router
// If we had a header component we wanted to be displayed no matter which route was hit, this behavior would be desirable. 
// Otherwise, there are several ways to fix this. 
// One way to give more predictable behavior to our Routes is to use the Switch component:

ReactDOM.render(
  <BrowserRouter>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  </BrowserRouter>,
 document.getElementById("root"));

 //I*n the code above there are two components that we're importing from React Router. We use them in turn:
//  The BrowserRouter component is the base for our application's routing. 
//  It is where we declare how React Router will be used. Notice that nested inside the BrowserRouter component we use the Route component.
//   The Route component has one prop in our example: path.
// *The Route component is in charge of saying: "when the URL matches this specified path, render this child component." 
// This handles the conditional rendering based on the URL that we described earlier.



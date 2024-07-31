

import { useEffect } from 'react'
import './App.css'

export default function App() {
 
let newCompony={} ;
function createLocalStorage(){
    localStorage.setItem("currentUser", "Chetan1");
    localStorage.setItem("mobileNo", "9763724252");
    localStorage.setItem("CollegeName", "MIT College");
    
}

  function removeMobileNoFromLocalStorage() {
    localStorage.removeItem("mobileNo");
    console.log("in local storage")
  }
  function clearLocalstorage() {
    localStorage.clear();
  }

  function getAttributeLength() {
    console.log(localStorage.length)
  }
  function getCurrentUserPosition() {
    console.log(localStorage.currentUser())
  }
  //----------------------------------------------------------- 
  function createSessionStorage(){
     sessionStorage.setItem("compony","infosys");
     sessionStorage.setItem("address","hinjewadi");
     sessionStorage.setItem("empid","1775589");
  }
   function showSessionSorage(){
      newCompony.compony = sessionStorage.getItem("compony")
      newCompony.address = sessionStorage.getItem("address")
      newCompony.empid = sessionStorage.getItem("empid")
      return newCompony;
  }
  function getLengthOfSessionStorage(){
     console.log(sessionStorage.length)
  }
  function removeEmpidFromSessionStorage(){
    sessionStorage.removeItem("empid")
    console.log(sessionStorage.getItem("address"))
    console.log(sessionStorage.getItem("compony"))
  }
  function clearSessionStorage(){
    sessionStorage.clear();
    newCompony = {};
  }
  console.log("out   : "+showSessionSorage().address)
 //console.log("Out of the function "+newCompony)
  return (
    <>
      <div className='parentDiv'>
        <h3>welcome to MIT college Of Engineering</h3>

        <div className='formContainer'>

          <label htmlFor="firstname">UserName : </label>
          <input type='text' id="firstname" title='enter your username' placeholder='enter your password' />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input type='email' id="email" title="enter your primary email" placeholder='xyz@domain.com' />
          <br />
          <br />
          <label htmlFor="profile">Upload Your Photo : </label>
          <input type='file' id="profle" title="upload your photo" captute="true" />
          <br />
          <br />
          <label htmlFor="mobileNo">Mobile No : </label>
          <input type='tel' id="mobileNo" title='enter your mobile no' placeholder='enter your mobile no' />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input type='passwoed' id="password" title="enter password" />
          <br />
          <br />
          <input type="submit" className='btn' />
        </div>
        <div className='buttonAction'>
          <h2>LocalStorage Demonstration : </h2>
          <button onClick={createLocalStorage}>Create Current user</button>
          <button onClick={removeMobileNoFromLocalStorage}>Remove Mobile number</button>
          <button onClick={getAttributeLength}>Get Length</button>
          <button onClick={getCurrentUserPosition}>Get Position</button>
          <button onClick={clearLocalstorage}>Clear Localstorage</button>

        </div>
        <div className='sessionStorage'>
          <h3>Session storage</h3>
          <button onClick={createSessionStorage}>Create user </button>
          <button onClick={showSessionSorage}> Show User </button>
           <button onClick={getLengthOfSessionStorage}> Length of Session storage</button>
          <button onClick={removeEmpidFromSessionStorage}>Remove User</button>
          <button onClick={clearSessionStorage}>Clear SessionStorage</button> 
        </div>
       <p>compony name in session :{showSessionSorage().compony}</p>
       <p>compony address in session : {showSessionSorage().address}</p>
        <p>compony emp in session : {showSessionSorage().empid}</p> 
      </div>
    </>
  )

}



import * as React from 'react';
import './App.css';
import InputFeild from "./components/InputFeild"
import Header from "./components/Header"
import Footer from "./components/Footer"
import List from "./components/List"
import {Member} from "./components/model"


const App: React.FC = () => {
  const [member, setMember] = React.useState<string>("");
 const [members, setMembers] = React.useState<Member[]>([]);

 const handleAdd = (e:React.FormEvent) =>
 {
  
   if (member){
    setMembers([{id:Date.now(), member}]);
    fetch('http://localhost:8000/members', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({member})
    }).then(()=>console.log("new member added"))
    setMember("");
   }
  
};
React.useEffect(()=>{
  fetch('http://localhost:8000/members')
  .then(res =>{
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    setMembers(data);
  })
}, []);

console.log(members)
  return (
    <div className="App">
      
      <Header />

      <main>
  <h2>Ajouter un(e) Argonaute</h2>
 
  <InputFeild member={member} setMember={setMember} handleAdd={handleAdd}/>
 
  <h2>Membres de l'équipage</h2>
  <List members={members} setMembers={setMembers} />
</main>
<Footer />

    </div>
  );
}

export default App;

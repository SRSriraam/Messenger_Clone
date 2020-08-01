import React ,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input, Card, CardContent, Typography } from '@material-ui/core';
import Message from './message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import './App.css';
import  database  from './firebase';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


function App() {

  const [input,setInput] = useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  //UseState = variable in react
  //useEffect = run code on a condition in react

  useEffect(()=>{//all of the document in the databse wrap into the snapshot parameter
    //snapshot.docs determine the document collection in the database
    database.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
       setMessages(snapshot.docs.map(doc=>({id:doc.id,message :doc.data()})))
    })
  },[])

  useEffect(() => {
    //runcode here 
    //if its blank inside [] this code runs ones when the app component loads
    // if it have a variable like input it will run multiple times
    //const name= prompt('Please enter your name')
    setUsername(prompt("Please Enter your name"))
  },[])//condition

  console.log(input)
  console.log(messages)
  const sendMessage=(event)=>{
    event.preventDefault();

   database.collection('messages').add({
     message:input,
     username:username,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })  
   setInput('');
  }  
return (
    <div className="App">
       <div class="shadow-lg  mb-5 bg-white rounded">
          <nav class="navbar navbar-dark bg-dark">
              <div className='custom-nav'>Messenger-Clone 2.0.</div>
          </nav>
        </div>
      <h1>Welcome {username}</h1>
      <form className='app__form'>
        <FormControl className='app__formControl'>
            <Input className='app__input' placeholder='Enter Your Message' id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)}/>
            <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon/>
            </IconButton>
        </FormControl>
      </form>     
     <FlipMove>
     {
        messages.map(({id,message}) =>(
          <Message key={id} username ={username} message={message}/>
        ))
      }
     </FlipMove>
    </div>
  );
}

export default App;

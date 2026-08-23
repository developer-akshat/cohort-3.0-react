import React, {useState} from 'react'
import Form from "./components/Form.jsx";

const App = () => {
  const [Name, setName] = useState("")
  const [email, setEmail] = useState("");
  
  return (
    <div className="bg-gray-700 h-screen">
      <Form 
      Name={Name}
      setName={setName}
       email={email}
      setEmail={setEmail}
      />
    </div>
  )
}

export default App

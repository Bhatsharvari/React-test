import React from 'react';
import TableComponent from './TableComponent';
import ContactForm from './ContactForm';

const jsonData = [
  { id: 1, name: 'User1', email:"user1@gmail.com",phone : "+918827809664",  sate:"Madhya Pardesh"},
  { id: 2, name: 'User2', email:"user2@gmail.com",phone : "+918827809665",  sate:"Uttar Pardesh"},
  { id: 3, name: 'User3', email:"user3@gmail.com",phone : "+918827809665",  sate:"Madhya Pardesh"}
 
];

function App() {
  return (
    <div className="App">
      <h1>Table Example</h1>
      <TableComponent data={jsonData} />
      <ContactForm data={jsonData}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import HobbiesList from './components/HobbiesList';
import HobbyForm from './components/HobbyForm';
import './App.css';

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [editHobbyIndex, setEditHobbyIndex] = useState(null);
  const [editHobbyText, setEditHobbyText] = useState('');

  const addHobby = (hobby) => {
    setHobbies([...hobbies, hobby]);
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  const editHobby = (index, newHobby) => {
    const newHobbies = hobbies.map((hobby, i) => (i === index ? newHobby : hobby));
    setHobbies(newHobbies);
    setEditHobbyIndex(null);
  };

  const startEditing = (index) => {
    setEditHobbyIndex(index);
    setEditHobbyText(hobbies[index]);
  };

  return (
    <div className="app">
      <h1>Lista de Hobbies</h1>
      <HobbyForm addHobby={addHobby} />
      <HobbiesList
        hobbies={hobbies}
        removeHobby={removeHobby}
        startEditing={startEditing}
        editHobbyIndex={editHobbyIndex}
        editHobbyText={editHobbyText}
        setEditHobbyText={setEditHobbyText}
        editHobby={editHobby}
      />
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HobbyForm({ addHobby }) {
  const [hobby, setHobby] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hobby) {
      addHobby(hobby);
      setHobby('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hobby-form">
      <input
        type="text"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
        placeholder="Adicionar hobby"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

HobbyForm.propTypes = {
  addHobby: PropTypes.func.isRequired,
};

export default HobbyForm;

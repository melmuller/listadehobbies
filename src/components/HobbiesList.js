import React from 'react';
import PropTypes from 'prop-types';

function HobbiesList({
  hobbies,
  removeHobby,
  startEditing,
  editHobbyIndex,
  editHobbyText,
  setEditHobbyText,
  editHobby
}) {
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editHobby(editHobbyIndex, editHobbyText);
  };

  return (
    <div className="hobbies-list">
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {editHobbyIndex === index ? (
              <form onSubmit={handleEditSubmit} className="edit-form">
                <input
                  type="text"
                  value={editHobbyText}
                  onChange={(e) => setEditHobbyText(e.target.value)}
                />
                <button type="submit">Salvar</button>
              </form>
            ) : (
              <>
                {hobby}
                <div className="buttons">
                  <button onClick={() => startEditing(index)}>Editar</button>
                  <button onClick={() => removeHobby(index)}>Remover</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

HobbiesList.propTypes = {
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeHobby: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  editHobbyIndex: PropTypes.number,
  editHobbyText: PropTypes.string,
  setEditHobbyText: PropTypes.func.isRequired,
  editHobby: PropTypes.func.isRequired,
};

export default HobbiesList;

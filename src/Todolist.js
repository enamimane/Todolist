import React, { useState } from 'react';
import { Button, CardContent, Typography, TextField } from '@mui/material';
import { Delete, Done } from '@mui/icons-material';
import './styles.css';

function Todolist() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');
  const [nouvelleDescription, setNouvelleDescription] = useState('');

  const ajouterTache = () => {
    if (nouvelleTache.trim() !== '' && nouvelleDescription.trim() !== '') {
      setTaches([...taches, { nom: nouvelleTache, description: nouvelleDescription, terminee: false }]);
      setNouvelleTache('');
      setNouvelleDescription('');
    }
  };

  const supprimerTache = (index) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches.splice(index, 1);
    setTaches(nouvellesTaches);
  };

  const basculerTerminee = (index) => {
    const nouvellesTaches = [...taches];
    nouvellesTaches[index].terminee = !nouvellesTaches[index].terminee;
    setTaches(nouvellesTaches);
  };

  return (
    <div className='to'>
      <h1>Todo-List</h1>
      <div className="container">
        <div className="new-task-input">
          <TextField
            label="Nom de la tâche"
            variant="outlined"
            value={nouvelleTache}
            onChange={(e) => setNouvelleTache(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={nouvelleDescription}
            onChange={(e) => setNouvelleDescription(e.target.value)}
          />
          <Button onClick={ajouterTache} variant="contained" color="success">
            Ajouter
          </Button>
        </div>

        <div className="cards-container">
          {taches.map((tache, index) => (
            <div key={index} className="card">
              <CardContent className="card-content">
                <div className="task-info">
                  <Typography variant="body1" className={`task-name ${tache.terminee ? 'line-through' : ''}`}>
                    <strong>{tache.nom}</strong>
                  </Typography>
                  <Typography variant="body2" className={`task-description ${tache.terminee ? 'line-through' : ''}`}>
                    {tache.description}
                  </Typography>
                </div>
                <div className="task-buttons">
                  <Button onClick={() => basculerTerminee(index)} style={{ color: tache.terminee ? 'red' : 'black' }}>
                    <Done />
                  </Button>
                  <Button onClick={() => supprimerTache(index)} style={{ color: 'red' }}>
                    <Delete />
                  </Button>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;

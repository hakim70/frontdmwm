import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Vérifier les champs email et mot de passe
    if (email !== confirmEmail) {
      setError('Les emails ne correspondent pas');
      return;
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    const signupData = {
      username: name,
      email: email,
      password: password,
    };

    console.log(signupData)

    try {
      // Assurez-vous que l'URL correspond à votre API backend

      const response = await axios.post('http://localhost:3001/auth/signup', signupData);
      setSuccess('Inscription réussie ! Bienvenue 🎉');
      console.log('Inscription réussie :', response.data);

      // Réinitialiser le formulaire
      setName('');
      setEmail('');
      setConfirmEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (error.response) {
        console.log('Erreur de réponse:', error.response); // Ajout pour le débogage
        setError(error.response.data.message || 'Échec de l\'inscription. Veuillez réessayer.');
      } else {
        // Erreur de connexion au serveur
        setError('Problème de connexion au serveur. Veuillez réessayer plus tard.');
      }
    }
  };

  return (
    <div className="signup-form">
      <h2>Inscrivez-vous gratuitement</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Confirmer l'Email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le Mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className='signup-button'> S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUpForm;

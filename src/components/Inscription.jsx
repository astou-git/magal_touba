import React, { useState } from 'react';
import heroImage from '../assets/main-mosque.webp';
import { useNavigate } from 'react-router-dom';

function Inscription() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    ville_origine: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Le nom complet est requis.';
    if (!form.email.trim()) newErrors.email = 'L\'email est requis.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email invalide.';
    if (!form.password.trim()) newErrors.password = 'Le mot de passe est requis.';
    else if (form.password.length < 6) newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères.';
    if (!form.telephone.trim()) newErrors.telephone = 'Le téléphone est requis.';
    else if (!/^.{6,20}$/.test(form.telephone)) newErrors.telephone = 'Numéro invalide.';
    if (!form.ville_origine.trim()) newErrors.ville_origine = 'La ville d\'origine est requise.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        console.log('Données envoyées:', form);
        const res = await fetch('http://127.0.0.1:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        console.log('Réponse brute:', res);
        if (!res.ok) {
          let errData;
          try {
            errData = await res.json();
            console.log('Erreur API:', errData);
          } catch (jsonErr) {
            console.log('Erreur parsing JSON:', jsonErr);
          }
          setStatus('Erreur: ' + (errData?.message || 'Inscription impossible.'));
        } else {
          const successData = await res.json();
          console.log('Réponse succès:', successData);
          setStatus('Inscription réussie !');
          setForm({ name: '', email: '', password: '', telephone: '', ville_origine: '' });
        }
      } catch (err) {
        console.log('Erreur réseau ou serveur:', err);
        setStatus('Erreur réseau ou serveur.');
      }
    }
  };

  return (
    <section
      className="hero min-h-screen"
      style={{
          backgroundImage:
            `url(${heroImage})`,
            
        }}
    >
      <div className="hero-overlay  bg-opacity-40"></div>
      <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold mb-2">Inscrivez-vous au Magal</h1>
          <p className="py-6 text-lg">
            Participez au Grand Magal de Touba : renseignez vos informations pour recevoir les notifications, consulter les horaires et faciliter votre pèlerinage.
          </p>
          <button
            className="btn btn-outline btn-primary mt-2"
            onClick={() => navigate('/')}
          >
            Retour
          </button>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} noValidate>
              <fieldset className="fieldset">
                <label className="label">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  className={`input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="text-error text-xs">{errors.name}</span>}

                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`input ${errors.email ? 'input-error' : ''}`}
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="text-error text-xs">{errors.email}</span>}

                <label className="label">Téléphone</label>
                <input
                  type="text"
                  name="telephone"
                  className={`input ${errors.telephone ? 'input-error' : ''}`}
                  placeholder="Téléphone"
                  value={form.telephone}
                  onChange={handleChange}
                  required
                />
                {errors.telephone && <span className="text-error text-xs">{errors.telephone}</span>}

                <label className="label">Ville d'origine</label>
                <input
                  type="text"
                  name="ville_origine"
                  className={`input ${errors.ville_origine ? 'input-error' : ''}`}
                  placeholder="Ville d'origine"
                  value={form.ville_origine}
                  onChange={handleChange}
                  required
                />
                {errors.ville_origine && <span className="text-error text-xs">{errors.ville_origine}</span>}
                <label className="label">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  className={`input ${errors.password ? 'input-error' : ''}`}
                  placeholder="Mot de passe"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="text-error text-xs">{errors.password}</span>}

                <button className="btn btn-neutral mt-4 w-full" type="submit">S'inscrire</button>
                {status && <div className="mt-4 text-center text-info">{status}</div>}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inscription;

import React, { useState } from 'react';
import heroImage from '../assets/main-mosque.webp';
import { useNavigate } from 'react-router-dom';

function Inscription() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nom: '',
    email: '',
    tel: '',
    ville: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.nom.trim()) newErrors.nom = 'Le nom complet est requis.';
    if (!form.email.trim()) newErrors.email = 'L\'email est requis.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email invalide.';
    if (!form.tel.trim()) newErrors.tel = 'Le téléphone est requis.';
    else if (!/^\d{9,15}$/.test(form.tel.replace(/\D/g, ''))) newErrors.tel = 'Numéro invalide.';
    if (!form.ville.trim()) newErrors.ville = 'La ville de départ est requise.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Inscription réussie !');
      // Ici, envoyer les données au backend ou API
    }
  };

  return (
    <section
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-40"></div>
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
                  name="nom"
                  className={`input ${errors.nom ? 'input-error' : ''}`}
                  placeholder="Nom complet"
                  value={form.nom}
                  onChange={handleChange}
                  required
                />
                {errors.nom && <span className="text-error text-xs">{errors.nom}</span>}

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
                  type="tel"
                  name="tel"
                  className={`input ${errors.tel ? 'input-error' : ''}`}
                  placeholder="Téléphone"
                  value={form.tel}
                  onChange={handleChange}
                  required
                />
                {errors.tel && <span className="text-error text-xs">{errors.tel}</span>}

                <label className="label">Ville de départ</label>
                <input
                  type="text"
                  name="ville"
                  className={`input ${errors.ville ? 'input-error' : ''}`}
                  placeholder="Ville de départ"
                  value={form.ville}
                  onChange={handleChange}
                  required
                />
                {errors.ville && <span className="text-error text-xs">{errors.ville}</span>}

                <button className="btn btn-neutral mt-4 w-full" type="submit">S'inscrire</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inscription;

import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!form.email.trim()) newErrors.email = 'L\'email est requis.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Email invalide.';
    if (!form.message.trim()) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Simulate sending email (replace with real API)
      setStatus('Envoi en cours...');
      setTimeout(() => {
        setStatus('Message envoyé avec succès !');
        setForm({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section data-theme="light" className="py-16 bg-base-200">
      <div className="container mx-auto max-w-xl bg-base-100 rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 text-center">Contactez-nous</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Une question, une demande ou un besoin d'information sur le Magal de Touba ? Envoyez-nous un message et nous vous répondrons rapidement.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="label">Nom</label>
            <input
              type="text"
              name="name"
              className={`input w-full ${errors.name ? 'input-error' : ''}`}
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="text-error text-xs">{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className={`input w-full ${errors.email ? 'input-error' : ''}`}
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="text-error text-xs">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label className="label">Message</label>
            <textarea
              name="message"
              className={`textarea w-full ${errors.message ? 'textarea-error' : ''}`}
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
            {errors.message && <span className="text-error text-xs">{errors.message}</span>}
          </div>
          <button className="btn btn-primary w-full" type="submit">Envoyer</button>
          {status && <div className="mt-4 text-green-600 text-center">{status}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;

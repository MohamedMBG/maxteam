import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutV1 from '../../components/layouts/LayoutV1';
import DarkClass from '../../components/classes/DarkClass';

const initialForm = { title: '', description: '', category: '', date: '', client: '', imageLink: '', imageFile: null as File | null, imageUrl: '' };

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState<typeof initialForm>(initialForm);
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid credentials');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'imageLink') {
      setImagePreview(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(f => ({ ...f, imageFile: file, imageUrl: reader.result as string, imageLink: '' }));
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // At least one image required
    if (!form.imageLink && !form.imageUrl) {
      setMessage('Please provide an image link or upload an image.');
      return;
    }
    // Simulate adding to portfolio (localStorage)
    const existing = JSON.parse(localStorage.getItem('portfolioV2') || '[]');
    const newWork = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      category: form.category,
      date: form.date,
      client: form.client,
      image: form.imageLink ? form.imageLink : form.imageUrl
    };
    localStorage.setItem('portfolioV2', JSON.stringify([...existing, newWork]));
    setForm(initialForm);
    setImagePreview('');
    setMessage('New work added!');
  };

  if (!loggedIn) {
    return (
      <LayoutV1>
        <DarkClass />
        <div className="admin-area default-padding position-relative" style={{ minHeight: '100vh' }}>
          <div className="shape-left" style={{ position: 'absolute', left: 0, top: 0, width: 200, height: 400, background: `url(/assets/img/shape/1.jpg) no-repeat`, backgroundSize: 'cover', opacity: 0.3, zIndex: 0 }} />
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="site-heading text-center mb-4">
                  <h2 className="title text-light">Admin Login</h2>
                </div>
                <form onSubmit={handleLogin} className="contact-form bg-dark p-4 rounded shadow">
                  <div className="form-group mb-3">
                    <label className="text-light">Username</label>
                    <input name="username" value={username} onChange={e => setUsername(e.target.value)} className="form-control bg-dark text-light border-secondary" />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-light">Password</label>
                    <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control bg-dark text-light border-secondary" />
                  </div>
                  <button type="submit" className="btn btn-md btn-light w-100">Login</button>
                  {message && <div className="alert alert-danger mt-3">{message}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </LayoutV1>
    );
  }

  return (
    <LayoutV1>
      <DarkClass />
      <div className="admin-area default-padding position-relative" style={{ minHeight: '100vh' }}>
        <div className="shape-left" style={{ position: 'absolute', left: 0, top: 0, width: 200, height: 400, background: `url(/assets/img/shape/1.jpg) no-repeat`, backgroundSize: 'cover', opacity: 0.3, zIndex: 0 }} />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center mb-4">
                <h2 className="title text-light">Add New Portfolio Work</h2>
              </div>
              <form onSubmit={handleSubmit} className="contact-form bg-dark p-4 rounded shadow">
                <div className="form-group mb-3">
                  <label className="text-light">Title</label>
                  <input name="title" value={form.title} onChange={handleChange} className="form-control bg-dark text-light border-secondary" required placeholder="e.g. Creative Website" />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Description</label>
                  <textarea name="description" value={form.description} onChange={handleChange} className="form-control bg-dark text-light border-secondary" required placeholder="e.g. A modern web project..." />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Category</label>
                  <input name="category" value={form.category} onChange={handleChange} className="form-control bg-dark text-light border-secondary" required placeholder="e.g. Marketing" />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Date</label>
                  <input name="date" value={form.date} onChange={handleChange} className="form-control bg-dark text-light border-secondary" required placeholder="e.g. April, 2024" />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Client</label>
                  <input name="client" value={form.client} onChange={handleChange} className="form-control bg-dark text-light border-secondary" required placeholder="e.g. Acme Corp" />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Image (Online Link)</label>
                  <input name="imageLink" value={form.imageLink} onChange={handleChange} className="form-control bg-dark text-light border-secondary" placeholder="e.g. https://... or leave blank to upload" />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Or Upload Image</label>
                  <input name="imageFile" type="file" accept="image/*" onChange={handleFileChange} className="form-control bg-dark text-light border-secondary" />
                </div>
                {imagePreview && (
                  <div className="mb-3 text-center">
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: 200, maxHeight: 200, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                  </div>
                )}
                <button type="submit" className="btn btn-md btn-light w-100">Add Work</button>
                {message && <div className="alert alert-success mt-3">{message}</div>}
              </form>
              <button className="btn btn-md btn-outline-light w-100 mt-3" onClick={() => { setLoggedIn(false); setUsername(''); setPassword(''); }}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
};

export default AdminPage; 
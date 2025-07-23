import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutV1 from '../../components/layouts/LayoutV1';
import DarkClass from '../../components/classes/DarkClass';

const initialForm = {
  title: '',
  description: '',
  category: '',
  date: '',
  client: '',
  imageLinks: [''],
  imageFiles: [] as File[],
  imageUrls: [] as string[]
};

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
  };

  const handleLinkChange = (index: number, value: string) => {
    const links = [...form.imageLinks];
    links[index] = value;
    setForm({ ...form, imageLinks: links });
    setImagePreview(value);
  };

  const addLinkField = () => setForm({ ...form, imageLinks: [...form.imageLinks, ''] });
  const removeLinkField = (i: number) => {
    const links = [...form.imageLinks];
    links.splice(i, 1);
    setForm({ ...form, imageLinks: links });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      const readers = files.map(file => {
        return new Promise<string>(res => {
          const reader = new FileReader();
          reader.onloadend = () => res(reader.result as string);
          reader.readAsDataURL(file);
        });
      });
      Promise.all(readers).then(urls => {
        setForm(f => ({ ...f, imageFiles: files, imageUrls: urls }));
        setImagePreview(urls[0]);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const links = form.imageLinks.filter(l => l.trim() !== '');
    const images = [...links, ...form.imageUrls];
    if (images.length === 0) {
      setMessage('Please provide an image link or upload an image.');
      return;
    }
    const existing = JSON.parse(localStorage.getItem('portfolioV2') || '[]');
    const newWork = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      category: form.category,
      date: form.date,
      client: form.client,
      images,
      image: images[0]
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
          <div className="shape-left" style={{ 
            position: 'absolute', 
            left: 0, 
            top: 0, 
            width: 200, 
            height: 400, 
            background: 'url(/assets/img/shape/1.jpg) no-repeat', 
            backgroundSize: 'cover', 
            opacity: 0.3, 
            zIndex: 0 
          }} />
          <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="site-heading text-center mb-4">
                  <h2 className="title text-light">Admin Login</h2>
                </div>
                <form onSubmit={handleLogin} className="contact-form bg-dark p-4 rounded shadow">
                  <div className="form-group mb-3">
                    <label className="text-light">Username</label>
                    <input 
                      name="username" 
                      value={username} 
                      onChange={e => setUsername(e.target.value)} 
                      className="form-control bg-dark text-light border-secondary" 
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-light">Password</label>
                    <input 
                      name="password" 
                      type="password" 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      className="form-control bg-dark text-light border-secondary" 
                    />
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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center mb-4">
                <h2 className="title text-light">Add New Portfolio Work</h2>
              </div>
              <form onSubmit={handleSubmit} className="contact-form bg-dark p-4 rounded shadow">
                <div className="form-group mb-3">
                  <label className="text-light">Title</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={handleChange} 
                    className="form-control bg-dark text-light border-secondary" 
                    required 
                    placeholder="e.g. Creative Website" 
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Description</label>
                  <textarea 
                    name="description" 
                    value={form.description} 
                    onChange={handleChange} 
                    className="form-control bg-dark text-light border-secondary" 
                    required 
                    placeholder="e.g. A modern web project..." 
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Category</label>
                  <input 
                    name="category" 
                    value={form.category} 
                    onChange={handleChange} 
                    className="form-control bg-dark text-light border-secondary" 
                    required 
                    placeholder="e.g. Marketing" 
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Date</label>
                  <input 
                    name="date" 
                    value={form.date} 
                    onChange={handleChange} 
                    className="form-control bg-dark text-light border-secondary" 
                    required 
                    placeholder="e.g. April, 2024" 
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="text-light">Client</label>
                  <input 
                    name="client" 
                    value={form.client} 
                    onChange={handleChange} 
                    className="form-control bg-dark text-light border-secondary" 
                    required 
                    placeholder="e.g. Acme Corp" 
                  />
                </div>
                {form.imageLinks.map((link, idx) => (
                  <div className="form-group mb-3" key={idx}>
                    <label className="text-light">{`Image Link ${idx + 1}`}</label>
                    <div className="d-flex">
                      <input 
                        value={link} 
                        onChange={e => handleLinkChange(idx, e.target.value)} 
                        className="form-control bg-dark text-light border-secondary" 
                        placeholder="e.g. https://..." 
                      />
                      {form.imageLinks.length > 1 && (
                        <button type="button" className="btn btn-sm btn-danger ms-2" onClick={() => removeLinkField(idx)}>
                          &times;
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <button type="button" onClick={addLinkField} className="btn btn-sm btn-outline-light mb-3">
                  Add Link
                </button>
                <div className="form-group mb-3">
                  <label className="text-light">Upload Images</label>
                  <input 
                    name="imageFiles" 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleFileChange} 
                    className="form-control bg-dark text-light border-secondary" 
                  />
                </div>
                {(form.imageUrls.length > 0 || form.imageLinks.some(l => l)) && (
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {form.imageLinks.filter(l => l).map((l, i) => (
                      <img 
                        key={`link-${i}`} 
                        src={l} 
                        alt="Preview" 
                        style={{ maxWidth: 100, maxHeight: 100, borderRadius: 8 }} 
                      />
                    ))}
                    {form.imageUrls.map((url, i) => (
                      <img 
                        key={`file-${i}`} 
                        src={url} 
                        alt="Preview" 
                        style={{ maxWidth: 100, maxHeight: 100, borderRadius: 8 }} 
                      />
                    ))}
                  </div>
                )}
                <button type="submit" className="btn btn-md btn-light w-100">
                  Add Work
                </button>
                {message && <div className="alert alert-success mt-3">{message}</div>}
              </form>
              <button 
                className="btn btn-md btn-outline-light w-100 mt-3" 
                onClick={() => { 
                  setLoggedIn(false); 
                  setUsername(''); 
                  setPassword(''); 
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutV1>
  );
};

export default AdminPage;
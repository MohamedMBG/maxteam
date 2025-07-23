import { useState } from 'react';
import DarkClass from '../../components/classes/DarkClass';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    imageFile: null as File | null,
    imagePreview: '',
    category: '',
    client: '',
    date: '',
    link: '',
  });
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid credentials.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        imageFile: file,
        imagePreview: URL.createObjectURL(file),
        imageUrl: '', // Clear URL if uploading
      }));
    }
  };

  const handleImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      imageUrl: e.target.value,
      imageFile: null,
      imagePreview: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the new project to a backend or update state
    alert('Project added!\n' + JSON.stringify({ ...form, imageFile: form.imageFile ? form.imageFile.name : undefined }, null, 2));
    setForm({ title: '', description: '', imageUrl: '', imageFile: null, imagePreview: '', category: '', client: '', date: '', link: '' });
  };

  if (!isLoggedIn) {
    return (
      <>
        <DarkClass />
        <div className="container default-padding" style={{ maxWidth: 400 }}>
          <div className="contact-form-style-one">
            <h2 className="title">Admin Login</h2>
            <form className="contact-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              {message && <div style={{ color: 'red', marginBottom: 10 }}>{message}</div>}
              <button type="submit" className="btn btn-theme effect">Login</button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <DarkClass />
      <div className="container default-padding" style={{ maxWidth: 700 }}>
        <div className="contact-form-style-one">
          <h2 className="title">Add New Project</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className="form-control" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className="form-control" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea className="form-control" name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" className="form-control" name="client" placeholder="Client" value={form.client} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="date" className="form-control" name="date" placeholder="Date" value={form.date} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input type="text" className="form-control" name="link" placeholder="Project Link" value={form.link} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ fontWeight: 500 }}>Project Image</label>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <input type="text" className="form-control" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleImageUrl} style={{ maxWidth: 300 }} />
                    <span style={{ alignSelf: 'center' }}>or</span>
                    <input type="file" accept="image/*" className="form-control" onChange={handleImageFile} style={{ maxWidth: 300 }} />
                  </div>
                  {form.imagePreview && (
                    <div style={{ marginTop: 16 }}>
                      <img src={form.imagePreview} alt="Preview" style={{ maxWidth: 200, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group full-width submit">
                  <button className="btn btn-theme effect" type="submit">Add Project</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage; 
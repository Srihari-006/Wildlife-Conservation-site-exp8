import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

const images = {
  hero: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=85',
  elephant: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
  bird: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=80',
  about: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1500&q=85',
};

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const conservationCards = [
  {
    number: '01',
    title: 'Protect endangered species',
    text: 'Support science-led action that gives threatened wildlife room and time to recover.',
    image: images.elephant,
    alt: 'Elephant standing in a natural habitat',
  },
  {
    number: '02',
    title: 'Conserve living forests',
    text: 'Healthy forests connect habitats, shelter biodiversity, and sustain local communities.',
    image: images.forest,
    alt: 'Sunlight reaching through a dense green forest',
  },
  {
    number: '03',
    title: 'Make awareness matter',
    text: 'Share knowledge and help more people turn care for nature into lasting action.',
    image: images.bird,
    alt: 'Wild bird perched among branches',
  },
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="WildGuard home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>Wild<span className="brand-light">Guard</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="button button-small button-light" to="/register" onClick={() => setMenuOpen(false)}>
            Join us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand footer-brand" to="/">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>Wild<span className="brand-light">Guard</span></span>
        </Link>
        <p>For a world where wildlife and people thrive together.</p>
        <Link className="footer-link" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} WildGuard</span>
        <span>Care for the wild. Protect our shared home.</span>
      </div>
    </footer>
  );
}

function PageFrame({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return <>{children}</>;
}

function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function InfoCard({ card }) {
  return (
    <article className="info-card">
      {card.image && <img src={card.image} alt={card.alt} loading="lazy" />}
      <div className="info-card-copy">
        <span className="card-number">{card.number}</span>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </article>
  );
}

function Home() {
  return (
    <main>
      <section className="hero" style={{ '--hero-image': `url("${images.hero}")` }}>
        <div className="hero-content">
          <p className="eyebrow eyebrow-light">A future worth protecting</p>
          <h1>Protect wildlife.<br /><em>Preserve our planet.</em></h1>
          <p className="hero-description">Every species has a place in the story of our planet. Together, we can protect the wild places and wildlife that make it extraordinary.</p>
          <div className="hero-actions">
            <Link className="button button-lime" to="/register">Become a volunteer <span aria-hidden="true">↗</span></Link>
            <Link className="text-link text-link-light" to="/about">Discover our mission <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-caption"><span>01 / 04</span><span>Life thrives when nature does.</span></div>
      </section>

      <section className="intro-band">
        <p className="eyebrow">The work is shared</p>
        <p className="intro-statement">A healthier planet begins with <span>protecting the life</span> that calls it home.</p>
        <Link className="text-link" to="/about">Why conservation matters <span aria-hidden="true">→</span></Link>
      </section>

      <section className="section-padding work-section">
        <div className="section-topline"><span>01 — Where we focus</span><span>Small actions. Living impact.</span></div>
        <SectionHeading eyebrow="Our priorities" title="A stronger future for the wild" text="Conservation is a commitment to the intricate web of life, and to the generations who will inherit it." />
        <div className="card-grid">
          {conservationCards.map((card) => <InfoCard key={card.number} card={card} />)}
        </div>
      </section>

      <section className="impact-band">
        <div className="impact-image" role="img" aria-label="Wild deer in a protected woodland" />
        <div className="impact-copy">
          <p className="eyebrow eyebrow-light">The next chapter is ours</p>
          <h2>Let care become<br /><em>collective action.</em></h2>
          <p>Volunteer your time, share what you learn, and stand alongside communities protecting the natural world.</p>
          <Link className="button button-lime" to="/register">Find your place in the work <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}

function About() {
  const values = [
    { number: '01', title: 'Protection', text: 'Defend wildlife and the habitats they need through informed, compassionate action.' },
    { number: '02', title: 'Sustainability', text: 'Care for natural resources so ecosystems and communities can flourish for generations.' },
    { number: '03', title: 'Community participation', text: 'Bring people together and make local knowledge central to conservation.' },
  ];

  return (
    <main>
      <section className="page-hero" style={{ '--hero-image': `url("${images.about}")` }}>
        <div className="page-hero-content">
          <p className="eyebrow eyebrow-light">Our reason for being</p>
          <h1>About wildlife<br /><em>conservation.</em></h1>
          <p>Protecting the diversity of life on Earth, one habitat and one community at a time.</p>
        </div>
      </section>
      <section className="about-intro section-padding">
        <p className="eyebrow">A living balance</p>
        <div>
          <h2>When wildlife thrives,<br /><em>we all do.</em></h2>
          <p>Wildlife conservation is the practice of protecting wild animals, plants, and the places they depend on. It helps keep ecosystems resilient and preserves the natural balance that supports life, including our own.</p>
          <p>Deforestation, pollution, climate change, habitat loss, and illegal hunting place growing pressure on species around the world. Meeting these challenges calls for long-term thinking, respect for local communities, and a shared sense of responsibility.</p>
        </div>
      </section>
      <section className="mission-band">
        <div className="mission-label"><p className="eyebrow eyebrow-light">Our mission</p><span>02 — Our promise</span></div>
        <div><h2>A world where people and nature <em>thrive together.</em></h2><p>We imagine a future where every species has space to flourish, ecosystems are cared for, and communities are empowered to shape a healthier planet.</p></div>
      </section>
      <section className="section-padding values-section">
        <SectionHeading eyebrow="How we show up" title="Care that creates change" text="Lasting conservation is built on practical action and people working together." />
        <div className="value-grid">{values.map((value) => <InfoCard key={value.number} card={value} />)}</div>
      </section>
      <section className="simple-cta"><p className="eyebrow">Be part of the difference</p><h2>The wild needs all of us.</h2><Link className="button button-dark" to="/register">Join the community <span aria-hidden="true">↗</span></Link></section>
    </main>
  );
}

function validateContact(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Please enter your name.';
  if (!data.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(data.email.trim())) errors.email = 'Enter a valid email address.';
  if (!data.message.trim()) errors.message = 'Please add a message.';
  return errors;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validateContact(form);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setTouched((current) => ({ ...current, [name]: true }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length === 0) setSubmitted(true);
  }

  return (
    <main className="form-page contact-page">
      <div className="form-page-heading">
        <p className="eyebrow">A conversation starts here</p>
        <h1>Let’s talk about<br /><em>what matters.</em></h1>
        <p>Have a question or an idea for protecting wildlife? Send us a note.</p>
      </div>
      <form className="form-panel contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-title"><span>01 / Say hello</span><p>All fields are required.</p></div>
        <FormField label="Full name" name="name" value={form.name} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, name: true }))} error={touched.name ? errors.name : ''} placeholder="Your name" autoComplete="name" />
        <FormField label="Email address" name="email" type="email" value={form.email} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, email: true }))} error={touched.email ? errors.email : ''} placeholder="you@example.com" autoComplete="email" />
        <div className="field-wrap">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={updateField} onBlur={() => setTouched((current) => ({ ...current, message: true }))} placeholder="What would you like to share?" aria-invalid={Boolean(touched.message && errors.message)} aria-describedby={touched.message && errors.message ? 'message-error' : undefined} />
          {touched.message && errors.message && <p className="field-error" id="message-error" role="alert">{errors.message}</p>}
        </div>
        <div className="form-submit-row"><button className="button button-dark" type="submit">Send your message <span aria-hidden="true">↗</span></button><span className="form-note">A frontend demonstration. No message is sent or stored.</span></div>
        {submitted && <p className="success-message" role="status">Thanks, {form.name.trim()}. Your message is ready for this demonstration.</p>}
      </form>
    </main>
  );
}

function FormField({ label, name, type = 'text', value, onChange, onBlur, error, placeholder, autoComplete, inputMode, min, max, maxLength }) {
  const errorId = `${name}-error`;
  return (
    <div className="field-wrap">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} autoComplete={autoComplete} inputMode={inputMode} min={min} max={max} maxLength={maxLength} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error && <p className="field-error" id={errorId} role="alert">{error}</p>}
    </div>
  );
}

const initialRegistration = {
  name: '', email: '', password: '', age: '', mobile: '', gender: '', state: '',
};

function validateRegistration(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Full name is required.';
  else if (!/^[A-Za-z ]+$/.test(data.name.trim())) errors.name = 'Use English letters and spaces only.';
  if (!data.email.trim()) errors.email = 'Email address is required.';
  else if (!emailPattern.test(data.email.trim())) errors.email = 'Enter a valid email address.';
  if (!data.password) errors.password = 'Password is required.';
  else if (data.password.length < 8 || !/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/\d/.test(data.password)) errors.password = 'Use 8+ characters with uppercase, lowercase, and a number.';
  if (!data.age) errors.age = 'Age is required.';
  else if (!/^\d+$/.test(data.age) || Number(data.age) < 18 || Number(data.age) > 30) errors.age = 'Enter a whole number from 18 to 30.';
  if (!data.mobile) errors.mobile = 'Mobile number is required.';
  else if (!/^\d{10}$/.test(data.mobile)) errors.mobile = 'Enter exactly 10 digits.';
  if (!data.gender) errors.gender = 'Choose an option.';
  if (!data.state) errors.state = 'Choose a state.';
  return errors;
}

function Register() {
  const [form, setForm] = useState(initialRegistration);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validateRegistration(form);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setTouched((current) => ({ ...current, [name]: true }));
    setSubmitted(false);
  }

  function markTouched(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(Object.fromEntries(Object.keys(form).map((key) => [key, true])));
    if (isValid) setSubmitted(true);
  }

  return (
    <main className="form-page register-page">
      <div className="register-intro">
        <p className="eyebrow">Make room for a wilder future</p>
        <h1>Join the<br /><em>WildGuard community.</em></h1>
        <p>Bring your care for nature into the work. Register your interest in volunteering with us.</p>
        <div className="register-aside"><span className="aside-mark" aria-hidden="true">✳</span><p>Every effort counts.<br />Your next step starts here.</p></div>
      </div>
      <form className="form-panel registration-form" onSubmit={handleSubmit} noValidate>
        <div className="form-title"><span>01 / Volunteer details</span><p>Fields marked with * are required.</p></div>
        <div className="form-grid">
          <FormField label="Full name *" name="name" value={form.name} onChange={updateField} onBlur={markTouched} error={touched.name ? errors.name : ''} placeholder="e.g. Asha Kumar" autoComplete="name" />
          <FormField label="Email address *" name="email" type="email" value={form.email} onChange={updateField} onBlur={markTouched} error={touched.email ? errors.email : ''} placeholder="you@example.com" autoComplete="email" />
          <FormField label="Password *" name="password" type="password" value={form.password} onChange={updateField} onBlur={markTouched} error={touched.password ? errors.password : ''} placeholder="8+ characters" autoComplete="new-password" />
          <FormField label="Age *" name="age" type="text" value={form.age} onChange={updateField} onBlur={markTouched} error={touched.age ? errors.age : ''} placeholder="18–30" inputMode="numeric" />
          <FormField label="Mobile number *" name="mobile" type="tel" value={form.mobile} onChange={updateField} onBlur={markTouched} error={touched.mobile ? errors.mobile : ''} placeholder="10-digit number" inputMode="numeric" autoComplete="tel" maxLength={10} />
          <div className="field-wrap">
            <label htmlFor="gender">Gender *</label>
            <select id="gender" name="gender" value={form.gender} onChange={updateField} onBlur={markTouched} aria-invalid={Boolean(touched.gender && errors.gender)} aria-describedby={touched.gender && errors.gender ? 'gender-error' : undefined}>
              <option value="">Select gender</option><option>Male</option><option>Female</option><option>Other</option>
            </select>
            {touched.gender && errors.gender && <p className="field-error" id="gender-error" role="alert">{errors.gender}</p>}
          </div>
          <div className="field-wrap">
            <label htmlFor="state">State *</label>
            <select id="state" name="state" value={form.state} onChange={updateField} onBlur={markTouched} aria-invalid={Boolean(touched.state && errors.state)} aria-describedby={touched.state && errors.state ? 'state-error' : undefined}>
              <option value="">Select state</option><option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option><option>Andhra Pradesh</option><option>Telangana</option><option>Other</option>
            </select>
            {touched.state && errors.state && <p className="field-error" id="state-error" role="alert">{errors.state}</p>}
          </div>
        </div>
        <div className="form-submit-row registration-submit"><button className="button button-dark" type="submit">Register as a volunteer <span aria-hidden="true">↗</span></button><span className="form-note">Demo only. Your details are not stored.</span></div>
        {submitted && <p className="success-message" role="status">Thank you, {form.name.trim()}! You’re ready to take your first step with WildGuard.</p>}
      </form>
    </main>
  );
}

function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 / Lost in the wild</p><h1>This path isn’t<br /><em>on our map.</em></h1><Link className="button button-dark" to="/">Back to home <span aria-hidden="true">↗</span></Link></main>;
}

export default function App() {
  return (
    <PageFrame>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </PageFrame>
  );
}
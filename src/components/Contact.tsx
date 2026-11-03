import { useState, type FormEvent } from 'react';
import Chapter from './Chapter';
import { profile } from '../data/profile';
import './Contact.css';

// PLACEHOLDER: set VITE_FORM_ENDPOINT (e.g. a Formspree form URL) to switch the form on (see PLACEHOLDERS.md)
const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'invalid';

const messages: Record<Status, string> = {
  idle: '',
  sending: 'Sending…',
  sent: 'Thanks, your note is on its way. I’ll reply by email.',
  error: `That didn’t go through. Please email me directly at ${profile.email}.`,
  invalid: 'Add your email and a message so I can reply.',
};

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');
  const { links } = profile;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!String(data.email).includes('@') || !String(data.message).trim()) {
      setStatus('invalid');
      return;
    }
    if (!endpoint) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Chapter id="contact" num="05" title="Contact" folio="p. 31">
      <div className="contact">
        <div>
          <p className="big">Hiring, or need something <em>built?</em></p>
          <p className="open">Full-time, contract, part-time, or a single project. If it’s software, I’d like to hear about it.</p>
          <ul className="direct">
            <li><span className="mono">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span className="mono">LinkedIn</span><a href={links.linkedin.href}>{links.linkedin.label} ↗</a></li>
            <li><span className="mono">GitHub</span><a href={links.github.href}>{links.github.label} ↗</a></li>
            <li><span className="mono">Studio</span><a href={links.studio.href}>{links.studio.label} ↗</a></li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate>
          <label htmlFor="f-name"><span className="mono">Your name</span><input id="f-name" name="name" autoComplete="name" /></label>
          <label htmlFor="f-email"><span className="mono">Email</span><input id="f-email" name="email" type="email" autoComplete="email" required /></label>
          <label htmlFor="f-msg"><span className="mono">Message</span><textarea id="f-msg" name="message" placeholder="A role, a project, or just hello." required /></label>
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
          <div className="actions"><button className="btn solid" type="submit" disabled={status === 'sending'}>Send note</button></div>
          <p className="form-note" aria-live="polite">{messages[status]}</p>
        </form>
      </div>
    </Chapter>
  );
};

export default Contact;

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const defaultQuestion = "What box sizes are available, what is the rated working load limit for each, and what are the current prices?";

export default function InquiryForm() {
  const [name, setName] = useState("");
  const [trailer, setTrailer] = useState("");
  const [topic, setTopic] = useState("Sizes, ratings & pricing");
  const [question, setQuestion] = useState(defaultQuestion);
  const [draft, setDraft] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const draftPanel = useRef<HTMLDivElement>(null);
  const draftText = useRef<HTMLTextAreaElement>(null);
  const messageField = useRef<HTMLTextAreaElement>(null);
  const isEditing = useRef(false);

  useEffect(() => {
    if (draft !== null) draftPanel.current?.focus({ preventScroll: true });
    else if (isEditing.current) {
      messageField.current?.focus({ preventScroll: true });
      isEditing.current = false;
    }
  }, [draft]);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !question.trim()) return;
    setDraft(`Hi Tony,\n\n${question.trim()}${trailer.trim() ? `\n\nMy trailer and what I haul: ${trailer.trim()}` : ""}\n\nThanks,\n${name.trim()}`);
    setCopyStatus("");
  }

  async function copyInquiry() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Message copied. Paste it into your email app.");
    } catch {
      draftText.current?.focus();
      draftText.current?.select();
      setCopyStatus("Select and copy the highlighted message to use it in your email app.");
    }
  }

  return (
    <div className="inquiry-panel">
      {draft === null ? (
        <form id="inquiry-form" onSubmit={prepareInquiry}>
          <h3>Ask about your setup</h3><p className="form-intro">This prepares an email draft. You review and send it from your email app.</p>
          <div className="form-row">
            <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="First name" maxLength={100} value={name} onChange={(event) => setName(event.target.value)} required /></div>
            <div className="field"><label htmlFor="topic">I’m asking about</label><select id="topic" name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}><option>Sizes, ratings & pricing</option><option>Installation & trailer fit</option><option>Something else</option></select></div>
          </div>
          <div className="field"><label htmlFor="trailer">Your trailer & what you haul <span>(optional)</span></label><input id="trailer" name="trailer" placeholder="e.g. 20 ft flatbed, hauling a tractor" maxLength={300} value={trailer} onChange={(event) => setTrailer(event.target.value)} /></div>
          <div className="field"><label htmlFor="message">Your question</label><textarea ref={messageField} id="message" name="message" rows={4} maxLength={2500} value={question} onChange={(event) => setQuestion(event.target.value)} required /></div>
          <button className="button primary full-width" type="submit">Prepare my inquiry</button><p className="form-fine">Nothing is sent or saved by this preview.</p>
        </form>
      ) : (
        <div ref={draftPanel} id="draft-panel" tabIndex={-1}>
          <span className="draft-label">READY FOR YOUR REVIEW</span><h3>Your email draft is ready.</h3><p>Open your email app, review the message, and send it to Tony. This preview has not submitted an inquiry.</p>
          <label htmlFor="draft-text">Your message</label><textarea ref={draftText} id="draft-text" readOnly rows={10} value={draft} />
          <a id="open-email" className="button primary full-width" href={`mailto:tonyboyett@gmail.com?subject=${encodeURIComponent("ChainSaf inquiry: " + topic)}&body=${encodeURIComponent(draft)}`}>Open email draft</a>
          <div className="draft-actions"><button type="button" className="text-button" onClick={() => { isEditing.current = true; setDraft(null); }}>Edit inquiry</button><button type="button" className="text-button" onClick={copyInquiry}>Copy message</button></div>
          <p className="copy-status" aria-live="polite">{copyStatus}</p>
          <p className="draft-help">No email app set up? Copy your message and email <a href="mailto:tonyboyett@gmail.com">tonyboyett@gmail.com</a>, or call <a href="tel:+15122478795">(512) 247-8795</a>.</p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useRef, useState, type MouseEvent } from "react";

export default function VideoDemo() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openVideo() {
    dialog.current?.showModal();
    setIsOpen(true);
  }

  function closeFromBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close();
  }

  return (
    <>
      <button type="button" className="button dark" onClick={openVideo}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" /></svg> Watch the product demo</button>
      <dialog ref={dialog} aria-labelledby="video-title" onClose={() => setIsOpen(false)} onClick={closeFromBackdrop}>
        <div className="video-dialog-head"><h2 id="video-title">ChainSaf product demo</h2><button type="button" aria-label="Close product demo" onClick={() => dialog.current?.close()}>×</button></div>
        <div className="video-frame">{isOpen && <iframe title="ChainSaf how-to-use product demonstration" src="https://player.vimeo.com/video/1164815942?autoplay=1&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />}</div>
        <p>Video from ChainSaf’s current website. <a href="https://player.vimeo.com/video/1164815942" target="_blank" rel="noopener noreferrer">Open video separately</a></p>
      </dialog>
    </>
  );
}

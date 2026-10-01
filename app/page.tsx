import Image from "next/image";
import SiteHeader from "@/components/site-header";
import InquiryForm from "@/components/inquiry-form";
import VideoDemo from "@/components/video-demo";

export default function HomePage() {
  return (
    <>
  <a className="skip-link" href="#main">Skip to content</a>
  <div className="concept-bar">Independent website concept <span>•</span> Not the official ChainSaf website</div>
  <SiteHeader />
  <main id="main">
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="short-line"></span> TRAILER STORAGE + SECUREMENT</p>
          <h1>Keep your chains<br /><span>on the trailer.</span></h1>
          <p className="hero-description">Less searching. Less carrying. ChainSaf puts your chains, binders, and tie-down points right where you load.</p>
          <div className="hero-actions"><a className="button primary" href="#contact">Ask about sizes & pricing</a><a className="button light-outline" href="#how-it-works"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z"/></svg> See how it works</a></div>
          <div className="hero-qualities"><span>American made</span><span>Flush-mounted</span><span>Built for the job</span></div>
        </div>
        <figure className="hero-image">
          <Image src="/assets/trailer-in-use.webp" alt="A tractor on a flatbed trailer, with a chain attached to a ChainSaf box in the deck" width="640" height="480" fetchPriority="high" loading="eager" />
          <figcaption><span className="photo-index">01 / IN THE FIELD</span><span>Right where<br />you need it.</span></figcaption>
        </figure>
      </div>
      <div className="container hero-foot"><span>YOUR TRAILER. YOUR GEAR. ONE PLACE.</span><span>U.S. Patent No. 12,280,708</span></div>
    </section>

    <section id="product" className="section product-section">
      <div className="container product-grid">
        <figure className="product-image"><Image src="/assets/chainsaf-detail.webp" alt="Close-up of a ChainSaf box mounted in a wooden trailer deck, with a chain at its pull point" width="620" height="454" loading="lazy" /><figcaption>Storage and a dedicated pull point, in one box.</figcaption></figure>
        <div className="product-copy"><p className="eyebrow">MEET CHAINSAF</p><h2>A small change.<br />A better hauling routine.</h2><p>Your chains belong with your trailer. ChainSaf combines on-trailer storage with dedicated tie-down points, so your gear is there when it’s time to secure a load.</p>
          <div className="benefit"><span className="benefit-number">01</span><div><h3>Keep your gear together</h3><p>Store chains, binders, or ratchet straps on the trailer instead of carrying them from the truck.</p></div></div>
          <div className="benefit"><span className="benefit-number">02</span><div><h3>Keep the deck clear</h3><p>A flush-mounted design lets equipment pass over the boxes during loading.</p></div></div>
          <div className="benefit"><span className="benefit-number">03</span><div><h3>Put excess chain away</h3><p>Store unused chain in the box while your load is secured.</p></div></div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="section how-section">
      <div className="container">
        <div className="section-heading"><div><p className="eyebrow">FROM LOADING TO UNLOADING</p><h2>Ready when you are.</h2></div><p>One place for the gear.<br />A simpler routine on the deck.</p></div>
        <div className="how-grid">
          <div className="how-steps">
            <div className="step"><span>01</span><div><h3>Load your trailer</h3><p>The boxes sit flush with the deck, keeping the loading surface clear.</p></div></div>
            <div className="step"><span>02</span><div><h3>Pull out your gear</h3><p>Your chains and binders are stored where you need them. Use the dedicated pull points to secure your load.</p></div></div>
            <div className="step"><span>03</span><div><h3>Stow it when you’re done</h3><p>After unloading, put your securement gear back in the boxes for the next trip.</p></div></div>
            <VideoDemo />
          </div>
          <div className="photo-pair"><figure><Image src="/assets/clear-deck.webp" alt="ChainSaf boxes sit flush in a clear wooden trailer deck" width="770" height="1042" loading="lazy" /><figcaption>Stowed. Deck clear.</figcaption></figure><figure><Image src="/assets/chain-storage.webp" alt="Chain pulled from an open ChainSaf box on a trailer deck" width="774" height="1040" loading="lazy" /><figcaption>Open. Gear at hand.</figcaption></figure></div>
        </div>
      </div>
    </section>

    <section id="sizes" className="section fit-section">
      <div className="container fit-grid">
        <div><p className="eyebrow">SIZES, RATINGS & PRICING</p><h2>Get the right fit<br />for your trailer.</h2><p>Trailer layouts and hauling needs vary. Tell Tony about your trailer and what you haul, then confirm the details before you order.</p><a className="button primary" href="#contact" >Ask for product details</a></div>
        <div className="fit-details">
          <div className="fit-row"><span>01</span><div><h3>Box sizes</h3><p>Ask for available dimensions and the space needed below your trailer deck.</p></div></div>
          <div className="fit-row"><span>02</span><div><h3>Rated working load</h3><p>Confirm the working load limit for the box, mounting method, and your hauling setup.</p></div></div>
          <div className="fit-row"><span>03</span><div><h3>Current pricing</h3><p>Request unit prices, what’s included, shipping costs, and availability.</p></div></div>
          <div className="fit-row"><span>04</span><div><h3>Installation</h3><p>Most applications require welding to the trailer frame. Confirm the correct method before fitting.</p></div></div>
        </div>
      </div>
    </section>

    <section id="questions" className="section faq-section">
      <div className="container faq-grid"><div><p className="eyebrow">A FEW GOOD QUESTIONS</p><h2>Know before<br />you haul.</h2><p>Still have a question?<br /><a className="text-link" href="tel:+15122478795">Call Tony: (512) 247-8795</a></p></div><div className="faq-list">
        <details><summary>Does it work with ratchet straps?<span aria-hidden="true">+</span></summary><p>Yes. Our boxes are designed for both chains and ratchet straps. We can help you choose the right size and confirm the rated limit for your setup.</p></details>
        <details><summary>Can I install it myself?<span aria-hidden="true">+</span></summary><p>Most installations require welding the box to your trailer’s frame. Some light-duty setups may allow bolting. Give us a call before you get started so we can go over the right installation method for your trailer.</p></details>
        <details><summary>How much weight can it handle?<span aria-hidden="true">+</span></summary><p>We’ll help you confirm the rated working load limit for your box and installation. Tell us about your trailer and what you haul so we can go over the right setup before you order.</p></details>
        <details><summary>What maintenance is needed?<span aria-hidden="true">+</span></summary><p>Rinse out any sand or gravel that collects in the boxes. If you have questions about care or inspection, give us a call.</p></details>
        <details><summary>How do I buy ChainSaf?<span aria-hidden="true">+</span></summary><p>Call Tony or prepare an inquiry below. We’ll go over sizes, rated limits, pricing, and installation with you, then help you get your order started.</p><a className="text-link" href="#contact">Prepare a product inquiry</a></details>
      </div></div>
    </section>

    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy"><p className="eyebrow">LET’S TALK ABOUT YOUR TRAILER</p><h2>The right setup<br />starts here.</h2><p>Ask about sizes, rated limits, installation, or a quote. Contact Tony directly, or prepare an email with the details below.</p>
          <a className="contact-method" href="tel:+15122478795"><span>CALL TONY</span><strong>(512) 247-8795</strong></a>
          <a className="contact-method email-method" href="mailto:tonyboyett@gmail.com"><span>EMAIL TONY</span><strong>tonyboyett@gmail.com</strong></a>
          <div className="contact-note"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4zM4 6l8 7 8-7"/></svg><p>Your inquiry goes to a real person.<br />No account needed.</p></div>
        </div>
        <InquiryForm />
      </div>
    </section>
  </main>
  <footer><div className="container footer-main"><a className="brand" href="#main">CHAIN<span>SAF</span></a><p>Keep your gear with your trailer.</p><a href="tel:+15122478795">(512) 247-8795</a></div><div className="container footer-small"><span>Independent design concept • Product photos from ChainSaf’s current website</span><a href="https://www.chainsaf.com/" target="_blank" rel="noopener noreferrer">Visit the current official website</a></div></footer>
  <div className="mobile-contact"><a href="tel:+15122478795">Call Tony</a><a href="#contact">Sizes & pricing</a></div>

    </>
  );
}

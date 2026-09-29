document.getElementById('year').textContent = new Date().getFullYear();

// Integration point for the client-provided form script.
// Emit the conversion only after the real provider confirms a successful submission.
window.crasFormSuccess = function crasFormSuccess() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { event_category: 'form', event_label: 'orcamento_cras_tecnologia' });
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
  window.dispatchEvent(new CustomEvent('cras:lead-success'));
};

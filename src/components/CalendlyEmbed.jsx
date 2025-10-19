import { useEffect } from 'react';

export default function CalendlyEmbed({ url = "https://calendly.com/cayoae89/30min" }) {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.async = true;
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-soft">
      <div
        className="calendly-inline-widget"
        data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=8EEA44`}
        style={{ minWidth: '320px', height: '650px' }}
      />
    </div>
  );
}

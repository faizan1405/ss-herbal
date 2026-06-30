export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919354903225"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110 animate-float"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1c2.3 1.3 5 1.9 7.7 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.6-6.8-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.7 20.7 3 18.4 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.8-13 12.8zm7.1-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.7.1-.2 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.8 5.2 3.4 1.4 3.4.9 4.1.9.6 0 2.1-.8 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.4-.3-.8-.5z"/>
      </svg>
    </a>
  );
}

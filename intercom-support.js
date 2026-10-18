document.addEventListener(
  "click",
  (event) => {
    const target = event.target.closest('a[href$="#suporte"], .card[role="link"]');
    if (!target || typeof window.Intercom !== "function") return;
    if (target.matches(".card") && !target.querySelector('a[href$="#suporte"]')) return;
    event.preventDefault();
    event.stopPropagation();
    window.Intercom("show");
  },
  true,
);

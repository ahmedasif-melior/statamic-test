// Sheltersuit Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Donation frequency toggle
    const freqBtns = document.querySelectorAll('.donation-freq-btn');
    freqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            freqBtns.forEach(b => {
                b.className = 'donation-freq-btn py-2 text-sm font-semibold rounded-md border border-zinc-300 bg-white text-zinc-700 hover:text-zinc-950 transition';
            });
            btn.className = 'donation-freq-btn py-2 text-sm font-bold rounded-md bg-[#FFD100] text-zinc-950 shadow-sm transition';
        });
    });

    // Donation amount selector
    const amountBtns = document.querySelectorAll('.donation-amount-btn');
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => {
                b.className = 'donation-amount-btn border border-zinc-300 rounded-xl p-2.5 sm:p-3 text-center transition hover:border-zinc-400 bg-white';
                const sub = b.querySelector('span:last-child');
                if (sub) {
                    sub.className = 'block text-[10px] text-zinc-500 mt-1 leading-snug';
                }
            });
            btn.className = 'donation-amount-btn border-2 border-[#FFD100] bg-[#FFD100] rounded-xl p-2.5 sm:p-3 text-center shadow-sm transition';
            const activeSub = btn.querySelector('span:last-child');
            if (activeSub) {
                activeSub.className = 'block text-[10px] text-zinc-800 font-medium mt-1 leading-snug';
            }
        });
    });
});

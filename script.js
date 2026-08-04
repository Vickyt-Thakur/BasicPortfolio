const toggleBtn = document.querySelector('.btn');
const body = document.body;
let isDark = false;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isDark = !isDark;
        body.classList.toggle('dark-mode', isDark);
        toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
}



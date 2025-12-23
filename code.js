 // Smooth Scroll to Section
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Dark Mode Toggle
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            const button = document.querySelector('.theme-toggle');
            
            html.setAttribute('data-theme', newTheme);
            button.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }

        // Increment Counter
        function incrementCounter(btn) {
            const counterValue = btn.parentElement.querySelector('.counter-value');
            let count = parseInt(counterValue.textContent);
            counterValue.textContent = count + 1;
        }

        // Decrement Counter
        function decrementCounter(btn) {
            const counterValue = btn.parentElement.querySelector('.counter-value');
            let count = parseInt(counterValue.textContent);
            if (count > 0) {
                counterValue.textContent = count - 1;
            }
        }

        // Random Popup using Math.random()
        function showRandomPopup() {
            const randomDelay = Math.random() * 5000 + 2000; // Random delay between 2-7 seconds
            setTimeout(() => {
                document.getElementById('popup').classList.add('active');
            }, randomDelay);
        }

        function closePopup() {
            document.getElementById('popup').classList.remove('active');
        }

        // Initialize popup on page load
        window.addEventListener('load', showRandomPopup);
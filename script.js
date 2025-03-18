let currentIndex = 0;
        const slides = document.querySelector(".slides");
        const dots = document.querySelectorAll(".dot");
        const totalSlides = document.querySelectorAll(".slide").length;
        let interval;

        function moveSlide(index) {
            if (index >= totalSlides) currentIndex = 0;
            else if (index < 0) currentIndex = totalSlides - 1;
            else currentIndex = index;

            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        function updateDots() {
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
            });
        }

        function moveToSlide(index) {
            moveSlide(index);
            restartAutoSlide();
        }

        function nextSlide() {
            moveSlide(currentIndex + 1);
            restartAutoSlide();
        }

        function prevSlide() {
            moveSlide(currentIndex - 1);
            restartAutoSlide();
        }

        function startAutoSlide() {
            interval = setInterval(nextSlide, 3000);
        }

        function restartAutoSlide() {
            clearInterval(interval);
            startAutoSlide();
        }

        document.querySelector(".next").addEventListener("click", nextSlide);
        document.querySelector(".prev").addEventListener("click", prevSlide);

        // Start auto-sliding when page loads
        startAutoSlide();
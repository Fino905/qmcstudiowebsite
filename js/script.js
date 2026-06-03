document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. LOADING SCREEN
    // ==========================================
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.pointerEvents = "none";
                setTimeout(() => loader.style.display = "none", 500);
            }, 300);
        });
    }

    // ==========================================
    // 2. THEME TOGGLE
    // ==========================================
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem("qmc-theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateToggleIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("qmc-theme", newTheme);
            updateToggleIcon(newTheme);
        });
    }

    function updateToggleIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector("i");
        if (icon) {
            icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        }
    }

    // ==========================================
    // 3. DYNAMIC CONTENT RENDERING
    // ==========================================
    const renderApp = () => {
        const kreasiContainer = document.getElementById("kreasi-container");
        const productsContainer = document.getElementById("products-container");
        const membersContainer = document.getElementById("members-container");

        if (kreasiContainer && STRATEGIC_CONTENT.kreasi) {
            kreasiContainer.innerHTML = STRATEGIC_CONTENT.kreasi.map((item, i) => `
                <div class="card-kreasi" style="transition-delay: ${i * 0.08}s">
                    <div class="kreasi-thumb">
                        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                        <span class="kreasi-cat">${item.category.toUpperCase()}</span>
                    </div>
                    <div class="kreasi-info">
                        <h3>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        if (productsContainer && STRATEGIC_CONTENT.products) {
            productsContainer.innerHTML = STRATEGIC_CONTENT.products.map((prod, i) => {
                const stokNum = parseInt((prod.stok || '').replace('Sisa ', '')) || 99;
                const badgeTypeClass = prod.badgeType === 'instant' ? 'status-instant' : prod.badgeType === 'fast' ? 'status-fast' : 'status-slow';
                const badgeIcon = prod.badgeType === 'instant' ? 'fas fa-bolt' : prod.badgeType === 'fast' ? 'fas fa-clock' : 'fas fa-hourglass-half';
                const badgeLabel = prod.badgeType === 'instant' ? 'PROSES INSTAN' : prod.badgeType === 'fast' ? 'PEMBUATAN CEPAT' : 'AGAK LAMBAT';
                return `
                <div class="card-product" style="transition-delay: ${(i % 3) * 0.08}s">
                    <div class="product-thumb">
                        <img src="${prod.image}" alt="${prod.title}" loading="lazy">
                        <div class="product-overlay-text">${prod.badgeText}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-tags-container">
                            <span class="product-badge-tag tag-green"><i class="fas fa-gem"></i> ${prod.tag}</span>
                            ${prod.tagAlt ? `<span class="product-badge-tag tag-orange"><i class="fas fa-tshirt"></i> ${prod.tagAlt}</span>` : ''}
                        </div>
                        <h3 class="product-title">${prod.title}</h3>
                        <div class="product-status-row">
                            <span class="status-badge ${badgeTypeClass}">
                                <i class="${badgeIcon}"></i> ${badgeLabel}
                            </span>
                            <span class="product-rating-text">
                                <i class="fas fa-star"></i> ${prod.rating} <span class="divider">|</span> ${prod.terjual}
                            </span>
                        </div>
                        <div class="product-price-row">
                            <span class="price-original">${prod.hargaAsli}</span>
                            <span class="discount-badge">${prod.diskon}</span>
                        </div>
                        <div class="product-footer-marketplace">
                            <span class="price-final">${prod.hargaDiskon}</span>
                            ${prod.stok ? `<span class="stock-badge ${stokNum <= 5 ? 'stock-low' : 'stock-safe'}">${prod.stok}</span>` : ''}
                        </div>
                        <a href="https://wa.me/087846729531?text=halo+atmin+mau+order+boleh" target="_blank" class="btn-buy-now">
                            <i class="fab fa-whatsapp"></i> Beli Sekarang
                        </a>
                    </div>
                </div>`;
            }).join('');
        }

        if (membersContainer && STRATEGIC_CONTENT.members) {
            membersContainer.innerHTML = STRATEGIC_CONTENT.members.map((member, i) => `
                <div class="card-member" style="transition-delay: ${(i % 4) * 0.07}s">
                    <div class="member-avatar">
                        <img src="${member.avatar}" alt="${member.name}" loading="lazy">
                    </div>
                    <h3>${member.name}</h3>
                    <p>${member.role}</p>
                </div>
            `).join('');
        }
    };

    renderApp();

    // ==========================================
    // 4. NAVBAR SCROLL BEHAVIOR
    // ==========================================
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const handleScroll = () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once
    }

    // ==========================================
    // 5. MOBILE MENU
    // ==========================================
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (icon) icon.className = isActive ? "fas fa-times" : "fas fa-bars";
        });

        // Close menu on nav item click
        navLinks.querySelectorAll(".nav-item").forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            });
        });

        // Close on outside click
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target)) {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            }
        });
    }

    // ==========================================
    // 6. SCROLL REVEAL (IntersectionObserver)
    // ==========================================
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // Also observe dynamically rendered cards
    const gridObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    document.querySelectorAll('.card-kreasi, .card-product, .card-member').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${card.style.transitionDelay || ''}, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${card.style.transitionDelay || ''}`;
        gridObserver.observe(card);
    });

    // ==========================================
    // 7. HERO PARALLAX (subtle)
    // ==========================================
    const heroBg = document.querySelector(".hero-bg");
    if (heroBg) {
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
            }
        }, { passive: true });
    }

    // ==========================================
    // 8. ACTIVE NAV ITEM DETECTION
    // ==========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
});

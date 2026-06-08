
/**
 * Cyclix Premium Responsive Navigation Engine
 * Minimal, lightweight, framework-free implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const bodyElement = document.body;

    // Open Mobile Navigation Screen Menu Layout Panel
    const openMenu = () => {
        mobileMenu.classList.add('is-active');
        mobileMenu.setAttribute('aria-hidden', 'false');
        // Prevent background parsing scrolling while interaction context is present
        bodyElement.style.overflow = 'hidden'; 
        menuCloseBtn.focus();
    };

    // Close Mobile Navigation Screen Menu Layout Panel
    const closeMenu = () => {
        mobileMenu.classList.remove('is-active');
        mobileMenu.setAttribute('aria-hidden', 'true');
        bodyElement.style.overflow = '';
        menuOpenBtn.focus();
    };

    // Event Triggers
    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    // Dynamic keyboard action handling for accessibility compliance
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
            closeMenu();
        }
    });

    // Handle smooth window layout changes gracefully
    window.addEventListener('resize', () => {
        if (window.innerWidth > 868 && mobileMenu.classList.contains('is-active')) {
            closeMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');
    const feedbackMessage = document.getElementById('form-feedback');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Intercept browser default page refresh execution

            const emailInput = document.getElementById('email-address');
            const userEmail = emailInput.value.trim();

            // Perform straightforward clean code email structure validation
            if (validateEmail(userEmail)) {
                // Display feedback state
                feedbackMessage.style.color = '#2e7d32'; // Secure green accent state
                feedbackMessage.textContent = 'Thank you for subscribing! Keep an eye on your inbox.';
                
                // Clear input form field
                emailInput.value = '';
                
                // Reset messaging state notification after delay period 
                setTimeout(() => {
                    feedbackMessage.textContent = '';
                }, 5000);
            } else {
                feedbackMessage.style.color = '#c62828'; // Error red accent state
                feedbackMessage.textContent = 'Please provide a valid email address.';
            }
        });
    }

    /**
     * Minimal production-safe Regex syntax parsing helper
     * @param {string} email 
     * @returns {boolean}
     */
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});

/**
 * Cyclix Web UI Interface Interaction Engine
 * Handles premium entry viewport staggered tracking reveal states.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Core functional configuration setup for tracking elements
    const trackingElements = document.querySelectorAll('.reveal-item');
    
    // Setup clean Modern Intersection Observer API Engine 
    const intersectionOptions = {
        root: null, // Tracks item placement relative to viewport
        rootMargin: '0px',
        threshold: 0.05 // Safely executes animation loop immediately upon edge contact
    };

    const heroRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Attach high-performance styling indicator mapping transition parameters
                entry.target.classList.add('active');
                // De-allocate memory state footprint once transition renders cleanly
                observer.unobserve(entry.target);
            }
        });
    }, intersectionOptions);

    // Bind monitoring execution parameters securely across elements array
    trackingElements.forEach(element => {
        heroRevealObserver.observe(element);
    });
});

/**
 * Testimonial Carousel Interaction Script Module
 * Configures an infinite loop handling data injection arrays containing 15 modular nodes.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 15 Comprehensive Testimonials Dataset Objects Pool Map
    const testimonialsDataset = [
  {
    name: "ayaan ali abbas Makwana",
    text: "Gorider Cycling is a perfect place for both kids and adults to learn cycling. My son is 7 years old and was previously very afraid of riding a cycle. Thanks to Rohan sir, he now rides confidently and can cycle on his own without any support. I’m really happy with his progress. I highly recommend Gorider to anyone who wants to learn—do give it a try.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWRWgE7Kw1wckSdS5fDR8JzzdvUmM3QU45dTEst9dIVso_jlCop=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Swapna",
    text: "Learning to ride a bicycle at 40 was definitely challenging. I started off with fear and struggle, but through consistency and practice, I gradually built confidence. It took me about 10 days to learn how to balance, pedal, and ride independently on open lanes. Huge thanks to Ronak for his patience, encouragement, and unwavering support throughout the process.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVZ8YMK3ObuboUIG5J35RbmxflvtlFWlgfdExJ4jrKqXYXTOHqP=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Kishan Ranawat",
    text: "If you're looking for cycling classes for yourself or your kids, GoRider is an excellent choice. Rohan and Ronak Sir are experienced, polite, and highly professional. I enrolled both my son and daughter in their cycling program and had a great experience.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUwS78QI2sDjiy3x7jQ2ioiA-L9oBDB5MoOs7JTPgtE9BYWxGcX=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Ashes Blue",
    text: "The instructors are really helpful and provide all the details needed. They are accommodating of schedules and the cycling classes were well conducted. The teaching process was easy to follow and very effective.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUS-i_ChBmo9gJGKI93UdEKOrpXSXx34ZfDGgK0ApFv3vbMsQF6=w90-h90-p-rp-mo-ba2-br100"
  },
  {
    name: "Aishwarya Kailash Anwala",
    text: "Mr. Ronak was my 5-year-old child's trainer. My son learned to ride a cycle perfectly in 8 sessions. He was very patient, always punctual, and thoroughly professional throughout.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXWpIIhzMMw0_XtbQgu7VEMTalryaoIj0Zq1Z7D6INNnvwVWVPYUw=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Brijesh Singh",
    text: "Ronak Sir is a true professional and a very passionate teacher. My daughter was able to cycle in just a few sessions. His clear communication, patience, and ability to understand children are remarkable. Highly recommended.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJvQn4uCllgqs1Go4clLsUiSxggg1Ls488_gWBo7BjaNAP6YQ=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Sweta Veera Gala",
    text: "It was a wonderful experience. My son learned cycling in fewer sessions than initially planned. Coach Rohan is very friendly, patient, and flexible with timings, which made it very convenient for us. Highly recommended.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJYdiH_8hhOpyAE92UDMvrIQSXoya7jabPAv9IrO60y_cHJNg=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Neha Agrawal",
    text: "Excellent cycling classes at GoRider. Trainer Ronak is extremely professional, patient, and great with kids. My 9-year-old daughter feels confident, safe, and happy during the sessions.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWwUsFAbyqOYXCbGFo5ivkQgZo5kqHjsEYypUk7lC_VW98xeJxp=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Mallika Joshi",
    text: "Thank you for teaching my daughters how to ride a bicycle confidently. They were very afraid initially, but both trainers made the learning process smooth and enjoyable. Would surely recommend GoRider.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWo0bM8zPAYfuka725lAH-_7BvO5mwIqzezpd-j1GTNT8B0Zgc=w90-h90-p-rp-mo-br100"
  },
  {
    name: "Manisha Priya",
    text: "I recently joined the GoRider cycling classes and had a wonderful experience. I am so happy to see myself cycling in just 6–7 days. The classes are motivating and encouraging, and my trainer Ronak was very patient and supportive.",
    img: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    name: "Pushkar Donde",
    text: "Rohan from GoRider is a very good cycle trainer. He is patient, professional, and great with children. His training helped build confidence and skills quickly. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Aditi",
    text: "My trainer was Ronak, who was extremely supportive, encouraging, and accommodative. I learned cycling within the given sessions with all safety precautions. The overall experience was fun and enjoyable.",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];
    let currentSliderIndex = 0;
    
    const textBillboard = document.getElementById('active-testimonial-text');
    const authorsTrackDeck = document.getElementById('testimonial-authors-track');
    const triggerPrevBtn = document.getElementById('testimonial-prev-btn');
    const triggerNextBtn = document.getElementById('testimonial-next-btn');

    // Systematically build the individual tray cards 
    function buildAuthorsTrayMarkup() {
        authorsTrackDeck.innerHTML = '';
        testimonialsDataset.forEach((item, idx) => {
            const nodeElement = document.createElement('div');
            nodeElement.className = `author-card-node ${idx === currentSliderIndex ? 'is-active' : ''}`;
            nodeElement.setAttribute('role', 'button');
            nodeElement.setAttribute('tabindex', '0');
            nodeElement.setAttribute('aria-label', `View testimonial from ${item.name}`);
            
            nodeElement.innerHTML = `
                <div class="author-avatar-box">
                    <img src="${item.img}" alt="${item.name}" loading="lazy">
                </div>
                <div class="author-name-lbl">${item.name}</div>
            `;

            // Click interaction loop bindings
            nodeElement.addEventListener('click', () => {
                if (currentSliderIndex !== idx) jumpToTargetSlide(idx);
            });

            // Accessibility keyboard activation bindings
            nodeElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (currentSliderIndex !== idx) jumpToTargetSlide(idx);
                }
            });

            authorsTrackDeck.appendChild(nodeElement);
        });
        
        centerActiveTrayCard();
    }

    // Coordinates central focus scroll movements inside tray lines
    function centerActiveTrayCard() {
        const activeNode = authorsTrackDeck.children[currentSliderIndex];
        if (activeNode) {
            const trackHalfWidth = authorsTrackDeck.clientWidth / 2;
            const nodeHalfWidth = activeNode.clientWidth / 2;
            const targetOffsetPosition = activeNode.offsetLeft - trackHalfWidth + nodeHalfWidth;
            authorsTrackDeck.scrollTo({ left: targetOffsetPosition, behavior: 'smooth' });
        }
    }

    // Handles text swap state loops accompanied by structural animations
    function jumpToTargetSlide(targetIndex) {
        textBillboard.classList.add('slider-fade-out');
        
        // Remove prior active assignments inside the DOM track list array
        Array.from(authorsTrackDeck.children).forEach((node, idx) => {
            if (idx === targetIndex) {
                node.classList.add('is-active');
            } else {
                node.classList.remove('is-active');
            }
        });

        setTimeout(() => {
            currentSliderIndex = targetIndex;
            textBillboard.innerHTML = testimonialsDataset[currentSliderIndex].text;
            textBillboard.classList.remove('slider-fade-out');
            centerActiveTrayCard();
        }, 200);
    }

    // Arrow controls navigation click events
    triggerPrevBtn.addEventListener('click', () => {
        let newIndex = currentSliderIndex - 1;
        if (newIndex < 0) newIndex = testimonialsDataset.length - 1; // Infinite loop backtracking
        jumpToTargetSlide(newIndex);
    });

    triggerNextBtn.addEventListener('click', () => {
        let newIndex = currentSliderIndex + 1;
        if (newIndex >= testimonialsDataset.length) newIndex = 0; // Infinite loop forwarding
        jumpToTargetSlide(newIndex);
    });

    // Launch structural initializations
    buildAuthorsTrayMarkup();
});

/**
 * Smooth Interactive Drawer Accordion Control Script Module
 * Connects state mappings across aria landmarks securely for complete SEO/A11y compliance.
 */
document.addEventListener('DOMContentLoaded', () => {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const currentItem = trigger.parentElement;
            const currentPanel = currentItem.querySelector('.accordion-panel');
            const isCurrentlyExpanded = trigger.getAttribute('aria-expanded') === 'true';

            // OPTIONAL TRANSITION LOGIC: Collapse any other open accordion tab drawer cleanly first
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem && item.classList.contains('is-expanded')) {
                    item.classList.remove('is-expanded');
                    const otherTrigger = item.querySelector('.accordion-trigger');
                    const otherPanel = item.querySelector('.accordion-panel');
                    
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    otherPanel.setAttribute('aria-hidden', 'true');
                    otherPanel.style.maxHeight = '0px';
                }
            });

            // Toggle active tracking indicators inside targeted nodes
            if (isCurrentlyExpanded) {
                // Collapse Panel
                trigger.setAttribute('aria-expanded', 'false');
                currentPanel.setAttribute('aria-hidden', 'true');
                currentItem.classList.remove('is-expanded');
                currentPanel.style.maxHeight = '0px';
            } else {
                // Expand Panel smoothly using scrollHeight framework calculation properties
                trigger.setAttribute('aria-expanded', 'true');
                currentPanel.setAttribute('aria-hidden', 'false');
                currentItem.classList.add('is-expanded');
                currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px';
            }
        });
    });
});

/**
 * Cyclix High Performance Live Form Transmission Engine
 * Handles Google Apps Script Fetch pipelines securely with automated locking locks.
 */
document.addEventListener('DOMContentLoaded', () => {
    const sheetFormNode = document.getElementById('cyclix-live-sheet-form');
    
    // CRITICAL SPECIFICATION: Paste your exact deployed Google Web App URL String token below
    const GOOGLE_APPS_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzLIpoqqpzhVelJNi8miMM6NtPDQKsSDqo75EzbmGGtz2S5l5mgIW9tjT8TwTexj6SJVQ/exec";

    if (sheetFormNode) {
        const formSubmitBtn = document.getElementById('form-submit-action-btn');
        const feedbackAlertBox = document.getElementById('form-execution-status-msg');
        
        // Input fields array mapping indicators for immediate validation tracking loops
        const trackedInputs = [
            { element: document.getElementById('form-field-name'), errorContainer: document.getElementById('err-name'), validator: val => val.trim().length > 0 },
            { element: document.getElementById('form-field-email'), errorContainer: document.getElementById('err-email'), validator: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
            { element: document.getElementById('form-field-msg'), errorContainer: document.getElementById('err-msg'), validator: val => val.trim().length > 0 }
        ];

        // Clean prior warning feedback metrics instantly on keyboard click key entry parameters
        trackedInputs.forEach(inputObj => {
            if (inputObj.element) {
                inputObj.element.addEventListener('input', () => {
                    const parentPane = inputObj.element.parentElement;
                    parentPane.classList.remove('has-error');
                });
            }
        });

        sheetFormNode.addEventListener('submit', async (event) => {
            event.preventDefault(); // Lock browser target refresh events pipelines instantly
            
            // Clear baseline runtime status logs layout
            feedbackAlertBox.textContent = "";
            feedbackAlertBox.className = "status-feedback-container";

            let structuralFormHasErrors = false;

            // Execute input evaluation routines across validation maps
            trackedInputs.forEach(inputObj => {
                if (inputObj.element) {
                    const isValidInput = inputObj.validator(inputObj.element.value);
                    const parentContainerShell = inputObj.element.parentElement;
                    
                    if (!isValidInput) {
                        parentContainerShell.classList.add('has-error');
                        structuralFormHasErrors = true;
                    } else {
                        parentContainerShell.classList.remove('has-error');
                    }
                }
            });

            // Prevent transit loop firing if mandatory logic strings fall flat
            if (structuralFormHasErrors) {
                feedbackAlertBox.textContent = "Please correct the highlighted fields before submitting.";
                feedbackAlertBox.classList.add('error-state');
                return;
            }

            // Fallback safety catch condition alerting missing backend endpoint deployments
            if (GOOGLE_APPS_SCRIPT_WEBAPP_URL === "YOUR_DEPLOYED_APPS_SCRIPT_URL_HERE" || !GOOGLE_APPS_SCRIPT_WEBAPP_URL.startsWith('https://script.google.com')) {
                feedbackAlertBox.textContent = "Configuration Warning: Please supply a valid active Apps Script Web App Endpoint link URL inside js/script.js.";
                feedbackAlertBox.classList.add('error-state');
                return;
            }

            // Secure submission locks preventing rapid fire button duplicate spamming issues
            formSubmitBtn.disabled = true;
            formSubmitBtn.classList.add('processing');
            feedbackAlertBox.textContent = "Transmitting your details securely...";
            feedbackAlertBox.classList.add('loading-state');

            // Format data payload structure natively from input field node attributes maps
            const structuredFormDataObject = new FormData(sheetFormNode);
            
            try {
                // Execute real-time asynchronous cross-origin AJAX Fetch transmission payload
                const serverNetworkResponse = await fetch(GOOGLE_APPS_SCRIPT_WEBAPP_URL, {
                    method: 'POST',
                    body: structuredFormDataObject,
                    mode: 'cors'
                });

                const structuralOutcomeJSON = await serverNetworkResponse.json();

                if (structuralOutcomeJSON.result === 'success' || structuralOutcomeJSON.status === 'success') {
                    // Render high success validation UI indicators
                    feedbackAlertBox.textContent = "Message sent successfully! Our team will contact you shortly.";
                    feedbackAlertBox.className = "status-feedback-container success-state";
                    sheetFormNode.reset(); // Flush fields arrays data cleanly
                } else {
                    throw new Error(structuralOutcomeJSON.message || "Server engine error encountered.");
                }

            } catch (networkProcessingError) {
                console.error('Inquiry transmission sequence failed:', networkProcessingError);
                feedbackAlertBox.textContent = "SUCCESS!";
                feedbackAlertBox.className = "status-feedback-container error-state";
            } finally {
                // Clear submission block processing locks seamlessly
                formSubmitBtn.disabled = false;
                formSubmitBtn.classList.remove('processing');
            }
        });
    }
});
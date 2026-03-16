document.addEventListener("DOMContentLoaded", () => {
    // 1. ელემენტების პოვნა
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    const langBtn = document.getElementById('lang-switch');

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-menu');

    console.log("Burger found:", burger); // თუ დაწერა null, ესე იგი ID არასწორია
    console.log("Nav found:", nav);

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            console.log("Menu toggled! Current classes:", nav.className);
        });
    } else {
        console.error("Error: Burger or Nav elements not found in DOM.");
    }
});

    // 2. ენის პარამეტრები
    let currentLang = localStorage.getItem('selectedLang') || 'en';
    const translations = {
        en: {
            // ზოგადი
            btn: "KA",
            nav_home: "Home",
            nav_services: "Services",
            nav_faq: "FAQ",
            nav_contact: "Contact",
            go_back: "Go Back",
            more: "Learn More",
            footer: "© 2026 GRAND Ellite DIGITAL AGENCY. ALL RIGHTS RESERVED.",

            // მთავარი გვერდი (Hero)
            hero_h1: "Digital Solutions for Business Growth",
            hero_p: "We help startups with website development, advertising, and brand empowerment.",
            hero_btn: "View Services",

            // მთავარი გვერდი (Services)
            serv_sub: "Our Capabilities",
            serv_h2: 'Services that <span class="accent">Deliver Results</span>',
            card1_h3: "📢 Advertising",
            card1_p: "Aggressive Meta & Google Ads strategies for maximum sales conversion.",
            card2_h3: "💻 Website",
            card2_p: "Ultra-modern digital homes tailored specifically for your brand.",
            card3_h3: "🔥 Full Service",
            card3_p: "We take full responsibility for your digital image. Website, ad campaigns, and <strong>exclusive photo/video shoots with models</strong>. All in one space.",

            // ვებ-დეველოპმენტის გვერდი
web_h1: "Professional Websites",
        web_p: "Create a powerful digital platform for your business",
        rental_badge: "Flexible Choice",
        rental_type: "WEBSITE RENTAL",
        rental_title: "Monthly Payment",
        feat_web: "Website",
        feat_modern: "Modern Attractive Design",
        feat_responsive: "Adaptive to Any Device",
        feat_fast: "Fast Website Loading",
        feat_host_dom: "Hosting and Domain",
        feat_easy: "Easy for Users to Understand",
        feat_no_costs: "No Extra Costs",
        feat_cancel: "Cancel Website Anytime",
        per_month: "per month",
        best_choice: "Best Price",
        pkg_type: "COMPLETE WEB SOLUTION",
        pkg_title_web: "Website Full Package",
        start_from: "Starting Price",
        order_btn: "Order",

            
            feat_shoot:"Photo/Video Shooting",
            feat_models:"Shooting with Models",

            // სრული სერვისის გვერდი (All-in-One)
            all_in_one_h1: "All-in-One Solution",
            all_in_one_p: "Comprehensive strategies for your business growth",
            pkg_num1: "Package №1",
            pkg_title1: "Standard Business Plan",
            pkg_num2: "Package №2",
            pkg_title2: "Premium Executive Plan",
            feat_web_dev: "Website Development",
            feat_templates: "Content Templates",
            feat_meta: "Meta Advertising",
            feat_voice: "Professional Voiceover",
            get_started: "Get Started",
            popular: "Popular",

            // რეფერალური პროგრამა
            ref_sub: "Referral Program",
            ref_h2: 'Refer a Client and <span class="highlight">Earn Your Share</span>',
            ref_p: "Know a business owner who needs a website or ads? Connect them with us and <b>receive a commission directly to your card</b>.",
            pkg1: "3000$ Package",
            profit1: "Your Profit: 50$",
            pkg2: "5000$ Package",
            profit2: "Your Profit: 100$",
            step1: "Connect us with a client",
            step2: "We close the deal",
            step3: "You get paid",
            ref_btn: "Start Earning Now",
            get_paid: "Get Paid",

            // FAQ სექცია
            faq_sub: "FAQ",
            faq_h2: 'Frequently Asked <span class="accent">Questions</span>',
            q1: "What are the benefits of working with you?",
            a1: "With us, you get a full service for a successful business. Instead of hiring different freelancers, GRAND Ellite offers a complete package: Web development, Ads, Editing, Social Media, Models, and Hosting.",
            q2: 'What does "Sales-Oriented Website" actually mean?',
            a2: "In GRAND Ellite, web design isn't just about visuals—it's a sales strategy. We know exactly what layout to use to make your business trustworthy and attractive to customers.",

            // კონტაქტის სექცია
            cont_sub: "Contact",
            cont_h2: "Start Your Project",
            cont_desc: "Get in touch and let's build your profitable business together.",
            phone: "Phone",
            email: "Email",
            avail: '<span class="dot"></span> Available for Work',

            // ფასები 
            699: "699$",
            1199:"1199$",
            1699:"1699$",
            4999:"4999$",
            2999:"2999$",
            4999:"4999$",
            1499:"1499$",
            199:"199$"


        },
        ka: {
            // ზოგადი
            btn: "EN",
            nav_home: "მთავარი",
            nav_services: "სერვისები",
            nav_faq: "FAQ",
            nav_contact: "კონტაქტი",
            go_back: "უკან დაბრუნება",
            more: "იხილეთ ვრცლად",
            footer: "© 2026 GRAND Ellite DIGITAL AGENCY. ყველა უფლება დაცულია.",
            feat_shoot:"ფოტო/ვიდეო გადაღება",
            feat_models:"გადაღება მოდელებით",

            // მთავარი გვერდი (Hero)
            hero_h1: "ციფრული გადაწყვეტილებები ბიზნესის ზრდისთვის",
            hero_p: "ჩვენ ვეხმარებით სტარტაპებს საიტის აწყობაში, რეკლამირებასა და ბრენდის გაძლიერებაში.",
            hero_btn: "იხილე სერვისები",

            // მთავარი გვერდი (Services)
            serv_sub: "ჩვენი შესაძლებლობები",
            serv_h2: 'სერვისები, რომლებიც <span class="accent">ქმნიან შედეგს</span>',
            card1_h3: "📢 რეკლამა",
            card1_p: "Meta & Google Ads-ის აგრესიული სტრატეგია მაქსიმალური გაყიდვებისთვის.",
            card2_h3: "💻 ვებ-საიტი",
            card2_p: "ულტრა-თანამედროვე ციფრული სახლი თქვენი ბრენდისთვის.",
            card3_h3: "🔥 სრული სერვისი",
            card3_p: "ჩვენ ვიღებთ სრულ პასუხისმგებლობას თქვენს ციფრულ იმიჯზე. საიტი, რეკლამა და <strong>ექსკლუზიური გადაღებები მოდელებთან ერთად</strong>.",

            // ვებ-დეველოპმენტის გვერდი
           web_h1: "პროფესიონალური ვებ-საიტები",
           web_p: "შექმენი მძლავრი ციფრული პლატფორმა შენი ბიზნესისთვის",
           rental_badge: "მოქნილი არჩევანი",
           rental_type: "საიტის გაქირავება",
           rental_title: "ყოველთვიურად გადახდა",
           feat_web: "ვებ-საიტი",
           feat_modern: "თანამედროვე მიმზიდველი დიზაინი",
           feat_responsive: "ნებისმიერ მოწყობილობაზე მორგებული",
           feat_fast: "ვებ-საიტის სწრაფი ჩატვირთვა",
           feat_host_dom: "ჰოსტინგი და დომეინი",
           feat_easy: "მომხმარებლისთვის მარტივად გასაგები",
           feat_no_costs: "ზედმეტი ხარჯების გარეშე",
           feat_cancel: "ვებ-საიტის გაუქმება ნებისმიერ დროს",
           per_month: "თვეში",
           best_choice: "საუკეთესო ფასი",
           pkg_type: "სრული ვებ-გადაწყვეტილება",
           pkg_title_web: "ვებ-საიტის სრული პაკეტი",
           start_from: "საწყისი ფასი",
           order_btn: "შეკვეთა",

            // სრული სერვისის გვერდი (All-in-One)
            all_in_one_h1: "ყველაფერი ერთ სივრცეში",
            all_in_one_p: "კომპლექსური გადაწყვეტილებები თქვენი ბიზნესის ზრდისთვის",
            pkg_num1: "პაკეტი №1",
            pkg_title1: "სტანდარტული ბიზნეს პაკეტი",
            pkg_num2: "პაკეტი №2",
            pkg_title2: "პრემიუმ პაკეტი",
            feat_web_dev: "ვებ-საიტის დამზადება",
            feat_templates: "შაბლონები",
            feat_meta: "Meta რეკლამები",
            feat_voice: "გახმოვანება",
            get_started: "დაწყება",
            popular: "Popular",

            // რეფერალური პროგრამა
            ref_sub: "პარტნიორული პროგრამა",
            ref_h2: 'მოგვიყვანე კლიენტი და <span class="highlight">მიიღე შენი წილი</span>',
            ref_p: "გყავს ნაცნობი ბიზნესმენი? დაგვაკავშირე მასთან და <b>მიიღე საკომისიო შენს ბარათზე</b>.",
            pkg1: "3000₾ პაკეტი",
            profit1: "შენი მოგება: 50₾",
            pkg2: "5000₾ პაკეტი",
            profit2: "შენი მოგება: 100₾",
            step1: "დაგვაკავშირე კლიენტთან",
            step2: "ჩვენ ვხურავთ გარიგებას",
            step3: "შენ გერიცხება ფული",
            ref_btn: "დაიწყე ფულის შოვნა",
            get_paid: "მიიღე თანხა",

            // FAQ სექცია
            faq_sub: "კითხვა-პასუხი",
            faq_h2: 'ხშირად დასმული <span class="accent">კითხვები</span>',
            q1: "რა სარგებელს ვიღებ თქვენთან მუშაობით?",
            a1: "ჩვენთან თქვენ იღებთ მთლიან სერვისს: ვებ-საიტის აწყობა, რეკლამა, მონტაჟი, სოციალური ქსელები, მოდელები და ჰოსტინგი.",
            q2: 'რას ნიშნავს „გაყიდვებზე ორიენტირებული საიტი“?',
            a2: "GRAND Ellite-ში ვებ-დიზაინი გაყიდვების სტრატეგიაა. ჩვენ ვიცით როგორი ვიზუალი სჭირდება საიტს, რომ მომხმარებლისთვის იყოს სანდო.",

            // კონტაქტის სექცია
            cont_sub: "კონტაქტი",
            cont_h2: "დავიწყოთ თქვენი პროექტი",
            cont_desc: "დაგვიკავშირდით და ერთად შევქმნათ თქვენი მომგებიანი ბიზნესი.",
            phone: "ტელეფონი",
            email: "ელ-ფოსტა",
            avail: '<span class="dot"></span> ხელმისაწვდომია სამუშაოდ',

            // პაკეტები
            pkg1_title: "ბიუჯეტური პაკეტი",
            pkg2_title: "სტანდარტული პაკეტი",
            pkg3_title: "მთლიანი პაკეტი",

            // არჩევა
            select:"არჩევა",

            // ფასები 
            699: "699₾",
            1199:"1199₾",
            1699:"1699₾",
            2999:"2999₾",
            1499: "1499₾",
            4999:"4999₾",
            199:"199₾"


        }

    };

function updatePageText() {
        if (langBtn) langBtn.textContent = translations[currentLang].btn;

        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[currentLang][key]) {
                const content = translations[currentLang][key];
                if (content.includes("<")) {
                    el.innerHTML = content;
                } else {
                    el.textContent = content;
                }
            }
        });
    }

    // 4. ენის შეცვლა
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "ka" : "en";
            localStorage.setItem("selectedLang", currentLang);
            updatePageText();
        });
    }

    // 5. ბურგერ მენიუ (აქ იყო შეცდომა - ახლა გასწორებულია)
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // 6. WhatsApp ფუნქციები (გლობალურად რომ იმუშაოს)
    window.toggleChat = function() {
        const chat = document.getElementById("waChat");
        if(chat) {
            chat.style.display = chat.style.display === "block" ? "none" : "block";
        }
    };

    window.sendToWhatsApp = function() {
        const messageInput = document.getElementById("waMessage");
        if(!messageInput) return;
        const message = messageInput.value.trim();
        if(message === "") return;
        const phone = "995593216321";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // პირველადი ჩატვირთვა
    updatePageText();
});


document.addEventListener("DOMContentLoaded", () => {
    // --- Configuration & State ---
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    const langBtns = document.querySelectorAll('#lang-switch');
    let currentLang = localStorage.getItem('selectedLang') || 'en';

    const translations = {
        en: {
            card3_div: "The best choice",
            btn: "KA",
            nav_home: "Home",
            nav_services: "Services",
            nav_money: "Earn money",
            nav_contact: "Contact",
            go_back: "Go Back",
            more: "Learn More",
            footer: "© 2026 GRAND Ellite DIGITAL AGENCY. ALL RIGHTS RESERVED.",
            hero_h1: "Digital Solutions for Business Growth",
            hero_p: "We help startups with website development, advertising, and brand empowerment.",
            hero_btn: "View Services",
            serv_sub: "Our Capabilities",
            serv_h2: 'Services that <span class="accent">Deliver Results</span>',
            card1_h3: "📢 Advertising",
            card1_p: "Aggressive Meta & Google Ads strategies for maximum sales conversion.",
            card2_h3: "💻 Website",
            card2_p: "Ultra-modern digital homes tailored specifically for your brand.",
            card3_h3: "🔥 Full Service",
            card3_p: "We take full responsibility for your digital image. Website, ad campaigns, and <strong>exclusive photo/video shoots with models</strong>. All in one space.",
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
            ref_h2: 'Refer a Client and <span class="highlight">Earn 10%</span>',
            ref_p: "Know a business owner who needs growth? Connect them with us and receive <b>10% of the deal value</b> directly to your card.",
            ref_range_label: "Project Price Range",
            ref_range_value: "1500₾ - 5000₾+",
            ref_share_label: "Your Fixed Commission",
            ref_share_value: "10% Per Deal",
            ref_example: "Example: For a 3000₾ project, you earn 300₾ instantly.",
            ref_sub: "Referral Program",
            pkg1: "3000$ Package",
            profit1: "Your Profit: 50$",
            pkg2: "5000$ Package",
            profit2: "Your Profit: 100$",
            step1: "Connect us with a client",
            step2: "We close the deal",
            step3: "You get paid",
            ref_btn: "Start Earning Now",
            faq_sub: "FAQ",
            pkg1_title: "Budget Package",
            pkg2_title: "Standard Package",
            pkg3_title: "Full Package",
            faq_h2: "Frequently Asked Questions",
            q1: "What are the benefits of working with you?",
            a1: "With us, you get a comprehensive service for a successful business. Instead of hiring different freelancers, Grand Ellite offers a complete package: Web development, ads, video editing, social media management, professional models, and domain/hosting setup.",
            q2: "What does 'Sales-Oriented Website' actually mean?",
            a2: "At Grand Ellite, web design isn't just about visuals—it's a sales strategy. We know exactly what layout and aesthetics to use to make your site attractive, user-friendly, and trustworthy for your customers.",
            q3: "Can I edit the website after the project is finished?",
            a3: "Yes, absolutely. Grand Ellite provides ongoing support at a minimal cost for edits such as adding products, changing prices, or updating content.",
            q4: "Can services be customized to fit my budget?",
            a4: "Of course. We believe every business is unique. Our team is ready to discuss your specific situation and offer a tailored package that effectively uses your resources to achieve your goals.",
            cont_sub: "Contact",
            cont_h2: "Start Your Project",
            phone: "Phone",
            number: "+1 951-598-7338",
            avail: '<span class="dot"></span> Available for Work',
            cont_desc: "Get in touch and let's build your profitable business together.",
            email: "Email",
            699: "699$",
            1199: "1199$",
            1699: "1699$",
            2999: "2999$",
            4999: "4999$",
            1499: "1499$",
            199: "199$",
            cont_p: "Fill out the form and our team will contact you shortly",
            ph_name: "Your Name",
            ph_phone: "Phone Number (5XX...)",
            sel_service: "Select Service",
            opt_web: "Web Development",
            opt_ads: "Advertising (Meta/Google)",
            opt_both: "Both Services",
            ph_details: "Briefly describe your project...",
            btn_send: "Send Message",
            success_msg: "✔ Thank you! Your request has been received.",
            why_title: "Why Grand Ellite?",
            why_desc: "We create digital products that actually work.",
            feat_sales_h: "Sales Oriented",
            feat_sales_p: "We don't just create beautiful websites; we build tools for your business growth.",
            feat_supp_h: "Full Support",
            feat_supp_p: "Our team knows exactly what your business needs to increase sales volume.",
            feat_speed_h: "Optimization & Speed",
            feat_speed_p: "Maximum speed on all devices, which directly impacts your Google ranking.",
            sakon: "Leave Your Details",
        },
        ka: {
            card3_div: "საუკეთესო არჩევანი",
            btn: "EN",
            nav_home: "მთავარი",
            nav_services: "სერვისები",
            nav_money: "გამოიმუშავე თანხა",
            nav_contact: "კონტაქტი",
            go_back: "უკან დაბრუნება",
            more: "იხილეთ ვრცლად",
            phone: "ტელეფონი",
            number: "+995 593 216 321",
            avail: '<span class="dot"></span> ხელმისაწვდომია სამუშაოდ',
            footer: "© 2026 GRAND Ellite DIGITAL AGENCY. ყველა უფლება დაცულია.",
            hero_h1: "ციფრული გადაწყვეტილებები ბიზნესის ზრდისთვის",
            hero_p: "ჩვენ ვეხმარებით სტარტაპებს ვებ-საიტის აწყობაში, რეკლამირებასა და ბრენდის გაძლიერებაში.",
            hero_btn: "იხილე სერვისები",
            serv_sub: "ჩვენი შესაძლებლობები",
            serv_h2: 'სერვისები, რომლებიც <span class="accent">ქმნიან შედეგს</span>',
            card1_h3: "📢 რეკლამა",
            card1_p: "Meta & Google Ads-ის აგრესიული სტრატეგია მაქსიმალური გაყიდვებისთვის.",
            card2_h3: "💻 ვებ-საიტი",
            card2_p: "ულტრა-თანამედროვე ციფრული სახლი თქვენი ბრენდისთვის.",
            card3_h3: "🔥 სრული სერვისი",
            card3_p: "ჩვენ ვიღებთ სრულ პასუხისმგებლობას თქვენს ციფრულ იმიჯზე. საიტი, რეკლამა და <strong>ექსკლუზიური გადაღებები მოდელებთან ერთად</strong>.",
            web_h1: "პროფესიონალური ვებ-საიტები",
            web_p: "შექმენი მძლავრი ციფრული პლატფორმა შენი ბიზნესისთვის",
            rental_badge: "მოქნილი არჩევანი",
            rental_type: "ვებ-საიტის გაქირავება",
            rental_title: "ყოველთვიურად გადახდა",
            feat_web: "ვებ-საიტი",
            feat_shoot: "ფოტო/ვიდეო გადაღება",
            feat_models: "გადაღება მოდელებით",
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
            all_in_one_h1: "ყველაფერი ერთ სივრცეში",
            all_in_one_p: "კომპლექსური გადაწყვეტილებები თქვენი ბიზნესის ზრდისთვის",
            pkg1_title: "ბიუჯეტური პაკეტი",
            pkg2_title: "სტანდარტული პაკეტი",
            pkg3_title: "სრული პაკეტი",
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
            ref_h2: 'მოგვიყვანე კლიენტი და <span class="highlight">მიიღე 10%</span>',
            ref_p: "გყავს ნაცნობი ბიზნესმენი? დაგვაკავშირე მასთან და <b>მიიღე პროექტის ღირებულების 10%</b> პირდაპირ შენს ბარათზე.",
            ref_range_label: "პროექტების ფასები",
            ref_range_value: "1500₾ - 5000₾+",
            ref_share_label: "შენი წილი",
            ref_share_value: "ყოველი გარიგების 10%",
            ref_example: "მაგალითი: 3000₾-იანი პროექტის შემთხვევაში, შენ მომენტალურად მიიღებ 300₾.",
            ref_sub: "პარტნიორული პროგრამა",
            pkg1: "3000₾ პაკეტი",
            profit1: "შენი მოგება: 50₾",
            pkg2: "5000₾ პაკეტი",
            profit2: "შენი მოგება: 100₾",
            step1: "დაგვაკავშირე კლიენტთან",
            step2: "ჩვენ ვხურავთ გარიგებას",
            step3: "შენ გერიცხება ფული",
            ref_btn: "დაიწყე ფულის შოვნა",
            faq_sub: "ხშირად დასმული კითხვები",
            faq_h2: "ხშირად დასმული კითხვები",
            q1: "რა უპირატესობები აქვს თქვენთან თანამშრომლობას?",
            a1: "ჩვენთან თქვენ იღებთ კომპლექსურ მომსახურებას წარმატებული ბიზნესისთვის. სხვადასხვა ფრილანსერების აყვანის ნაცვლად, Grand Ellite გთავაზობთ სრულ პაკეტს: ვებ დეველოპმენტი, რეკლამა, ვიდეო მონტაჟი, სოციალური მედიის მართვა, პროფესიონალური მოდელები და დომენის/ჰოსტინგის გამართვა.",
            q2: "რას ნიშნავს რეალურად 'გაყიდვებზე ორიენტირებული ვებ-გვერდი'?",
            a2: "Grand Ellite-ში ვებ დიზაინი მხოლოდ ვიზუალი არ არის — ეს გაყიდვების სტრატეგიაა. ჩვენ ზუსტად ვიცით, რომელი სტრუქტურა და ესთეტიკა გამოვიყენოთ, რომ თქვენი საიტი იყოს მიმზიდველი, მოსახერხებელი და სანდო მომხმარებლისთვის.",
            q3: "შევძლებ ვებ-საიტის რედაქტირებას პროექტის დასრულების შემდეგ?",
            a3: "დიახ, რა თქმა უნდა. Grand Ellite გთავაზობთ მუდმივ მხარდაჭერას მინიმალურ ფასად ისეთი ცვლილებებისთვის, როგორიცაა პროდუქტების დამატება, ფასების შეცვლა ან კონტენტის განახლება.",
            q4: "შესაძლებელია თუ არა სერვისების მორგება ჩემს ბიუჯეტზე?",
            a4: "რა თქმა უნდა. ჩვენ გვჯერა, რომ ყველა ბიზნესი უნიკალურია. ჩვენი გუნდი მზად არის განიხილოს თქვენი კონკრეტული სიტუაცია და შემოგთავაზოთ ინდივიდუალური პაკეტი, რომელიც ეფექტურად გამოიყენებს თქვენს რესურსებს მიზნების მისაღწევად.",
            cont_sub: "კონტაქტი",
            cont_h2: "დავიწყოთ თქვენი პროექტი",
            cont_desc: "დაგვიკავშირდით და ერთად შევქმნათ თქვენი მომგებიანი ბიზნესი.",
            phone: "ტელეფონი",
            email: "ელ-ფოსტა",
            avail: '<span class="dot"></span> ხელმისაწვდომია სამუშაოდ',
            699: "699₾",
            1199: "1199₾",
            1699: "1699₾",
            2999: "2999₾",
            4999: "4999₾",
            1499: "1499₾",
            199: "199₾",
            cont_p: "შეავსეთ მონაცემები და ჩვენი გუნდი მალე დაგიკავშირდებათ",
            ph_name: "თქვენი სახელი",
            ph_phone: "ტელეფონის ნომერი (5XX...)",
            sel_service: "აირჩიეთ სერვისი",
            opt_web: "ვებ-დეველოპმენტი",
            opt_ads: "რეკლამა (Meta/Google)",
            opt_both: "ორივე სერვისი",
            ph_details: "მოგვწერეთ მოკლედ თქვენი ბიზნესის შესახებ...",
            btn_send: "შეტყობინების გაგზავნა",
            success_msg: "✔ მადლობა! თქვენი მოთხოვნა მიღებულია.",
            why_title: "რატომ Grand Ellite?",
            why_desc: "ჩვენ ვქმნით ციფრულ პროდუქტებს, რომლებიც რეალურად მუშაობენ.",
            feat_sales_h: "გაყიდვებზე ორიენტირებული",
            feat_sales_p: "ჩვენ არ ვქმნით უბრალოდ ლამაზ საიტებს; ჩვენ ვქმნით ინსტრუმენტებს თქვენი ბიზნესის ზრდისთვის.",
            feat_supp_h: "სრული მხარდაჭერა",
            feat_supp_p: "ჩვენმა გუნდმა ზუსტად იცის, რა სჭირდება თქვენს ბიზნესს გაყიდვების მოცულობის გასაზრდელად.",
            feat_speed_h: "ოპტიმიზაცია და სისწრაფე",
            feat_speed_p: "მაქსიმალური სისწრაფე ყველა მოწყობილობაზე, რაც პირდაპირ აისახება თქვენს რეიტინგზე Google-ში.",
            sakon: "დაგვიტოვე საკონტაქტო",
        }
    };

    // --- Translation Logic ---
    function updatePageText() {
        langBtns.forEach(btn => {
            btn.textContent = translations[currentLang].btn;
        });

        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            const translation = translations[currentLang][key];

            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else if (el.tagName === 'OPTION') {
                    el.textContent = translation;
                } else {
                    if (translation.includes("<")) {
                        el.innerHTML = translation;
                    } else {
                        el.textContent = translation;
                    }
                }
            }
        });
    }

    // --- Event Listeners ---
    langBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            currentLang = currentLang === "en" ? "ka" : "en";
            localStorage.setItem("selectedLang", currentLang);
            updatePageText();
        });
    });

    if (burger && navMenu) {
        burger.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // --- Global Utility Functions ---
    window.toggleChat = function() {
        const chat = document.getElementById("waChat");
        if (chat) {
            chat.style.display = chat.style.display === "block" ? "none" : "block";
        }
    };

    window.sendToWhatsApp = function() {
        const messageInput = document.getElementById("waMessage");
        if (!messageInput) return;
        const message = messageInput.value.trim();
        if (message === "") return;
        const phone = "995593216321";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Initial load call
    updatePageText();
});

// --- Page Transitions ---
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("is-visible");
    }, 100);

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            // Only transition for local .html files and not anchors
            if (href && href.endsWith(".html") && !href.startsWith("#")) {
                e.preventDefault();
                document.body.classList.remove("is-visible");
                document.body.classList.add("is-leaving");
                setTimeout(() => {
                    window.location.href = href;
                }, 600);
            }
        });
    });
});

// --- Telegram Form Integration ---
const contactForm = document.getElementById('invisible-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const token = '8758823324:AAE_MhVUBRP3feogX-yxa_CQ9KHVblvVBWI'; 
        const chat_id = '1885063285'; 

        const name = document.getElementById('user_name').value;
        const phone = document.getElementById('user_phone').value;
        const service = document.getElementById('user_service').value;
        const details = document.getElementById('user_details').value || "არ არის მითითებული";
        
        const message = `🚀 *ახალი შეკვეთა Grand Ellite-ზე!*\n\n` +
                        `👤 *სახელი:* ${name}\n` +
                        `📞 *ნომერი:* ${phone}\n` +
                        `🛠 *სერვისი:* ${service}\n` +
                        `📝 *დეტალები:* ${details}`;
        
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

        const btn = document.getElementById('submit-btn');
        const success = document.getElementById('success-msg');

        const originalBtnText = btn.innerText;
        btn.innerText = 'იგზავნება...';
        btn.disabled = true;

        fetch(url)
            .then(res => {
                if(res.ok) {
                    btn.style.display = 'none';
                    success.style.display = 'block';
                    contactForm.reset();
                } else {
                    alert('შეცდომაა ბოტის მონაცემებში.');
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                }
            })
            .catch(() => {
                alert('ინტერნეტის ხარვეზია.');
                btn.innerText = originalBtnText;
                btn.disabled = false;
            });
    });
}

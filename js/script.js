
///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile navigation
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
        if (button.classList.contains("switch"))
            headerEl.classList.toggle("nav-open");
    });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".cover");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    }, {
        // In the viewport
        root: null,
    threshold: 0,
    rootMargin: "-80px",
}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
changeText();


// Change button text from Arabic to English
function changeText() {
    var localLang = localStorage.getItem("lang");
    var id = document.getElementsByName("switchBtn")[0].id;
    if (localLang == 'en') {
        document.getElementById("text").innerHTML = "العربية";
        document.getElementsByName("switchBtn")[0].id = 0;
    } else if (localLang == 'ar') {
        document.getElementById("text").innerHTML = "English";
        document.getElementsByName("switchBtn")[0].id = 1;
    }
};


// Translation

const content = document.getElementById("content");
console.log(content)

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || 'en');
});

const toggleLanguage = () => {
    const currentLanguage = content.lang || 'en';
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
};


const setLanguage = (language) => {
    const translations = {
        en: {
            home: 'Home',
            story: 'Our story',
            projects: 'Projects',
            contact: 'Contact us',
            heroTxt: 'Infinite Horizons Construction',
            heroDes: 'Where Expertise Meets Vision, Redefining Possibilities in Every Blueprint.',
            learn: 'Learn more',
            wta: 'Welcome to AFAQ, where style meets comfort, and every piece tells a story.',
            vision: 'Our Vision',
            visionDes: 'To become among the leading contractors in the region, thanks to God and the long heritage of providing the highest levels of craftsmanship in wood works.',
            mission: 'Our Mission',
            missionDes: 'Earning total client loyalty by providing excellence in every project we undertake, regardless of its size. Creating safe and rewarding employment opportunities for our employees. Providing high and sustainable returns to our shareholders.',
            philosophy: 'Our Philosophy',
            philosophyDes: 'Our passion is creating the finest. We will always strive to achieve a balance between maintaining originality and adapting to market requirements to raise the level of our work methodology and productivity.',
            values: 'Our Values',
            int: 'Integrity',
            integrityDes: 'As a company, we believe we have firm ethical and business commitments that embody our mission to operate in accordance with the highest standards of professional competence and ethics.',
            customer: 'Customers satisfaction',
            customerDes: 'The ability to perform the service in accordance with the promises made by the organization to customers, and not only from a commercial perspective, is a guarantee of the continuity of our business.',
            quality: 'High quality',
            qualityDes: 'We ensure that everything we produce always meets the highest quality standards and is a source of pride for our customers and employees alike.',
            innovation: 'Innovation',
            innovationDes: 'Innovation and dynamism are at the core of our work.',
            stimulus: 'Stimulus',
            stimulusDes: 'We want the company to provide an encouraging, attractive and enthusiastic environment for work and provide career development opportunities for the future.',
            project: 'Projects',
            projectDes: 'Some Of Our Projects',
            success: 'Success Partners',
            partners: 'Partners',
            address: 'Kingdom of Saudi Arabia - Jeddah - 3521 Okaz - Al-Rehab Dist.7907',
            company: 'Company',
            aboutAf: 'About AFAQ',
        },
        ar: {
            home: 'الرئيسية',
            story: 'قصتنا',
            projects: 'مشاريعنا',
            contact: 'تواصل معنا',
            heroTxt: 'بناء آفاق لا نهائية',
            heroDes: 'حيث تجتمع الخبرة مع الرؤية، وإعادة تعريف الإمكانيات في كل مخطط',
            learn: 'تعرف على المزيد',
            wta: 'مرحبًا بك في آفاق، حيث يلتقي الأسلوب بالراحة، وكل قطعة تحكي قصة.',
            vision: 'رؤيتنا',
            visionDes: 'أن نصبح من بين المقاولين الرائدين في المنطقة بفضل الله ثم التراث العريق في تقديم أعلى مستويات الحرفية في الأعمال الخشبية',
            mission: 'مهمتنا',
            missionDes: 'كسب ولاء العميل التام من خلال توفير التميّز في كل مشروع نتعهّده، بغضّ النظر عن حجمه. خلق فرص عمل آمنة ومجزية لموظّفينا. توفير عوائد عالية ومستدامة لمساهمينا',
            philosophy: 'فلسفتنا',
            philosophyDes: 'شغفنا صناعة الأرقى. ونحن سوف نسعى دائماً لتحقيق التوازن بين الحفاظ على الأصالة والتكيّف مع متطلّبات السوق لرفع مستوى منهجية العمل والإنتاجية لدينا.',
            values: 'قيمنا',
            int: 'النزاهة',
            integrityDes: 'كشركة، نحن نعتقد أن لدينا التزامات أخلاقية وتجارية ثابتة تجسد مهمتنا في العمل وفقاً لأعلى معايير الكفاءة المهنية والأخلاقية.',
            customer: 'ارضاء العملاء',
            customerDes: 'القدرة على تأدية الخدمة وفقــــاً للوعــود التي منحتهـــا المؤسسة للعملاء وليس من الناحية التجارية فقط، ضمانة على استمرارية أعمالنا.',
            quality: 'الجودة العالية',
            qualityDes: 'نحن نتأكد من أن كل ما ننتجه يناسب أعلى معايير الجودة على الدوام ليكون أيضاً مدعاة فخر لعملائنا والموظفين لدينا على حد سواء.',
            innovation: 'الإبتكار',
            innovationDes: 'الإبتكار والديناميكية في صميم عملنا.',
            stimulus: 'التحفيز',
            stimulusDes: 'نحن نريد أن توفّر الشركة بيئة مشجّعة، جاذبة ومحمّسة للعمل وتقديم فرص التطوّر الوظيفي للمستقبل.',
            project: 'مشاريعنا',
            projectDes: 'بعض مشاريعنا',
            success: 'شركاء النجاح',
            partners: 'الشركات التابعة',
            address: 'المملكة العربية السعودية - جدة - 3521 عكاظ - حي الرحاب 79.7',
            company: 'الشركة',
            aboutAf: 'عن آفاق',

                }
    };

    content.lang = language;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
                element.textContent = translations[language][translationKey];
            });
            document.dir = language === "ar" ? "rtl" : "ltr";
        };

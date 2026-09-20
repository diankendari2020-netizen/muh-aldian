document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: { navHome: 'Home', navAbout: 'About', navSkills: 'Skills', navPortfolio: 'Portfolio', navAchievements: 'Credentials', contactMe: 'Contact', heroEyebrow: 'MUH ALDIAN MAHARANI · PERSONAL PORTFOLIO', heroTitle: 'From business activity to <em>regulatory compliance.</em>', heroCopy: 'A personal portfolio documenting experience in business licensing, regulatory compliance, and corporate legal requirements.', viewPortfolio: 'View portfolio', letsConnect: 'View profile', aboutLabel: '01 / ABOUT ME', aboutTitle: 'A practical legal professional.', aboutLead: 'I am Aldian, a Legal & Business Licensing Specialist focused on business licensing, regulatory compliance, and corporate legal requirements in Indonesia.', aboutCopy: 'In my professional work, I handle licensing processes and business requirements through OSS-RBA as well as other sectoral licensing systems and mechanisms, including workstreams for both foreign investment (PMA) and domestic investment (PMDN) business profiles. My work covers regulatory research, licensing requirement identification, document preparation, application monitoring, government coordination, and compliance follow-up across different business sectors.', location: 'Location', education: 'Education', experience: 'Experience' },
    id: { navHome: 'Beranda', navAbout: 'Tentang', navSkills: 'Keahlian', navPortfolio: 'Portofolio', navAchievements: 'Kredensial', contactMe: 'Kontak', heroEyebrow: 'MUH ALDIAN MAHARANI · PORTOFOLIO PRIBADI', heroTitle: 'Dari kegiatan usaha menuju <em>kepatuhan regulasi.</em>', heroCopy: 'Portofolio pribadi yang mendokumentasikan pengalaman di bidang perizinan usaha, kepatuhan regulasi, dan kebutuhan legal perusahaan.', viewPortfolio: 'Lihat portofolio', letsConnect: 'Lihat profil', aboutLabel: '01 / TENTANG SAYA', aboutTitle: 'Profesional legal yang praktis.', aboutLead: 'Saya Aldian, seorang Legal & Business Licensing Specialist yang berfokus pada perizinan usaha, kepatuhan regulasi, dan kebutuhan legal perusahaan di Indonesia.', aboutCopy: 'Dalam pekerjaan profesional, saya menangani proses perizinan dan pemenuhan persyaratan usaha melalui OSS-RBA maupun sistem perizinan sektoral lainnya, termasuk workstream untuk profil usaha Penanaman Modal Asing (PMA) maupun Penanaman Modal Dalam Negeri (PMDN). Pekerjaan saya mencakup riset regulasi, identifikasi persyaratan perizinan, persiapan dokumen, monitoring permohonan, koordinasi instansi, dan tindak lanjut kepatuhan di berbagai sektor usaha.', location: 'Lokasi', education: 'Pendidikan', experience: 'Pengalaman' }
  };
  translations.en.aboutTitle = 'Focused on legal clarity for business.';
  translations.id.aboutTitle = 'Berfokus pada kejelasan legal bagi bisnis.';

  const setLanguage = language => {
    const dictionary = translations[language];
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = dictionary[element.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = dictionary[element.dataset.i18nHtml]; });
    document.querySelectorAll('.lang-button').forEach(button => button.classList.toggle('active', button.dataset.language === language));
    localStorage.setItem('aldian-language', language);
  };
  const initial = localStorage.getItem('aldian-language') || 'en';
  setLanguage(initial);
  document.querySelectorAll('.lang-button').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
});

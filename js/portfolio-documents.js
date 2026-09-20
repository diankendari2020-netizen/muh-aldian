document.addEventListener('DOMContentLoaded', () => {
  const portfolio = document.querySelector('#portfolioDocuments');
  if (!portfolio) return;

  const records = [
    { category: 'Food & Beverage · PMDN', title: 'Alcohol-related licensing compliance', summary: 'Licensing work involving a verified standard certificate, SKPL-A, SKPL-B&C, and NPPBKC requirements for a PMDN bar-related business activity.', cover: 'img/portifolio/SKPL B dan C.png', documents: [['Sertifikat Standar — Bar', 'img/portifolio/SS bar.png'], ['SKPL A', 'img/portifolio/SKPL A.png'], ['SKPL B & C', 'img/portifolio/SKPL B dan C.png'], ['NPPBKC', 'img/portifolio/NPPBKc.png']] },
    { category: 'Food Manufacturing', title: 'SNI, BPOM & quality management support', summary: 'Product and manufacturing compliance work covering SNI, processed-food approval, and ISO 9001:2015 quality-management documentation.', cover: 'img/portifolio/SNI.png', documents: [['SPPT SNI', 'img/portifolio/SNI.png'], ['Processed-food approval / BPOM', 'img/portifolio/Izin Edar.png'], ['ISO 9001:2015', 'img/portifolio/ISo 9001.png']] },
    { category: 'Digital Business · PMA', title: 'Digital platform licensing & registration', summary: 'Regulatory documentation for a PMA electronic-trading platform, including SIUPMSE and private-scope PSE registration.', cover: 'img/portifolio/Siupmse.png', documents: [['SIUPMSE', 'img/portifolio/Siupmse.png'], ['Private-scope PSE registration', 'img/portifolio/PSE-.png']] },
    { category: 'Food Service · PMDN', title: 'Hygiene and sanitation compliance', summary: 'PB UMKU documentation for hygiene and sanitation eligibility in a permanent-building food-service activity.', cover: 'img/portifolio/slhs.png', documents: [['Sertifikat Laik Higiene Sanitasi (SLHS)', 'img/portifolio/slhs.png']] },
    { category: 'Water Business', title: 'Groundwater-use licensing', summary: 'PB UMKU documentation for groundwater utilization in a refill drinking-water business activity.', cover: 'img/portifolio/Sipa.png', documents: [['Groundwater-use license (SIPA)', 'img/portifolio/Sipa.png']] },
    { category: 'Trade & Logistics · PMDN', title: 'Warehouse registration', summary: 'PB UMKU warehouse-registration documentation supporting a PMDN wholesale-trading business activity.', cover: 'img/portifolio/Tanda Daftar Gudang.png', documents: [['Warehouse registration', 'img/portifolio/Tanda Daftar Gudang.png']] }
  ];

  const section = document.createElement('div');
  section.className = 'permit-showcase reveal visible';
  section.innerHTML = `<div class="row g-3">${records.map((record, index) => `<div class="col-sm-6 col-lg-4"><button class="permit-card" data-record="${index}"><img src="${record.cover}" alt="${record.title}"><span>${record.category}</span><strong>${record.title}</strong><p>${record.summary}</p><i>View supporting document${record.documents.length > 1 ? 's' : ''} ↗</i></button></div>`).join('')}</div>`;
  portfolio.append(section);

  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'permitModal';
  modal.tabIndex = -1;
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = '<div class="modal-dialog modal-dialog-centered modal-xl"><div class="modal-content permit-modal"><div class="modal-header"><p class="section-no mb-0">DOCUMENTED OUTCOME</p><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" id="permitModalBody"></div></div></div>';
  document.body.append(modal);
  const permitModal = new bootstrap.Modal(modal);

  section.querySelectorAll('.permit-card').forEach(card => card.addEventListener('click', () => {
    const record = records[Number(card.dataset.record)];
    document.querySelector('#permitModalBody').innerHTML = `<p class="permit-category">${record.category}</p><h3>${record.title}</h3><p class="permit-summary">${record.summary}</p><div class="permit-documents">${record.documents.map(([label, src]) => `<figure><img src="${src}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}</div><p class="permit-disclaimer">Documentation is shown as a portfolio record only. Client names, identification numbers, and sensitive details are redacted.</p>`;
    permitModal.show();
  }));
});

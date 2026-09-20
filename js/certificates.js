document.addEventListener('DOMContentLoaded', () => {
  const certificates = {
    ctt: { title: 'Certified Tax Technician — Brevet A & B', summary: 'Professional competency certification issued by the Asosiasi Teknisi Perpajakan Indonesia (ATPI), valid for five years from 21 August 2025.', images: ['img/sertifikat/CTT1..jpeg', 'img/sertifikat/CTT2.jpeg', 'img/sertifikat/CTT3.jpeg'] },
    oss: { title: 'Business Licensing through OSS', summary: 'Verified intensive training on practical corporate licensing applications through OSS, including current KBLI and OSS risk-based licensing fundamentals.', images: ['img/sertifikat/Sertifikat_Muh_Aldian_Maharani_OSS14-20260505-LWPDG_page-0001.jpg', 'img/sertifikat/Sertifikat_Muh_Aldian_Maharani_OSS14-20260505-LWPDG_page-0002.jpg'] },
    haki: { title: 'Trademark & Copyright Registration Practice', summary: 'Verified intensive training in practical trademark and copyright registration with DJKI (Kemenkumham), including foundational IP concepts and application procedures.', images: ['img/sertifikat/Sertifikat_Muh_Aldian_Maharani_HAKI7-20260505-228VX_page-0001.jpg', 'img/sertifikat/Sertifikat_Muh_Aldian_Maharani_HAKI7-20260505-228VX_page-0002.jpg'] }
  };

  const modal = new bootstrap.Modal(document.querySelector('#certificateModal'));
  document.querySelectorAll('.certificate-open').forEach(card => card.addEventListener('click', () => {
    const certificate = certificates[card.dataset.certificate];
    const documents = certificate.images.map((src, index) => `<img src="${src}" alt="${certificate.title} — document page ${index + 1}" loading="lazy">`).join('');
    document.querySelector('#certificateModalBody').innerHTML = `<h3 class="certificate-title" id="certificateModalTitle">${certificate.title}</h3><p class="certificate-summary">${certificate.summary}</p><div class="certificate-docs">${documents}</div>`;
    modal.show();
  }));
});

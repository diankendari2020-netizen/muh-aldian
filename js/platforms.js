document.addEventListener('DOMContentLoaded', () => {
  const platformList = document.querySelector('.platform-exposure ul');
  if (!platformList) return;
  platformList.innerHTML = ['OSS RBA', 'AMDALNET', 'INATRADE', 'eReg-RBA BPOM', 'SIINAS', 'CEISA 4.0', 'Coretax DJP', 'Other sectoral portals'].map(platform => `<li>${platform}</li>`).join('');
});

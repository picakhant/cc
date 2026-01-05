export const openModal = (id) => {
  const modal = document.getElementById(id);
  modal.showModal();
};

export const closeModal = (id) => {
  const modal = document.getElementById(id);
  modal.close();
};

export const openModal = (id) => {
  const modal = document.getElementById(id);
  modal.showModal();
};

export const closeModal = (id) => {
  const modal = document.getElementById(id);
  modal.close();
};

export const modalIDs = {
  teacher_login: "teacher-login-modal",
  teacher_add_class: "teacher-add-class-modal",
  teacher_delete_class: "teacher-delete-class-modal",
  teacher_upload_material: "teacher-upload-material-modal",
};

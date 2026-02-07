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
  teacher_delete_material: "teacher-delete-material",
  teacher_add_folder: "teacher-add-folder",
  teacher_register_students: "teacher-register-students",
  teacher_logout: "teacher-logout",
  teacher_delete_student_upload_bucket: "teacher-delete-student-upload-bucket",
  teacher_manual: "teacher-manual",
  student_login: "student-login",
  sutdent_logout: "student-logout"
};

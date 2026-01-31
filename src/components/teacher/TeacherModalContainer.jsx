import Modal from "../Modal";
import { modalIDs } from "../../util/modal";
import AddClassForm from "../from/AddClassForm";
import DeleteClassForm from "../from/DeleteClassForm";
import TeacherUploadMaterialForm from "../from/TeacherUploadMaterialForm";
import DeletMaterialForm from "../from/DeletMaterialForm";
import AddFolder from "../from/AddFolder";

const TeacherModalContainer = () => {
  return (
    <>
      <Modal id={modalIDs.teacher_add_class}>
        <AddClassForm />
      </Modal>

      <Modal width={"w-[400px]"} id={modalIDs.teacher_delete_class}>
        <DeleteClassForm />
      </Modal>
      <Modal id={modalIDs.teacher_upload_material}>
        <TeacherUploadMaterialForm />
      </Modal>

      <Modal id={modalIDs.teacher_delete_material}>
        <DeletMaterialForm />
      </Modal>

      <Modal id={modalIDs.teacher_add_folder}>
        <AddFolder />
      </Modal>
    </>
  );
};

export default TeacherModalContainer;

import Container from "../components/util/layout/Container";
import { modals } from "./data/modals";
import Modal from "./Modal";

function page() {
  // const mapModals = modals.map((modal, index) => (
  //   <Modal
  //     modalName={modal.modalName}
  //     modalNum={modal.modalNum}
  //     btnLink={modal.btnLink}
  //     key={index}
  //   />
  // ));

  const mapModals = modals.map(
    (
      modal: { modalName: string; modalNum: string; btnLink: string },
      index
    ) => (
      <Modal
        modalName={modal.modalName}
        modalNum={modal.modalNum}
        btnLink={modal.btnLink}
        key={index}
      />
    )
  );

  return (
    <div>
      <Container>
        <div className="modals-container mb-8 flex flex-col gap-8">
          {mapModals}
        </div>
      </Container>
    </div>
  );
}

export default page;

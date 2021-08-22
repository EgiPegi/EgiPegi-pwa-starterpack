import React, { useState } from "react";
import Modal from "../../components/Modal";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(isModalOpen)
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / modal</div>
        <hr />
        <div className="title">Modal</div>
      </div>
      <div className="card">
        <div className="card-header">Modal Example</div>
        <div className="card-body">
          <button className="btn btn-info" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </button>
          <Modal
            isOpen={isModalOpen}
            closeModal={setIsModalOpen}
            title="This is The example of modal"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet felis sem. Etiam nec pretium nibh. Maecenas id lorem sit
            amet leo lobortis blandit a ut nisi. Aliquam augue velit, feugiat
            sed erat sit amet, aliquet interdum velit. Etiam consectetur mauris
            massa, a tincidunt leo pretium non. Nam sit amet augue ante. Duis
            sit amet magna id dui scelerisque tempor eget nec augue. Fusce quis
            ante erat. Proin tincidunt tristique nibh, sed tincidunt purus
            ultricies sed. Integer mi mi, convallis eget imperdiet ac, ultricies
            non ipsum. Nullam blandit urna justo, quis hendrerit magna tempus
            eu. Nunc nec lacinia quam, malesuada sagittis lectus. Nulla posuere
            dolor felis, in vehicula odio pulvinar auctor. Aenean facilisis
            eleifend massa, a dictum sem dapibus id. Phasellus faucibus lacus id
            enim cursus, non sagittis purus mattis.
            <div className="mt-2">
              <button
                className="btn btn-danger"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                className="btn btn-success mx-1"
                onClick={() => setIsModalOpen(false)}
              >
                Ok
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ModalPage;

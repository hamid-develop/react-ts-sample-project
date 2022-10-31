import { useState, FC, FormEvent, Dispatch, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { IPeople } from "../App";

interface IProps {
  person: IPeople;
  people: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const EditModal: FC<IProps> = ({ person, people, setPeople }) => {
  const [name, setName] = useState<string>(person.name);
  const [age, setAge] = useState<number | string>(person.age);
  const [img, setImg] = useState<string>(person.img);
  const [bio, setBio] = useState<string | undefined>(person.bio);
  const [showModal, setShowModal] = useState<boolean>(false);

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!name) {
      return alert("Please enter your full name..");
    }
    if (!age) {
      return alert("Please enter your Age..");
    }
    if (!img) {
      return alert("Please insert your Image..");
    }
    if (!bio) {
      return alert("Please enter your description bio..");
    }
    const editPeople = [...people];
    const index: number = editPeople.findIndex((p) => p.id === person.id);
    editPeople[index] = {
      id: person.id,
      name,
      age: +age,
      img,
      bio,
    };
    setPeople(editPeople);
    setShowModal(false)
  };

  return (
    <>
      <AiOutlineEdit
        size={30}
        cursor="pointer"
        className="text-success mx-2"
        onClick={() => setShowModal(true)}
      />
      <Modal
        size="lg"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header>
          <Modal.Title>{person.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-6 col-lg-6 mt-5 mx-auto">
            <form
              autoComplete="off"
              className="mb-3"
              onSubmit={(e) => submitHandler(e)}
            >
              <input
                type="text"
                name="name"
                placeholder={person.name}
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                name="age"
                //placeholder={person.age}
                className="form-control mb-2"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                type="text"
                name="img"
                //  placeholder={person.img}
                className="form-control mb-2"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <textarea
                rows={4}
                name="bio"
                //   placeholder={person.bio}
                className="form-control mb-2"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <button type="submit" className="btn btn-success mx-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="mx-auto"></Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;

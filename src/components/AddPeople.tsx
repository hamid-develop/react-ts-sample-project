import { useState, FormEvent, FC, Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";
import { IPeople } from "../App";

interface IProps {
  people: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const AddPeople: FC<IProps> = ({ people, setPeople }) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [img, setImg] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const resetData = (): void => {
    setName("");
    setAge("");
    setImg("");
    setBio("");
  };

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
    setPeople([
      ...people,
      {
        id: Math.floor(Math.random()*1000000) ,
        name,
        age,
        img,
        bio,
      },
    ]);
    Swal.fire({
        position: "center",
        icon: 'success',
        title: '.User successfully added',
        showConfirmButton: false,
        timer: 1500
      })
    resetData();
  };

  return (
    <div className="col-md-6 col-lg-6 mt-5 mx-auto">
      <form
        autoComplete="off"
        className="mb-3"
        onSubmit={(e) => submitHandler(e)}
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="form-control mb-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          name="img"
          placeholder="Img_url"
          className="form-control mb-2"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <textarea
          rows={4}
          name="bio"
          placeholder="Describtion"
          className="form-control mb-2"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPeople;

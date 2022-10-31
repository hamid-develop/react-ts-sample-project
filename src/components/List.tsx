import { FC, Dispatch, SetStateAction } from "react";
import { IPeople } from "../App";
import { AiOutlineUserDelete } from "react-icons/ai";
import EditModal from './EditModal'

interface IProps {
  people: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const List: FC<IProps> = ({ people, setPeople }) => {
  const handleDeletePerson = (id: number): void => {
    const filteredPeople: IPeople[] = people.filter((p) => p.id !== id);
    setPeople(filteredPeople);
  };

  const renderList: JSX.Element[] = people.map((person) => (
    <div key={person.id} className="col-12 col-lg-6">
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-center ">
          <img
            src={person.img}
            alt="profile-img"
            width={100}
            height={100}
            className="img-fluid  rounded-circle"
          />
          <div>
            <span className="d-flex">
              <p className="badge bg-primary mx-1">{person.age}</p>
              <h4>{person.name}</h4>
            </span>
            <div className="text-muted">{person.bio}</div>
          </div>
          <div className="operation_btns">
            <EditModal person={person} people={people} setPeople={setPeople} />
            <AiOutlineUserDelete
              size={30}
              className="text-danger"
              cursor="pointer"
              onClick={() => handleDeletePerson(person.id)}
            />
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className="row">{renderList}</div>;
};

export default List;

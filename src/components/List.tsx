import { FC } from "react";
import { IPeople } from "../App";

interface IProps {
  people: IPeople[];
}

const List: FC<IProps> = ({ people }) => {
  const renderList: JSX.Element[] = people.map((person) => (
    <div className="col-12 col-lg-6">
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
        </div>
      </div>
    </div>
  ));

  return <div className="row">{renderList}</div>;
};

export default List;

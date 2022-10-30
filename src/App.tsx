import { useState } from "react";
import List from "./components/List";
import AddPeople from "./components/AddPeople";

export interface IPeople {
  name: string;
  age: number | string;
  img : string;
  bio?: string;
}

const App = () => {
  const [people, setPeople] = useState<IPeople[]>([
    {
      name: "hamidreza",
      age: 33,
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTya0RHNcirVnmNSqh1P0lu8IVlFPSMiRuzcw&usqp=CAU",
      bio: "tehrani",
    },
  ]);

  return (
    <div className="container">
      <h4 className="alert alert-info">مدیریت کننده اشخاص</h4>
      <List people={people} />
      <AddPeople people={people} setPeople={setPeople} />
    </div>
  );
};
export default App;

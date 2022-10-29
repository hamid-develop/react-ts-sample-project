import { useState } from "react";
import List from "./components/List";

interface IPeople {
  name: string;
  age: number;
  img_url: string;
  bio?: string;
}

const App = () => {
  const [people, setPeople] = useState<IPeople[]>([
    {
      name: "hamidreza",
      age: 33,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTya0RHNcirVnmNSqh1P0lu8IVlFPSMiRuzcw&usqp=CAU",
      bio: "tehrani",
    },
  ]);

  return (
    <div className="container">
      <h4 className="alert alert-info">مدیریت کننده اشخاص</h4>
      <List people={people} />
    </div>
  );
};
export default App;

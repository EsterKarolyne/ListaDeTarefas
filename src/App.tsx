import { useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import {ListItem} from './components/ListItem';
import {AddArea} from './components/Components/AddArea';


function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Correr', done: false },
    { id: 2, name: 'Nadar', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleTaskChange = (id:number, done:boolean) =>{
    let newList = [...list]
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    console.log(newList)

  }
  

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem  onChange={handleTaskChange} key={index} item={item}></ListItem>
        ))}

      </C.Area>
     
    </C.Container>
  );
}

export default App;
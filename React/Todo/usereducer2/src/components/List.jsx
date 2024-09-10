import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
const List = ({todos, onUpdate, onDelete}) =>{
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) =>{
    setSearch(e.target.value);
  }

  const getFilteredData =() =>{
    if(search ===""){
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
    .toLowerCase().includes(search.toLocaleLowerCase())
    );

  };
 const filterdTodos = getFilteredData();
  return (
    <div className="List">
      <h4>Todo List</h4>
      <input 
       value={search}  
       onChange={onChangeSearch}
      placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
       {filterdTodos.map((todo)=>{
        return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
       })}
       {/* todos - 할일목록 */}
       {/* {...todo} - 전개연산자 todos객체의 모든 속성을 
       TodoItem 컴포넌트에  props로전달 */}
       {/* <TodoItem id={1} isDone={false} content="React 공부하기" date={1234567890} /> */}
      </div>
    </div>

  );
};
export default List;
import Todotitle from "./component/Todotitle";
import Addtodo from "./component/Addtodo";
import Todolist from "./component/Todolist";
import '../src/App.css';

function App (){
  return (
    <div className="container center">
    <Todotitle></Todotitle>
    <Addtodo></Addtodo>
    <Todolist></Todolist>
    </div>

  )

}
export default App;
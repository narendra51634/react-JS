import addcss from './addtodo.module.css'
const Addtodo = () => {

  console.log();
  return (
    <>
      <div class="row">
        <div class="col-4"><input type="text" placeholder="input todo" class="form-control" / ></div>
        <div class="col-4 "><input type="date"  class="form-control" / ></div>
        <div class="col-4 "><button class={`${addcss['nk-button']} btn btn-primary`}>Add </button></div>
      </div>
    </>
  );
};

export default Addtodo;

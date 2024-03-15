

const App = ()=> {
  
  return (
    <div>
      <center>
        <div className="card" >
          <div className="card-body">
            <h1 className="card-title">My Todo</h1>
            <form>
              <input type="text" name="TodoName"
/>
       <input type=" text" value="" name="description" /><button>AddTodo</button>

       
       <div className="card-content">My Todos</div><div className="card-subtitle">status Filter:<a href='#'className="btn btn-primary">All</a></div>
       <div className="container">

       <div className="card">
        <div className="card-body">
          <p className="card-text">Name:office Task=1</p> 
          <p className="card-text">Description: this is the description for My first Task</p>
          <p>status: <a href='#'className="btn btn-primary">Not completed</a></p>

          <a href='#'className="btn btn-primary">Edit</a>  <a href='#' className="btn btn-primary">Delete</a>
      </div>  
          
      


        </div>
       </div>
             
<div className="container1">
       <div className="card">
        <div className="card-body">
          <p className="card-text">Name:office task=2</p>
          <p className="card-text">Description: this is the description for My second task</p>
          <p>status: <a href='#'className="btn btn-primary"> completed</a></p>

          <a href='#'className="btn btn-primary">Edit</a>  <a href='#' className="btn btn-primary">Delete</a>


        </div>
       </div>

       </div>

       <div className="container2">
       <div className="card">
        <div className="card-body">
          <p className="card-text">Name:office task=2</p>
          <p className="card-text">Description: this is the description for My second task</p>
          <p>status: <a href='#'className="btn btn-primary"> completed</a></p>

          <a href='#'className="btn btn-primary">Edit</a>  <a href='#' className="btn btn-primary">Delete</a>


        </div>
       </div>

       </div>



    

       

            </form>
            
             
            </div>
            </div>
      </center>
    </div>
  )
}

export default App




  
  
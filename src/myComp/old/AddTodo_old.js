import React,{useState} from 'react';

const AddTodo_old = (props) => {
    const [title , setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title.trim() || !desc.trim())
            alert("Title or desciption cannot be empty ")
        else{
            props.addTodo(title.trim(),desc.trim());
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className= "container my-3">
            <h3>Add a Todo </h3>
            <form onSubmit={submit}>
                <div className ="mb-3">
                    <label htmlFor="Title" className ="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="Title"  /*aria-describedby="emailHelp */ />
                        
                </div>

                <div className ="mb-3">
                    <label htmlFor="desc" className ="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className ="form-control" id="desc"/>
                </div>

                {/* <div className ="mb-3 form-check">
                    <input type="checkbox" className ="form-check-input" id="exampleCheck1"/>
                        <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                
                <button type="submit" className ="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo_old

import React from "react"
import styles from "@/styles/CreateBlog.module.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const CreateBlog = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    post: "",
    tags: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

 
  
  return (
    <div className={styles.container}>
       <form className={styles.formmain} onSubmit={handleSubmit}>
        <div className={styles.formcontrol}>
          <label >Title </label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleInputChange}
          />
        
       
          <label>Description </label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleInputChange}
          />
       
       
          <label>Tags </label>
          <input
            type="text"
            name="tags"
            value={state.tags}
            onChange={handleInputChange}
          />
        
        
          <label>Post </label>
          <input
            type="text"
            name="post"
            value={state.post}
            
            onChange={handleInputChange}
          />
        
        <div className={styles.button}>
          <label></label>
          <button type="submit">submit</button>
        </div>
        </div>
      </form>
       
      </div>
    
    )
  }


export default CreateBlog;

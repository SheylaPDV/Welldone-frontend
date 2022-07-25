import useForm from "../../../hooks/useForm";
import "./newArticule.css"

function NewArticuleForm({ onSubmit }) {
  const {
    formValue: newArticule,
    handleChange,
    handleSubmit,
  } = useForm({
    title: "",
    content: "",
    photo: ""
  });
  const { title, content, photo} = newArticule;


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="articuleForm" encType="multipart/form-data">
        <h2 className="articuleForm-title">What are you thinking?</h2>
        <label className="label-input">Title</label>
        <div className="input-group">
        <input
          className="input"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <label className="label-input">Content</label>
      <div className="input-group">
        <textarea
        
          className="text-area"
          name="content"
          value={content}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <div>
        <label htmlFor="photo" className="photo-label">
          <i className="fa fa-2x fa-camera icon"></i>
          Select photo
          <input 
          className="photo-input"
          id="photo" 
          name="photo" 
          type="file"
          onChange={handleChange}
          />
          { photo?.name && <span className="photo-text">!!!Photo cargada</span> }
        </label>
      </div>

      <button className="button" >Create Articule</button>
    </form>
  )
}

export default NewArticuleForm;
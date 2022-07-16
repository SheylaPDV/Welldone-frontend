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
  });
  const { title, content } = newArticule;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="articuleForm">
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

      <button>Create Articule</button>
    </form>
  )
}

export default NewArticuleForm;
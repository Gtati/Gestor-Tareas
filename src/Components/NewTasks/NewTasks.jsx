import { useContext, useRef, useState } from "react"
import { taskContext } from "../Context/Context"
import { v4 as uuidv4} from "uuid"
import './NewTasks.css'



export const NewTasks = () => {

const context = useContext(taskContext)

const [titleTask, setTitleTask] = useState('')
const [descriptionTask, setDescriptionTask] = useState('')

const txtTitle = useRef('')
const txtDescription = useRef('')

const handleTitleTask = (event) => setTitleTask(event.target.value)
const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)


const handleCreateTask = (event) => {
    event.preventDefault()
    const newTask = {
        id: uuidv4(),
        title: titleTask,
        description: descriptionTask,
        status: false
    }
    context.setTasks([...context.tasks, newTask])
    context.setFilteredTasks([...context.tasks, newTask])

    txtTitle.current.value = ""
    txtDescription.current.value = ""
}
  return (
    <form className='frm-task'>
        <fieldset>
            <label >Titulo de la Tarea</label>
            <input ref={txtTitle} onChange={handleTitleTask} id="txt-title" placeholder="Ej: Aseo Ambiente" type="text"/>
        </fieldset> 
         <fieldset>
            <label >Descripcion de la Tarea</label>
            <input ref={txtDescription} onChange={handleDescriptionTask} id="txt-description" placeholder="Ej: Realizar en aseo del ambiente" type="text" maxLength={100}/>
        </fieldset>
        <button onClick={handleCreateTask} className="btn-new-task">Crear Nueva Tarea</button>
    </form>
  )
}

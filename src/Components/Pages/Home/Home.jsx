import { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { taskContext } from "../../Context/Context";
import { ItemTasks } from "../../ItemTasks/ItemTasks";
import { NewTasks } from "../../NewTasks/NewTasks";


export const Home = () => {
  const { filteredTasks } = useContext(taskContext);

  return (
    <>
      <Header>
        <h1>Gestor de tareas</h1>
        <NewTasks/>
      </Header>
      <Main>
        <ContainerTasks>
          {filteredTasks.map((task) => (
            <ItemTasks
              key={task.id}
              idTask={task.id}
              content={task.description}
              titleTask={task.title}
            />
          ))}
        </ContainerTasks>
      </Main>
      </>
      );
};
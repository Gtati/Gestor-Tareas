import './App.css'
import { Home } from './Components/Pages/Home/Home'
import { TasksProvider } from './Components/Context/Context'


export const App = () => <TasksProvider> <Home/> </TasksProvider>   

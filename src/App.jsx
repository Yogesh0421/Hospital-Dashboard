
import './App.css'
import CalendarView from './components/CalendarView/CalendarView'
import DashboardMain from './components/DashboardMainContent/DashboardMain'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  

  return (
    <div className='container'>
      <Sidebar/>
      <DashboardMain/>
      <CalendarView/>
    </div>
  )
}

export default App

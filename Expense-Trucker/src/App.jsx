import './App.css'
import ExpenseAdd from './components/ExpenseAdd'
import ExpenseCards from './components/ExpenseCards'

function App() {

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-5">
          <ExpenseAdd />
        </div>
        <div className="col-md-7">
          <ExpenseCards />
        </div>
      </div>

    </div>
  )
}

export default App


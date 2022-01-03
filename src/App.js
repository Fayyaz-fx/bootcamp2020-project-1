import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionHistory from './components/TransactionHistory'
import TransactionSummary from './components/TransactionSummary'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalContext'
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='app-container'>
        <Balance />
        <TransactionSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App

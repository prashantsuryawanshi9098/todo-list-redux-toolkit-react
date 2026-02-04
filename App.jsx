import { Provider } from 'react-redux'
import { store } from './app/store'
import Addtodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-8">
        
        <Addtodo />
        <Todo />
      </div>
    </Provider>
  )
}

export default App

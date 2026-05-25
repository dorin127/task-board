import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>タスクボード</h1>

      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="タスクを入力してEnterまたは追加ボタンを押してください"
        />
        <button className="btn-add" onClick={addTask}>追加</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">タスクがありません。追加してみましょう！</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'task completed' : 'task'}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <button className="btn-delete" onClick={() => deleteTask(task.id)}>削除</button>
            </li>
          ))}
        </ul>
      )}

      {tasks.length > 0 && (
        <p className="summary">
          {tasks.filter(t => t.completed).length} / {tasks.length} 件完了
        </p>
      )}
    </div>
  )
}

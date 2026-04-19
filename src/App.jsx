import { Routes, Route, Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Productivity Dashboard</h1>
    <p>Welcome! Use the links below to navigate.</p>
    <nav>
      <Link to="/tasks">To-Do List</Link> | <Link to="/notes">Shared Notes</Link>
    </nav>
  </div>
);

const Tasks = () => (
  <div style={{ padding: '20px' }}>
    <h2>To-Do List</h2>
    <ul>
      <li>[ ] Set up Firebase (Assignee: Me)</li>
      <li>[ ] Style the Dashboard (Assignee: Friend)</li>
    </ul>
    <Link to="/">Back Home</Link>
  </div>
);

const Notes = () => (
  <div style={{ padding: '20px' }}>
    <h2>Shared Notes</h2>
    <textarea placeholder="Type a note..." rows="5" cols="30" />
    <br />
    <button onClick={() => alert('Refreshing...')}>Refresh</button>
    <br />
    <Link to="/">Back Home</Link>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
}

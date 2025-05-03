// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function Home() {
//   return <h2>Home Page</h2>
// }

// function About() {
//   return <h2>About Page</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;







import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
import { Routes, Route } from "react-router-dom"

import Layout from "./layouts/Layout"

import Dashboard from "./routes/Dashboard"
import Students from "./routes/Students"
import Teachers from "./routes/Teachers"
import Classes from "./routes/Classes"
import Attendance from "./routes/Attendance"
import Timetable from "./routes/Timetable"
import Exams from "./routes/Exams"
import Grades from "./routes/Grades"
import Fees from "./routes/Fees"
import Announcements from "./routes/Announcements"

import Login from "./features/auth/Login"
import Register from "./features/auth/Register"
import Profile from "./features/auth/Profile"

function App() {
  return (
    <Routes>

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}
      <Route element={<Layout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/announcements" element={<Announcements />} />

        {/* PROFILE */}
        <Route path="/profile" element={<Profile />} />

      </Route>
    </Routes>
  )
}

export default App
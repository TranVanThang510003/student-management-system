
import {  Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import ManageStudentPage from './pages/ManageStudentPage.jsx'
import SignIn from './components/auth/SignIn.jsx'
import Verification from './components/auth/Verification.jsx'
function App() {


  return (
    <Routes>
      <Route path="/instructor" element={<Layout /> }>
        <Route
          path="manage-students"
          element={
              <ManageStudentPage/>
          }
        />
      </Route>
      <Route
        path="/sign-in"
        element={
          <SignIn/>
        }
      />
      <Route
        path="/sign-in/verify"
        element={
          <Verification/>
        }
      />
    </Routes>

  )
}

export default App

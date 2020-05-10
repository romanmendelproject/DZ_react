import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import CoursesContainer from "./components/Courses/CoursesContainer";
import MyCoursesContainer from "./components/MyCourses/MyCoursesContainer";
import OneCourseContainer from "./components/OneCourse/OneCourseContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Login/Register";

const App = () => {
       return (
              <div className='app-wrapper'>
                     <HeaderContainer />
                     <Navbar />
                     <div className='app-wrapper-content'>

                            <Route path='/course/:id?'
                                   render={() => <OneCourseContainer />} />

                            <Route path='/courses'
                                   render={() => <CoursesContainer />} />

                            <Route path='/login'
                                   render={() => <LoginPage />} />

                            <Route path='/register'
                                   render={() => <RegisterPage />} />

                            <Route path='/mycourses'
                                   render={() => <MyCoursesContainer />} />

                     </div>
              </div>
       )
}

export default App;
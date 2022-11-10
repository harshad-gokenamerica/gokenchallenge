import NavbarComponent from "./components/Generic/Navbar/NavbarComponent";
import {
  BrowserRouter as Router,
  Route, 
  Routes, 
} from 'react-router-dom'
import Home from "~/pages/Home";
import Careers from '~/pages/Careers';
import Footer from '~/components/Generic/Footer/Footer';
import JobDetails from '~/components/Job Details/JobDetails';
import { joinTheTeamButtons } from "~/data/landing-page-data"
import HeaderTextAndButton from "~/components/Generic/HeaderTextAndButton/HeaderTextAndButton"
import BlogPostsSection from "~/components/Generic/BlogPostsSection/BlogPostsSection"
import { blogPosts } from "./data/landing-page-data";

function App() {
  return (
    <>
      <Router>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/careers" element={<Careers/>} />
                <Route path="/careers/:id" element={<JobDetails/>} />
            </Routes>
            <HeaderTextAndButton element={joinTheTeamButtons[2]} variant={"gray"}/>
            <BlogPostsSection sectionTitle="INSIGHTS" blogPosts={blogPosts}/>
            <Footer />
        </Router>
    </>
  );
}

export default App;

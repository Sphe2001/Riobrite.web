import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ServicesPage from "./pages/services/services";
import ProjectsPage from "./pages/projects/projects";
import CareersPage from "./pages/careers/careers";
import BlogPage from "./pages/blog/blog";
import ContactUsPage from "./pages/contact/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

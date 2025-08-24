import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { TransitionProvider } from "./components/transition/transitionContext";
import TransitionComponent from "./components/transition/transition";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import ServicesPage from "./pages/services/services";
import ProjectsPage from "./pages/projects/projects";
import CareersPage from "./pages/careers/careers";
import BlogPage from "./pages/blog/blog";
import ContactUsPage from "./pages/contact/contact";

function App() {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <Layout />
            </TransitionComponent>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </TransitionProvider>
  );
}

export default App;

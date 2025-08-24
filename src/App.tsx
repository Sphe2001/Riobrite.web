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
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <TransitionComponent>
                <HomePage />
              </TransitionComponent>
            }
          />
          <Route
            path="about"
            element={
              <TransitionComponent>
                <AboutPage />
              </TransitionComponent>
            }
          />
          <Route
            path="services"
            element={
              <TransitionComponent>
                <ServicesPage />
              </TransitionComponent>
            }
          />
          <Route
            path="projects"
            element={
              <TransitionComponent>
                <ProjectsPage />
              </TransitionComponent>
            }
          />
          <Route
            path="careers"
            element={
              <TransitionComponent>
                <CareersPage />
              </TransitionComponent>
            }
          />
          <Route
            path="blog"
            element={
              <TransitionComponent>
                <BlogPage />
              </TransitionComponent>
            }
          />
          <Route
            path="contact"
            element={
              <TransitionComponent>
                <ContactUsPage />
              </TransitionComponent>
            }
          />
        </Route>
      </Routes>
    </TransitionProvider>
  );
}

export default App;

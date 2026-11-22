import { useEffect } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

import Blog from "./components/Blog.jsx";
import Support from "./components/Support.jsx";
import Contact from "./components/Contact.jsx";
import { API_BASE_URL } from "./config.js";

const routes = {
  "/": Home,
  "/about": About,
  
  "/blog": Blog,
  "/support": Support,
  "/contact": Contact,
};

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return routes[path] || Home;
}

function useSiteInteractions() {
  useEffect(() => {
    const onClick = (event) => {
      const menuButton = event.target.closest(".mobile-menu-btn");
      if (menuButton) {
        const nav = document.querySelector("header nav");
        if (!nav) return;
        nav.classList.toggle("active");
        document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
      }

      const navLink = event.target.closest("header nav a");
      if (navLink) {
        document.querySelector("header nav")?.classList.remove("active");
        document.body.style.overflow = "";
      }

      const faq = event.target.closest(".faq-question");
      if (faq) {
        const wasActive = faq.classList.contains("active");
        document.querySelectorAll(".faq-question").forEach((item) => {
          item.classList.remove("active");
          item.nextElementSibling?.classList.remove("active");
        });
        if (!wasActive) {
          faq.classList.add("active");
          faq.nextElementSibling?.classList.add("active");
        }
      }
    };

    const onSubmit = async (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      const isContact = form.matches("#contactForm, .contact-form");
      const isNewsletter = form.matches("#newsletterForm, .newsletter-form");
      if (!isContact && !isNewsletter) return;
      event.preventDefault();
      if (!form.reportValidity()) return;

      const button = form.querySelector('button[type="submit"], button:not([type])');
      const original = button?.textContent;
      if (button) { button.disabled = true; button.textContent = "Sending..."; }
      let status = form.querySelector("[data-api-status]");
      if (!status) {
        status = document.createElement("p");
        status.dataset.apiStatus = "true";
        status.setAttribute("role", "status");
        form.append(status);
      }
      status.textContent = "";
      try {
        const value = (id) => form.querySelector(`#${id}`)?.value?.trim() || "";
        const payload = isNewsletter ? { email: form.querySelector('input[type="email"]')?.value?.trim() || "" } : {
          name: value("name"), email: value("email"), phone: value("phone"),
          subject: value("subject"), message: value("message")
        };
        const response = await fetch(`${API_BASE_URL}/api/${isNewsletter ? "newsletter" : "contact"}`, {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(result.error || "Unable to submit. Please try again.");
        status.textContent = result.message || (isNewsletter ? "Thanks for subscribing!" : "Thank you! Your message has been received.");
        status.dataset.state = "success";
        form.reset();
      } catch (error) {
        status.textContent = error.message || "A network error occurred. Please try again.";
        status.dataset.state = "error";
      } finally {
        if (button) { button.disabled = false; button.textContent = original || "Submit"; }
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit, true);
      document.body.style.overflow = "";
    };
  }, []);
}

export default function App() {
  useSiteInteractions();
  const CurrentPage = getCurrentPage();
  return <CurrentPage />;
}

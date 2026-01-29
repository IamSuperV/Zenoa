// Route Protection & Session Guard

import { monitorAuth } from "./auth.js";

const publicPages = ["index.html", "login.html", "signup.html", "about.html", "methodology.html", "contact.html", "pricing.html", "404.html"];
const authPages = ["login.html", "signup.html"];

function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1) || "index.html";
}

monitorAuth((user) => {
    const currentPage = getCurrentPage();

    if (user) {
        // User is logged in
        console.log("Session Active:", user.email);

        // Redirect away from Auth pages if logged in
        if (authPages.includes(currentPage)) {
            window.location.href = "dashboard.html";
        }

        // Update UI for logged in state (if on public page)
        updateNavbar(true);

    } else {
        // User is NOT logged in
        console.log("No Active Session");

        // Redirect to login if on a protected page
        if (!publicPages.includes(currentPage)) {
            // Allow access to root if it's strictly the landing page
            if (currentPage !== "" && currentPage !== "index.html") {
                window.location.href = "login.html";
            }
        }

        updateNavbar(false);
    }
});

function updateNavbar(isLoggedIn) {
    // Simple DOM manipulation to update navbar if it exists
    const navAuthSection = document.querySelector('.navbar .flex.items-center.gap-4');
    if (!navAuthSection) return;

    if (isLoggedIn) {
        // Show Logout / Dashboard links logic could go here
        // For now, pages usually handle their own nav state, 
        // but index.html might need a toggle.
    }
}

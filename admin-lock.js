// admin-lock.js

(function () {
  const passKey = atob("ZGl2aW5laW50ZXJ2ZW50aW9u"); // "divineintervention"
  const access = localStorage.getItem("kizm_vault_access");

  if (access !== passKey) {
    const entered = prompt("Enter Divine Access Phrase:");

    if (entered && entered.trim().toLowerCase() === passKey) {
      localStorage.setItem("kizm_vault_access", passKey);
      alert("Access granted. Welcome, Grand Minister.");
    } else {
      alert("Incorrect. This vault is sealed.");
      window.location.href = "404.html";
    }
  }
})();

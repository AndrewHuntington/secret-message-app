const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents submiting form/page reload

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  // Format: domain/path#hash / fragment
  // The hash/fragment is used to pass values to the browser
  // window.location, when put into a string, returns the current url
  linkInput.value = `${window.location}#${encrypted}`;
  // Auto selects the text for the user, making it easier to copy
  linkInput.select();
});

/** This JavaScript file is arbitrary is simply used for the purposes of this exercise.
 * All important scripts are defined inline in the examples.
 * */

window.examples = [
  {
    path: "InitializePlayer.html",
    title: "Initialize Player"
  },
  {
    path: "Animations.html",
    title: "Toggle Animation"
  },
  { path: "StandardForm.html", title: "Standard Form" },
  { path: "StandardFormStyled.html", title: "Standard Form Styled" }
];

window.currentExample = examples.find(({ path }) =>
  window.location.pathname.includes(path)
);

initNavigation();

function initNavigation() {
  const body = document.querySelector("body");
  const nav = document.createElement("div");
  nav.setAttribute("class", "nav-bar");

  const back = document.createElement("button");
  back.setAttribute("id", "back");
  back.innerHTML = "Back";
  back.addEventListener("click", goBack);

  const next = document.createElement("button");
  next.setAttribute("id", "next");
  next.innerHTML = "Next";
  next.addEventListener("click", goNext);

  nav.appendChild(back);
  nav.appendChild(next);
  body.appendChild(nav);
}

function goBack() {
  const cur = window.currentExample;
  const examples = window.examples;

  const indexOf = examples.findIndex(ex => ex.path === cur.path);

  if (indexOf === 0) window.location.href = `../index.html`;
  else window.location.href = `./${examples[indexOf - 1].path}`;
}

function goNext() {
  const cur = window.currentExample;
  const examples = window.examples;

  const indexOf = examples.findIndex(ex => ex.path === cur.path);

  if (indexOf === examples.length - 1) window.location.href = `../index.html`;
  else window.location.href = `./${examples[indexOf + 1].path}`;
}

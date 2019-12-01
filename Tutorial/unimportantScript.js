/** This JavaScript file is arbitrary is simply used for the purposes of this exercise.
 * All important scripts are defined inline in the examples.
 * */

window.examples = [
  {
    message: `
      <div>
        This is our app without ThreeKit. In this tutorial, we will walk through each step to creating a fully integrated experience.
      </div>`,
    path: "1_AppWNoPlayer.html",
    title: "1. Our Fake App"
  },
  {
    message: `
      <div>
        <h4>Step 1: Embed Player</h4>
          <li> Add a div for the PlayerEl </li>
          <li> Add the player's script tag </li>
          <li> Add JavaScript to initialize the Player </li>
        </ol>
      </div>
      `,
    path: "2_EmbedPlayer.html",
    title: "2. Embed Player"
  },
  {
    message: `
      <div>
        <h4>Step 2: Connect Configuration</h4>
          <li> Add initConfigurator to ThreeKit Script </li>
          <li> Add a listener function that injects the config into the Player </li>
        </ol>
      </div>
      `,
    path: "3_ConnectConfig.html",
    title: "3. Connect Configuration"
  }
];

window.currentExample = examples.find(({ path }) =>
  window.location.pathname.includes(path)
);

initNavigation();
initMessage();

/** MESSAGE */
function initMessage() {
  const body = document.querySelector("body");

  const el = document.createElement("div");
  el.setAttribute("class", "message-container");
  el.setAttribute("id", "message-container");
  el.innerHTML = window.currentExample.message;

  const closeBttn = document.createElement("button");
  closeBttn.setAttribute("class", "close-el");
  closeBttn.innerText = "X";
  closeBttn.addEventListener("click", closeMessage);

  el.appendChild(closeBttn);
  body.appendChild(el);
}

function closeMessage() {
  document.getElementById("message-container").remove();
}

/** NAVIGATION */

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

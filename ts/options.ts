document.getElementById("time-format-radio")?.addEventListener("submit", saveOptions);
document.getElementById("time-format-radio")?.addEventListener("click", toggleButton);

let saved : boolean;

function saveOptions(e : Event) {
  const formOptions = document.getElementsByName("time-format");
  let settings;

  for (const op of formOptions) {
    const fv = op as HTMLInputElement;
    if (fv.checked) {
      settings = { TIME_FORMAT: fv.value }
    }
  }

  browser.storage.local.set({
    TIME_FORMAT: settings?.TIME_FORMAT
  }).then(resp => {
    saved = true;
    toggleButton();

    if (!document.getElementById("saved-notice")) {
      const savedNotice = document.createElement("span");
      savedNotice.setAttribute("id", "saved-notice");
      savedNotice.innerText = "Settings saved!";
      savedNotice.style.opacity = "1";

      document.getElementById("time-format-radio")?.append(savedNotice);
    }

    setTimeout(() => {
      document.getElementById("saved-notice")?.remove();
    }, 3500)
  }).catch(e => {
    saved = false;
    window.console.error("SETTINGS COULD NOT BE SAVED: " + new Error(e));
  })

  e.preventDefault();
}

function toggleButton() {
  console.log(saved);
  const btn: HTMLElement = document.getElementById("save-btn")!;

  if (saved){
    (btn as HTMLInputElement).disabled = true;
    btn.setAttribute("class", "disabled");
  }
  else{
    (btn as HTMLInputElement).disabled = false;
    btn.setAttribute("class", "enabled");
  }

  saved = false;
}

document.getElementById("time-format-radio")?.addEventListener("submit", saveOptions);

function saveOptions(e : Event ) {
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
  });

  document.getElementById("time-format-radio")?.append("Settings saved!");
  e.preventDefault();
}

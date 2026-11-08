// Click a photo to see it larger. Without JavaScript the link opens the full-size image.
(function () {
  var dialog = document.createElement("dialog");
  if (typeof dialog.showModal !== "function") return;

  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Enlarged image");
  dialog.innerHTML = '<button type="button" class="lb-close">Close</button><img alt=""><p></p>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var caption = dialog.querySelector("p");

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a.zoom");
    if (!link) return;
    event.preventDefault();
    var thumb = link.querySelector("img");
    var figure = link.closest("figure");
    var figcaption = figure ? figure.querySelector("figcaption") : null;
    img.src = link.href;
    img.alt = thumb ? thumb.alt : "";
    caption.textContent = figcaption ? figcaption.textContent : "";
    dialog.showModal();
  });

  dialog.addEventListener("click", function () { dialog.close(); });
  dialog.addEventListener("close", function () { img.removeAttribute("src"); });
})();

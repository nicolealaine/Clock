document.addEventListener("DOMContentLoaded", function (event) {
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const bodyTheme = document.querySelector("main");
  const themeButtonWrapper = document.querySelector(".day-night-wrapper");
  const themeImage = document.querySelector(".day-night-image");
  const themeButton = document.querySelector(".day-night-button");

  function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = seconds * 6 + 90;
    const minDeg = minutes * 6 + 90;
    const hourDeg = hours * 30 + 0.5 * minutes + 90;

    secondHand.style.transform = `translateX(1.5rem) rotate(${secDeg}deg)`;
    minHand.style.transform = ` translateX(4.2rem) rotate(${minDeg}deg)`;
    hourHand.style.transform = ` translateX(6.9rem) rotate(${hourDeg}deg)`;
  }

  setInterval(setTime, 1000);

  themeButtonWrapper.addEventListener("click", () => {
    if (bodyTheme.classList.contains("light")) {
      bodyTheme.classList.remove("light");
      bodyTheme.classList.add("dark");
      themeImage.src = "sun-icon.webp";
      themeButton.style.alignSelf = "flex-start";
    } else {
      bodyTheme.classList.remove("dark");
      bodyTheme.classList.add("light");
      themeImage.src = "moon-icon.webp";
      themeButton.style.alignSelf = "flex-end";
    }
  });
});

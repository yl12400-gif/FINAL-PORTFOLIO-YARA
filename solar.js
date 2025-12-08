
function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 10000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();

window.addEventListener('load', () => {

  const planets = [
    { selector: '.jupiter', url: 'https://yl12400-gif.github.io/probject1yara/' },

    { selector: '.saturn', url: 'https://yl12400-gif.github.io/Project2Final/' },

    { selector: '.uranus', url: 'https://yl12400-gif.github.io/AUDIOPROJECT/' },

    { selector: '.neptune', url: 'https://yl12400-gif.github.io/FILMproject/' }
  ];

  planets.forEach(planet => {
    const element = document.querySelector(planet.selector);

    if (element) {
      element.style.cursor = 'pointer';

      element.addEventListener('click', () => {

        window.location.href = planet.url;

      });
    } else {
      console.error(`Element not found for selector: ${planet.selector}`);
    }
  });
});
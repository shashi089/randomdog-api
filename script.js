const get_dog = document.querySelector("#btn");
const dog_image = document.querySelector(".dog_images");

get_dog.addEventListener("click", getRandomDog);

async function getRandomDog() {
  let response = await fetch("https://random.dog/woof.json");
  let data = await response.json();
  dog_image.innerHTML = `<img src="${data.url}">`;
}

function toggleMode() {
  let html_class = "light";
  const html = document.documentElement //documentElement se refere ao elemento html
  const img = document.querySelector("#profile img") //querySelector mesmo seletor que o do css

  // if(html.classList.contains(html_class)){
  //   html.classList.remove(html_class)
  // } else {
  //   html.classList.add(html_class)
  // } /*classList se referencia a clase do elemento que no caso seria a classe do html*/

  /*Ja existe uma função que realiza essa troca */
  html.classList.toggle(html_class)

  
  
  if(html.classList.contains(html_class)){
    img.setAttribute("src","./assets/avatar.jpg")
    img.setAttribute("alt","Foto de perfil no modo light mode")
  } else {
    img.setAttribute("src","./assets/avatar-light.jpg")
    img.setAttribute("alt","Foto de perfil")
  }
}
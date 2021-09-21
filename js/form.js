


      form.addEventListener('submit', e => {
        e.preventDefault()

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "14072760568";

  let Nombre = document.querySelector("#Nombre").value;
  let Apellido = document.querySelector("#Apellido").value;
  let Grupo = document.querySelector("#Grupo").value;
  let Articulo1 = document.querySelector("#Articulo1").value;
  let Cantidad1 = document.querySelector("#Cantidad1").value;
  let Articulo2 = document.querySelector("#Articulo2").value;
  let Cantidad2 = document.querySelector("#Cantidad2").value;
  let Articulo3 = document.querySelector("#Articulo3").value;
  let Cantidad3 = document.querySelector("#Cantidad3").value;
  let resp = document.querySelector("#respuesta");
  
  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=14072760568&text=
		Solicitud de literatura%0A

		Nombre%0A
		${Nombre}%0A
		Apellido%0A
		${Apellido}%0A
		Grupo%0A
		${Grupo}%0A
    Articulo1%0A
		${Articulo1}%0A
    Cantidad%0A
		${Cantidad1}%0A
		Articulo2%0A
		${Articulo2}%0A
    Cantidad%0A
		${Cantidad2}%0A
    Articulo3%0A
		${Articulo3}%0A
    Cantidad%0A
		${Cantidad3}`;

  if (Nombre === "" || Apellido === "" || Grupo === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${Nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${Nombre}, Su orden fue enviada`;

  window.open(url);
});

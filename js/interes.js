


      form.addEventListener('submit', e => {
        e.preventDefault()

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "14074938534";
  
  let Fecha = document.querySelector("#Fecha").value;
  let Nombre = document.querySelector("#Nombre").value;
  let Apellido = document.querySelector("#Apellido").value;
  let Sexo = document.querySelector("#Sexo").value;
  let Direccion1 = document.querySelector("#Direccion1").value;
  let Ciudad = document.querySelector("#Ciudad").value; 
  let Telefono = document.querySelector("#Telefono").value; 
  let Idioma = document.querySelector("#Idioma").value; 
  let Correo = document.querySelector("#Correo").value;
  let Mejor = document.querySelector("#Mejor").value; 
  let Entregado = document.querySelector("#Entregado").value;  
  let Observaciones1 = document.querySelector("#Observaciones1").value; 
  let resp = document.querySelector("#respuesta");
  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=14074938534&text=
  PERSONA QUE MOSTRÓ%0A

  Fecha%0A
  ${Fecha}%0A
  Nombre%0A
  ${Nombre}%0A
  Apellido%0A
  ${Apellido}%0A
  Sexo%0A
  ${Sexo}%0A
  Direccion1%0A
  ${Direccion1}%0A
  Ciudad%0A
  ${Ciudad}%0A
  Telefono%0A
  ${Telefono}%0A
  Idioma%0A
  ${Idioma}%0A
  Correo electronico%0A
  ${Correo}%0A
  Mejor momento para contactar%0A
  ${Mejor}%0A
  Entregado%0A
  ${Entregado}%0A
  Observaciones1%0A
  ${Observaciones1}`;

  if (Fecha === "" || Nombre === "" || Apellido === "" ) {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${Nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `${Nombre}, Su orden fue enviada`;

  window.open(url);
});

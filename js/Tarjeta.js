const tarjeta = document.querySelector("#tarjeta");
var btnAbrirFormulario = document.querySelector("#btnAbrirFormulario");
var formulario = document.querySelector("#formularioTarjeta");
var numeroTarjeta = document.querySelector("#tarjeta .numero");
var nombreTarjeta = document.querySelector("#tarjeta .nombre");
var logoMarca = document.querySelector("#logoMarca");
var firma = document.querySelector("#tarjeta .firma p");
var mesExpiracion = document.querySelector("#tarjeta #expiracion .mes");
var yearExpiracion = document.querySelector("#tarjeta #expiracion .year");
var ccv = document.querySelector("#tarjeta .ccv");


//*Volteamos la tarjeta para mostrar el frente

const mostrarFrente = () => {
  if (tarjeta.classList.contains("active")) {
    tarjeta.classList.remove("active");
  }
};



//*Rotacion Tarjeta

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("active");
});

//*Formulario

btnAbrirFormulario.addEventListener("click", () => {
  btnAbrirFormulario.classList.toggle("active");
  formulario.classList.toggle("active");
});

//*Select del mes generado dinamicamente

for (let i = 1; i <= 12; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectMes.appendChild(opcion);
}

//*Secect del año generado dinamicamente
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  let opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  formulario.selectYear.appendChild(opcion);
}

//*Numero de tarjeta

formulario.inputNumero.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNumero.value = valorInput
    // Eliminamos espacios en blanco
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "")
    // Ponemos espacio cada 4 numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();

  numeroTarjeta.textContent = valorInput;

  if (valorInput == "") {
    numeroTarjeta.textContent = "#### #### #### ####";

    logoMarca.innerHTML = "";
  }

  if (valorInput[0] == 4) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "../img/tarjeta/logos/visa.png";
    logoMarca.appendChild(imagen);
  } else if (valorInput[0] == 5) {
    logoMarca.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.src = "../img/tarjeta/logos/mastercard.png";
    logoMarca.appendChild(imagen);
  }

  // Volteamos la tarjeta para que el usuario vea el frente
  mostrarFrente();
});

//* Input nombre de tarjeta

formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
  nombreTarjeta.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == "") {
    nombreTarjeta.textContent = "Jhon Doe";
  }
  mostrarFrente();
});

//*Select mes

formulario.selectMes.addEventListener("change", (e) => {
  mesExpiracion.textContent = e.target.value;
  mostrarFrente();
});

//*Select año

formulario.selectYear.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
  mostrarFrente();
});

//* Codigo de seguridad

formulario.inputCCV.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
  if (!tarjeta.classList.contains("active")) {
    targeta.classList.toggle("active");
  }

  formulario.inputCCV.value = formulario.inputCCV.value
    //Eliminar los espacios
    .replace(/\s/g, "")

    //Eliminar las letras
    .replace(/\D/g, "");

    ccv.textContent = formulario.inputCCV.value;

    girarTarjeta();
});

//* Finalizar compra
const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", (e) => {
 e.preventDefault();
  
  Swal.fire({
    title: 'Sweet!',
    text: 'Gracias por su compra!',
    imageUrl: 'https://i0.wp.com/lacriaturacreativa.com/wp-content/uploads/2020/10/absolut-700x405.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });

  
});
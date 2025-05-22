let numeros = 0;

function verificar() {
  const preu = parseFloat(document.getElementById("precio").value);
  const text = document.getElementById("prod").value.trim();
  const longtext = text.length;

  if (longtext > 15) {
    alert("Error, nom del producte molt llarg");
    return;
  } else if (longtext < 2) {
    alert("Error, nom del producte molt curt");
    return;
  }

  if (isNaN(preu)) {
    alert("Error, el preu introduït no és un valor numèric");
  }
}

function nouProducteFinal() {
  const preu = parseFloat(document.getElementById("precio").value);
  const cant = parseInt(document.getElementById("quantitat").value);
  const text = document.getElementById("prod").value.trim().toUpperCase();
  
  if (cant >= 1 && preu >= 0.1 && preu <= 1000) {
    const pfinal = Math.round(preu * cant);
    const li = document.createElement("li");
    li.textContent = `${text} (${cant}) (${preu}€) ${pfinal}€`;

    document.getElementById("llista").appendChild(li);
    actualizarContador();
  } else {
    alert("Error: Quantitat o preu incorrectes");
  }

  limpiarCampos();
}

function nouProductePrincipi() {
  const preu = parseFloat(document.getElementById("precio").value);
  const cant = parseInt(document.getElementById("quantitat").value);
  const text = document.getElementById("prod").value.trim().toUpperCase();

  if (cant >= 1) {
    const li = document.createElement("li");
    li.textContent = `${text} (${cant}) (${preu}€) ${preu * cant}€`;

    const group = document.getElementById("llista");
    group.insertBefore(li, group.firstChild);
    actualizarContador();
  } else {
    alert("Error: Quantitat incorrecta");
  }

  limpiarCampos();
}

function eliminarUltim() {
  const lista = document.getElementById("llista");
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
    actualizarContador();
  }
}

function eliminarPrimer() {
  const lista = document.getElementById("llista");
  if (lista.firstElementChild) {
    lista.removeChild(lista.firstElementChild);
    actualizarContador();
  }
}

function actualizarContador() {
  numeros = document.getElementById("llista").children.length;
  document.getElementById("totalp").textContent = `Núm - Productes ${numeros}`;
}

function limpiarCampos() {
  document.getElementById("precio").value = "";
  document.getElementById("quantitat").value = "";
  document.getElementById("prod").value = "";
}

var numeros = 0;

function verificar() {
  var preu = document.getElementById("precio").value;
  let text = document.getElementById("prod").value;
  let longtext = text.length;

  if (longtext > 15) {
    window.alert("Error, nom del producte molt llarg");
  } else if (longtext < 2) {
    window.alert("Error, nom del producte molt curt");
  } else {
  }

  if (isNaN(preu)) {
    window.alert("Error, el preu introduït no es un valor numèric");
  }
}

function nouProducteFinal() {
  console.info(12);
  var preu = document.getElementById("precio").value;
  var cant = document.getElementById("quantitat").value;
  let text = document.getElementById("prod").value.toUpperCase();
  var pfinal = Math.round(preu * cant);

  if (cant >= 1 && preu >= 0.1 && preu <= 1000) {
    const li = document.createElement("li");
    var p = document.createTextNode(
      text + " (" + cant + ") (" + preu + "€" + ") " + pfinal + "€"
    );
    li.appendChild(p);

    const group = document.getElementById("llista");
    group.appendChild(li);
  } else if (cant <= 0) {
    alert("Producte o quantitat incorrectes");
  } else if (preu <= 0) {
    alert("Preu incorrecte");
  } else if (preu >= 1001) {
    alert("Preu incorrecte");
  } else if (isNaN(preu)) {
    alert("Preu incorrecte");
  }

  numeros++;
  document.getElementById("precio").value = "";
  document.getElementById("quantitat").value = "";
  document.getElementById("prod").value = "";

  document.getElementById("totalp").innerHTML = "Núm - Productes " + numeros;
}

function nouProductePrincipi() {
  var preu = document.getElementById("precio").value;
  var cant = document.getElementById("quantitat").value;
  let text = document.getElementById("prod").value.toUpperCase();

  if (cant >= 1) {
    const li = document.createElement("li");
    var p = document.createTextNode(
      text + " (" + cant + ") (" + preu + "€" + ") " + preu * cant + "€"
    );
    li.appendChild(p);

    const group = document.getElementById("llista");
    group.insertBefore(li, group.children[0]);
  } else if (cant <= 1) {
    alert("Producte o quantitat incorrectes");
  }
  numeros++;
  document.getElementById("precio").value = "";
  document.getElementById("quantitat").value = "";
  document.getElementById("prod").value = "";

  document.getElementById("totalp").innerHTML = "Núm - Productes " + numeros;
}

function eliminarUltim() {
  numeros--;
  var element = document.getElementById("llista");
  element.removeChild(llista.lastElementChild);

  if (numeros >= 0) {
    document.getElementById("totalp").innerHTML = "Núm - Productes " + numeros;
  }
}

function eliminarPrimer() {
  numeros--;
  var element = document.getElementById("llista");
  element.removeChild(llista.firstElementChild);

  if (numeros >= 0) {
    document.getElementById("totalp").innerHTML = "Núm - Productes " + numeros;
  }
}

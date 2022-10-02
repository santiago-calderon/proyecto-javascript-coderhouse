function recuperoCarrito() {
    //debugger
    let favs = JSON.parse(localStorage.getItem("favorites"))
    let tabla = document.querySelectorAll("tbody")
        favs.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.name}</td>
                            <td>$ ${prod.category}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
  }
  recuperoCarrito()
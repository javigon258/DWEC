
{
    let juego = {
      originalTablero: [],
      comprobarTablero: [],
      muestraTablero: [],
      tableroOpciones: [],
      filas: 0,
      columnas: 0,
      numMinas: 0,
  
      init() {
        juego.elegirNivel();
        juego.generarTableros();
        juego.generaMinas();
        juego.numerosAlrededorMinas();
        juego.mostrar();
      },
      /**
       * Muestra los tableros al inicio
       */
      mostrar() {
        console.log("Tablero master \n");
        console.table(juego.originalTablero);
        console.log("Tablero visible \n");
        console.table(juego.muestraTablero);
      },
  
      /**
       * Marca y desmarca una casilla con una bandera
       * @param x cordenada para la fila
       * @param y coordenada para la columna
       */
      marcar(x, y) {
        try {
          if (
            juego.tableroOpciones[x][y] !== "p" &&
            juego.muestraTablero[x][y] !== "!"
          ) {
            juego.muestraTablero[x][y] = "!";
            console.clear();
            console.table(juego.originalTablero);
            console.table(juego.muestraTablero);
          } else if (juego.tableroOpciones[x][y] === "p") {
            throw new Error(
              "No puedes colocar una bandera en una casilla descubierta"
            );
          } else if (
            juego.tableroOpciones[x][y] !== "p" &&
            juego.muestraTablero[x][y] === "!"
          ) {
            juego.muestraTablero[x][y] = "&";
            console.clear();
            console.table(juego.originalTablero);
            console.table(juego.muestraTablero);
          }
          juego.comprobarGanadorBanderas();
        } catch (e) {
          console.log(e.message);
        }
      },
  
      /**
       * Selecciona el nivel y asigna las casillas y el numero de minas según el nivel
       */
      elegirNivel() {
        let nivel = "";
        do {
          nivel = prompt("Introduce el nivel: (facil, intermedio, experto)");
        } while (
          nivel.toLowerCase() === "facil" &&
          nivel.toLowerCase() === "intermedio" &&
          nivel.toLowerCase() === "experto"
        );
  
        switch (nivel.toLowerCase()) {
          case "facil":
            juego.filas = 5;
            juego.columnas = 5;
            juego.numMinas = 5;
            break;
          case "intermedio":
            juego.filas = 16;
            juego.columnas = 16;
            juego.numMinas = 40;
            break;
          case "experto":
            juego.filas = 16;
            juego.columnas = 20;
            juego.numMinas = 99;
            break;
          default:
            break;
        }
      },

      actualizarDatos() {
        for (let i = 0; i < juego.filas; i++) {
          for (let j = 0; j < juego.columnas; j++) {
            if (juego.tableroOpciones[i][j] === "p") {
              juego.muestraTablero[i][j] = juego.originalTablero[i][j];
            }
          }
        }
      },
  
      generarTableros() {
        for (let i = 0; i < juego.filas; i++) {
          juego.originalTablero[i] = [];
          juego.muestraTablero[i] = [];
          juego.comprobarTablero[i] = [];
          juego.tableroOpciones[i] = [];
          for (let j = 0; j < juego.columnas; j++) {
            juego.originalTablero[i][j] = 0;
            juego.muestraTablero[i][j] = "&";
            juego.comprobarTablero[i][j] = 0;
            juego.tableroOpciones[i][j] = 0;
          }
        }
      },
  
      comprobarGanadorBanderas() {
        let contadorBanderasMinas = 0;
        for (let i = 0; i < juego.filas; i++) {
          for (let j = 0; j < juego.columnas; j++) {
            if (
              juego.muestraTablero[i][j] === "!" &&
              juego.originalTablero[i][j] === "x"
            ) {
              contadorBanderasMinas++;
            }
          }
        }
        try{
          if (contadorBanderasMinas === juego.numMinas) {
            throw new Error("Has ganado la partida");
          }
        }catch(e){
          console.error(e.message);
        }
        
      },
  
      /**
       * Genera y coloca las minas
       */
      generaMinas() {
        for (let i = 0; i < juego.numMinas; i++) {
          let fila = Math.floor(Math.random() * (juego.filas - 1 - 0)) + 0;
          let columna =
            Math.floor(Math.random() * (juego.columnas - 1 - 0)) + 0;
  
          while (juego.originalTablero[fila][columna] === "x") {
            fila = Math.floor(Math.random() * (juego.filas - 1 - 0)) + 0;
            columna =
              Math.floor(Math.random() * (juego.columnas - 1 - 0)) + 0;
          }
  
          juego.originalTablero[fila][columna] = "x";
          juego.comprobarTablero[fila][columna] = "x";
        }
      },
  
      /**
       * Carga la pulsacion en la matriz correspondiente
       * @param x cordenada para la fila
       * @param y coordenada para la columna
       */
      cargarPulsacion(x, y) {
        juego.tableroOpciones[x][y] = "p";
      },
  
      /**
       * Coloca los numeros alrededor de las minas del tablero
       */
      numerosAlrededorMinas() {
        for (let i = 0; i < juego.filas; i++) {
          for (let j = 0; j < juego.columnas; j++) {
            if (juego.originalTablero[i][j] === "x") {
              if (i == 0 && j == 0) {
                juego.cuentaMinas(i, j, i + 1, j + 1);
              } else if (i == 0 && (j > 0 && j < juego.numMinas - 1)) {
                juego.cuentaMinas(i, j - 1, i + 1, j + 1);
              } else if (i == 0 && j == juego.numMinas - 1) {
                juego.cuentaMinas(i, j - 1, i + 1, j);
              } else if (
                j == juego.numMinas - 1 &&
                (i > 0 && i < juego.numMinas - 1)
              ) {
                juego.cuentaMinas(i - 1, j - 1, i + 1, j);
              } else if (
                i == juego.numMinas - 1 &&
                j == juego.numMinas - 1
              ) {
                juego.cuentaMinas(i - 1, j - 1, i, j);
              } else if (
                i == juego.numMinas - 1 &&
                (j > 0 && j < juego.numMinas - 1)
              ) {
                juego.cuentaMinas(i - 1, j - 1, i, j + 1);
              } else if (i == juego.numMinas - 1 && j == 0) {
                juego.cuentaMinas(i - 1, j, i, j + 1);
              } else if (j == 0 && (i > 0 && i < juego.numMinas - 1)) {
                juego.cuentaMinas(i - 1, j, i + 1, j + 1);
              } else {
                juego.cuentaMinas(i - 1, j - 1, i + 1, j + 1);
              }
            }
          }
        }
      },
  
      /**
       * Coloca el numero de minas
       * @param ii inicio de fila
       * @param ij inicio de columna
       * @param fi fin de fila
       * @param fj fin de columna
       */
      cuentaMinas(ii, ij, fi, fj) {
        for (let i = ii; i <= fi; i++) {
          for (let j = ij; j <= fj; j++) {
            if (juego.originalTablero[i][j] !== "x") {
              if (juego.originalTablero[i][j] === 0) {
                juego.originalTablero[i][j] = 0 + 1;
                juego.comprobarTablero[i][j] = 0 + 1;
              } else {
                juego.originalTablero[i][j] =
                  parseInt(juego.originalTablero[i][j]) + 1;
                juego.comprobarTablero[i][j] = parseInt(
                  juego.originalTablero[i][j]
                );
              }
            }
          }
        }
      },
  
      /**
       * Devuelve el número de casillas que hay pulsadas en el tablero
       */
      obtenerNumeroCasillasPulsadas() {
        let contador = 0;
        for (let i = 0; i < juego.filas; i++) {
          for (let j = 0; j < juego.columnas; j++) {
            if (juego.tableroOpciones[i][j] === "p") contador++;
          }
        }
        return contador;
      },
  
      /**
       * Devuelve el número de casillas necesarias para ganar del tablero
       */
      obtenerNumeroCasillasParaGanar() {
        let contador = 0;
        for (let i = 0; i < juego.filas; i++) {
          for (let j = 0; j < juego.columnas; j++) {
            if (juego.originalTablero[i][j] !== "x") contador++;
          }
        }
        return contador;
      },
  
      /**
       * Descubre casillas, de manera recursiva
       * @param x coordenada para la fila
       * @param y coordenada para la columna
       */ 
      abrirCeros(x, y) {
        if (juego.comprobarTablero[x][y] === 0) {
          juego.comprobarTablero[x][y] = -1;
          if (juego.originalTablero[x][y] === 0) {
            for (
              let j = Math.max(x - 1, 0);
              j <= Math.min(x + 1, juego.filas - 1);
              j++
            )
              for (
                let k = Math.max(y - 1, 0);
                k <= Math.min(y + 1, juego.columnas - 1);
                k++
              ) {
                juego.cargarPulsacion(j, k);
                juego.abrirCeros(j, k);
              }
          }
        }
      },
  
      /**
       * pica una casilla y realiza las acciones correspondientes
       * @param i coordenada fila
       * @param j coordenada columna
       */ 
      pulsar(i, j) {
        try {
          if (juego.originalTablero[i][j] === "x") {
            throw new Error("Pulsaste una mina");
          } else if (juego.tableroOpciones[i][j] === "p") {
            throw new Error("Esta casilla ya fue pulsada, por favor pulsa otra casilla");
          } else {
            juego.abrirCeros(i, j);
            juego.cargarPulsacion(i, j);
            juego.actualizarDatos();
            console.clear();
            console.log("Tablero Master \n");
            console.table(juego.originalTablero);
            console.log("Tablero Visible \n");
            console.table(juego.muestraTablero);
            juego.comprobarSiGana();
          }
        } catch (e) {
            console.error(e.message);
        }
      },
  
      /**
       * Comprueba si ganas las partida de manera normal
       */ 
      comprobarSiGana() {
        try {
          if (
            juego.obtenerNumeroCasillasPulsadas() ===
            juego.obtenerNumeroCasillasParaGanar()
          ) {
            throw new Error("Has ganado");
          }
        } catch (e) {
          console.error(e.message);
        }
      },
    };
  
    let buscaminas = (function() {
      return {
        init: () => juego.init(),
        pulsar: (x, y) => juego.pulsar(x, y),
        marcar: (x, y) => juego.marcar(x, y)
      };
    })();
  
    function init() {
      buscaminas.init(); // iniciamos el juego
    }
  
    window.addEventListener("load", init);
  }
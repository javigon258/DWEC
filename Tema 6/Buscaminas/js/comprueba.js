{
    let buscaminasComprobar = {
        casillasPulsadas() {
            let contador = 0;
            for (let i = 0; i < buscaminasComprobar.filas; i++) {
                for (let j = 0; j < buscaminasComprobar.columnas; j++) {
                    if (buscaminasComprobar.tableroCasillaAlmacenado[i][j] === "pul")
                        contador++;
                }
            }
            return contador;
        },
        casillasPulsadasVictoria() {
            let contador = 0;
            for (let i = 0; i < buscaminasComprobar.filas; i++) {
                for (let j = 0; j < buscaminasComprobar.columnas; j++) {
                    if (buscaminasComprobar.tableroDescubierto[i][j] !== "m")
                        contador++;
                }
            }
            return contador;
        },
    
        compruebaVictoria() {
            if (buscaminasComprobar.casillasPulsadas() === buscaminasComprobar.casillasPulsadasVictoria()) {
                buscaminasComprobar.banderaGanado = true;
                throw new Error("Ganador");
            }
        },
        banderasCercanas(x, y) {
            let nBanderas = 0;
            if (buscaminasComprobar.tableroCasillaAlmacenado[x][y] === "pul") {
                if (x > 0 && y > 0) {
                    if (buscaminasComprobar.tableroParaJugar[x - 1][y - 1] === "b")
                        nBanderas++;
                }
                if (y > 0) {
                    if (buscaminasComprobar.tableroParaJugar[x][y - 1] === "b")
                        nBanderas++;
                }
                if (y > 0 && x < buscaminasComprobar.filas - 1) {
                    if (buscaminasComprobar.tableroParaJugar[x + 1][y - 1] === "b")
                        nBanderas++;
                }
                if (x > 0) {
                    if (buscaminasComprobar.tableroParaJugar[x - 1][y] === "b")
                        nBanderas++;
                }
                if (x < buscaminasComprobar.filas - 1) {
                    if (buscaminasComprobar.tableroParaJugar[x + 1][y] === "b")
                        nBanderas++;
                }
                if (y < buscaminasComprobar.columnas - 1) {
                    if (buscaminasComprobar.tableroParaJugar[x][y + 1] === "b")
                        nBanderas++;
                }
                if (x < buscaminasComprobar.filas - 1 && y < buscaminasComprobar.columnas - 1) {
                    if (buscaminasComprobar.tableroParaJugar[x + 1][y + 1] === "b")
                        nBanderas++;
                }
                if (x > 0 && y < buscaminasComprobar.columnas - 1) {
                    if (buscaminasComprobar.tableroParaJugar[x - 1][y + 1] === "b")
                        nBanderas++;
                }
            }
            return nBanderas;
        }
    }
}
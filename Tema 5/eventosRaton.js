{
    let canvas;
    let eventosR = ["","","....."];

    eventosR.forEach(element => {
        canvas = document.getElementById(element);
        canvas.addEventListener(element, dibujaCan.bind(null, canvas));
        dibujaCan(canvas);
    });

    if(event !== undefined){
        
    }
}
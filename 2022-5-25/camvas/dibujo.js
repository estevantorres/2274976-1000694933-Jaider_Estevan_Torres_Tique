var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujar linea("pink", 10, 300, 33, 55);
dibujar linea("yellow", 100, 30, 33, 5);

function dibujarlinea(color, xinicial, yinicial, yfinal, ynitfh)
{
    lienzo.beginPath();
    lienzo.strokestyle = color;
    lienzo.moveto(xinicial, yfinal);
    lienzo.lineto(yfinal, ynitfh);
    lienzo.stroke();
    lienzo.closePath();
    
}



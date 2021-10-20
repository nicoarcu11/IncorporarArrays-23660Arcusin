var vector = [];

function constructorObjeto(nombre,color,peso){
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}

var objeto0 = new constructorObjeto("Remera","Rojo","0.25kg");
vector.push(objeto0);
var objeto1 = new constructorObjeto("Pelota","Blanco","0.45kg");
vector.push(objeto1);
var objeto2 = new constructorObjeto("Celular","Negro","0.2kg");
vector.push(objeto2);


function Add(){
    let name = prompt("Ingrese el nombre de su objeto");
    let color = prompt("Ingrese el color de su objeto");
    let weight = prompt("Ingrese el peso de su objeto");
    let tempObject = new constructorObjeto(name,color,weight);
    vector.push(tempObject);
    Menu();
}

function See(){
    console.log(vector);
    alert("Vea su consola porfavor");
    Menu();
}

function Menu () {
    var answer = prompt("Desea agregar un objeto a su mochila?y/n");
    while (answer!= "y" && answer!="n") {
        answer = prompt("Desea agregar un objeto a su mochila?y/n");
    }
    if(answer == "y") {
        Add();
    }
    if(answer == "n") {
        var answer = prompt("Desea ver su mochila?y/n");
        if(answer == "y") {
            See();
        }
    }
}


alert("Hola! Bienvenido a su mochila virtual");
Menu();
alert("Gracias por usar su mochila! Que tenga un buen dia");



    
    



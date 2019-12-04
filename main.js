//task 1
function outer (){
   n=0
    function inner (a){
        n +=a
        console.log(n)
    }
    return inner
}

let sum = outer();
sum(3);
sum(5);
sum(228);


//task2
function CoffeMaker(properties){}

CoffeMaker.prototype.on = function(){
    console.log(`ON: ${this.properties}`)
}
CoffeMaker.prototype.off = function(){
    console.log(`OFF: ${this.properties}`)
}

function DripCoffeMaker(properties){
    this.properties = properties
}
DripCoffeMaker.prototype = CoffeMaker.prototype

DripCoffeMaker.prototype.filter = function(){
    console.log(`Filter: ${this.properties}`)
}


function CarobCoffeMaker(properties){
    this.properties = properties
}

CarobCoffeMaker.prototype = DripCoffeMaker.prototype

CarobCoffeMaker.prototype.carob = function(){
    console.log(`Carob: ${this.properties}`)
}

let CarobCoffeMakerProperties = new CarobCoffeMaker('properties')

CarobCoffeMakerProperties.on()
CarobCoffeMakerProperties.off()
CarobCoffeMakerProperties.filter()
CarobCoffeMakerProperties.carob()
//constantes
const savings:number = 67800;
const interest:number = 2.25;

//variables iniciales
var price:number = 339000;
var time:number = 30;


//fillField
function fillFieldValue(id:string,value:number) {
    let inputField = (<HTMLInputElement>document.getElementById(id));
    inputField.value = `${value}`
}


//calc
function mortgageCalc() {
    
    price = parseInt((<HTMLInputElement>document.getElementById('price')).value);
    time = parseInt((<HTMLInputElement>document.getElementById('time')).value);

    //max-min values
    if ( price>1000000 ) {
        price = 1000000;
        fillFieldValue('price',price);
    } else if ( price<100000 || isNaN(price) ) {
        price = 100000;
        fillFieldValue('price',price);
    }
    if( time>40 ) {
        time = 40;
        fillFieldValue('time',time);
    } else if ( time<5 || isNaN(time)) {
        time = 5;
        fillFieldValue('time',time);
    }

    let loan:number = price - savings;
    let expenses:number = loan*0.12;
    let totalInterest:number = ((loan * interest * 30) / 36000) * time;
    let monthlyCost:number = ((loan + totalInterest) / (time*12))
    let totalCost:number = (loan + expenses + totalInterest)

    document.getElementById('monthlyCost').innerHTML = monthlyCost.toFixed(2).toString()+" €/mes";
    document.getElementById('totalCost').innerHTML = totalCost.toFixed(0).toString()+" €";
}


//add & substract
function changeInput(type:string) {

    time = parseInt((<HTMLInputElement>document.getElementById('time')).value);

    if(type == "add") {
        fillFieldValue('time',time+1)
        
    }
    if(type == "sub") {
        fillFieldValue('time',time-1)
    }

}


//events
window.onload = function() {
    fillFieldValue('price',price)
    fillFieldValue('time',time)
    mortgageCalc()
};

window.addEventListener('click', function(event){
    mortgageCalc()
})


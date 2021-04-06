class fruits{
    constructor(fruit, quantity){ //constructor creates objects and set value if there's any object properties present.
        this.fruit ="orange"; //this. refers to the object it belongs to.
        this.price =30;
        this.quantity=3;

        this.fruit1= "mango";
        this.price1=40;
        this.quantity1=2;

        this.fruit2= "avocado";
        this.price2=40;
        this.quantity2=1;
        

    }getTotalCost(){
        return `${this.quantity} ${this.fruit} for KES ${this.price*this.quantity}`;
    }
    getTotalCost1(){
            return `${this.quantity1} ${this.fruit1} for KES ${this.price1*this.quantity1}`;  
        }
        getTotalCost2(){
            return `${this.quantity2} ${this.fruit2} for KES ${this.price2*this.quantity2}`;  
    }
    } 
var fruit= new fruits("orange",3);
console.log(fruit.getTotalCost());

var fruits1= new fruits("mango",2);
console.log(fruits1.getTotalCost1());

var fruits2= new fruits("avocado",1);
console.log(fruits2.getTotalCost2());

    

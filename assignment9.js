class Mkulima{
    constructor(){
        this.farms = [];

        this.products = [];
    
        this.orders = [];
      }

      addFarm(farmId,name,farmer, phoneNumber, address){
         let  newFarm={
             farmId:farmId,
             name:name,
             farmer:farmer,
             phoneNumber:phoneNumber,
             address:address,
          }
          return this.farms.push(newFarm)
          return this.newFarm
      }

      removeFram(farmId){        
        return this.farms.pop(farmId);
        return this.picked

    }
    updateFarm(farmId, name, farmer, phoneNumber, address){
        let data=this.farms.find(data=>data.farmId=="ss223")

         data={
            farmId:farmId,
             name:name,
             farmer:farmer,
             phoneNumber:phoneNumber,
             address:address,
        }
        //return this.products.push(data)

        return data
        
    }

    getFarm(farmId, name, farmer, phoneNumber, address){
       let findFarm=this.farms.find(findFarm=>findFarm.farmId=="uu7788");

        return findFarm
    }


    addProduct(productName, productId, price){
        var additems={
           productId:productId,
           productName:productName,
           price:price,
            
        }
       // additems=this.find(additems=>additems.additems.name);
       this.additems.push(additems)
        return this.additems
    }
    removeProduct(productId){
              return this.additems.unshift(productId)
    }

   printProducts(){
        for( items of this.additems){
console.log(`${items.productName}:{items.cost}`)
        }
      
   
    calculateOrderCost(){
         
        
        calculate=this.find(calculate=>calculate.calculate);
        return calculate
    }
    
}
    
let mkulima=new Mkulima([],[],[]);
console.log(mkulima.addFarm(23344,"Aisha","Fruits",0706707656,"ss223"));
console.log(mkulima.addFarm(44455,"Zulufa","Mangos",070677,"hh12"));

console.log(mkulima.removeFram(22334));

console.log(mkulima.getFarm(556677));
console.log(mkulima.addFarm("Kuku",51122,55557));

//mkulima.printProducts();


//console.log( mkulima. getFarm);
console.log(mkulima.updateFarm(22677,"Mandak","Tomatoes",0766,"4488"));
//console.log()

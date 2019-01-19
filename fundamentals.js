//create a car object
let aCar = {

    owner: "Joe Bloggs",
    address: "3 Walkers Lane",
    previous_owner: [
        {
            name: "Pat Smith",
            address:" 1 Main Street"

        },
        {
            name:"Sheila Dwyer",
            address: "2 High Street"
        }
],
    type: {
        make: "Toyata",
        model: "Corolla",
        cc: "1.8"
    },

    features : ['Parking assist', 'Alarm', 'Tow-bar'],

    registration: {
        year: "10",
        countyCode: "WD",
        regNumber: "1058"

    }
}
//Accessing by dot(.) notation
console.log(aCar.owner + " drives a " + aCar.type.make);

console.log("Reg: " + aCar.registration.year + "-" + aCar.registration.countyCode + "-" + aCar.registration.regNumber + ".")

//dynamically adding new properties to aCar object

    aCar.mileage = 80000;
    aCar.color = {
        exterior: "red",
        interior:{
            texture: "leather",
            shade: "cream"
        }
    }
    console.log("it is a" + " " + aCar.color.exterior + " car, " + aCar.mileage + " mileage, with " + aCar.color.interior.texture + " interior.")

    console.log("First owner: " + aCar.previous_owner[0].name + " " + aCar.previous_owner[0].address);

    for(let i = 0; i < aCar.features.length; i += 1){

        console.log(aCar.features[i]);
    }

    //displaying the name of each previous owner
    //iterating through the car object and previous owner array

    for(let i = 0; i < aCar.previous_owner.length; i += 1){

        console.log(aCar.previous_owner[i].name);
    }

    // iterating over an object's properties for to display the key-value pairs in the type property of aCar
    for (let p in aCar.type)  {
        console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
    }

    // try ouwn //#endregion

        for (let preOwner in aCar.previous_owner){

                console.log(preOwner.toUpperCase() + " : " + aCar.previous_owner[preOwner].name + aCar.previous_owner[preOwner].address);


        }





// code
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
 


const copyAddress = structuredClone(passportWithAddress);

    copyAddress.address.city = 'Bobryist';



console.log(passportWithAddress.address.city);
console.log(copyAddress.address.city);




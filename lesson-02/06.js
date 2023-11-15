// code
const passportWithAddress = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'LA',
  },
};

const copy1 = structuredClone(passportWithAddress);

copy1.address.city = 'Bobryisk';

console.log(passportWithAddress.address.city);
console.log(copy1.address.city);


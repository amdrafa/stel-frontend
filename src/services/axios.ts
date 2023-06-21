import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333', // Api url. Ex: www.azure.dev
  // Headers with authorizations will come here. Ex: Bearer + Token
});

// IDEIA 

// export const areascontactapi = axios.create({
//   baseURL: 'https://localhost:4444/areascontact/', // Api url. Ex: www.azure.dev
//   // Headers with authorizations will come here. Ex: Bearer + Token
// });



// export const employeesapi = axios.create({
//   baseURL: 'https://localhost:4444/employees', // Api url. Ex: www.azure.dev
//   // Headers with authorizations will come here. Ex: Bearer + Token
// });
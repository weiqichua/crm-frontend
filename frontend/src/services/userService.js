import axios from "axios"

const API_URL = "";
axios.defaults.withCredentials = true

// const getDates = (eventName) => {
//   return axios.get
//     (API_URL + `event/${eventName}/getDatesByName`, {
//       eventName
//     }, 
//     { withCredentials: true,}
//     )
//     .then((response) => { 
//       const dates = response.data;
//       return dates;
//     })
//     .catch((error) => {
//       console.error("Error fetching Dates:", error);
//       throw error;
//     });
    
// }
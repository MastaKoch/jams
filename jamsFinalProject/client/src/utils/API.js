import axios from "axios";

export default {
getLoggedInUser: function () {
  return axios.get('/api/user')
}, 
getResources: function () {
  return axios.get('/api/resources')
},
getComments: function () {
  return axios.get('/api/comments')
}
};

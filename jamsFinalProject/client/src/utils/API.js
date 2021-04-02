import axios from "axios";

export default {
getLoggedInUser: function () {
  return axios.get('/api/user')
}
};

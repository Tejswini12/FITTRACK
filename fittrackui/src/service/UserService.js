import axios from 'axios';
let baseUrl="http://localhost:8080/";
class UserService{

    getAllEmployee(){
     return axios.get(baseUrl+"users");
    }
    
    
    addUser(user){
        let myheaders={"Content-type":"application/json"}
    return axios.post(baseUrl+"users/signup"+user.id,user,{headers:myheaders})
    }
//     deleteById(EMPNO){
//         return axios.delete(baseUrl+"employees/"+EMPNO);
//     }
//     updateEmp(emp){
//         let myheaders={'content-Type':'application/json'}
//         return axios.put(baseUrl+"employees/"+emp.EMPNO,emp,{headers:myheaders})
//     }
 }
export default new UserService();
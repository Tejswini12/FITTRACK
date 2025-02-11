import axios from 'axios';
let baseUrl="http://localhost:8080/";
class UserService{

    getAllMembers(){
     return axios.get(baseUrl+"users");
    }
    
    
    addMember(member){
        let myheaders={"Content-type":"application/json"}
    return axios.post(baseUrl+"users/signup"+member.id,member,{headers:myheaders})
    }

    addMember(feedback){
        let myheaders={"Content-type":"application/json"}
    return axios.post(baseUrl+"/addFeedback"+feedback.id,feedback,{headers:myheaders})
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
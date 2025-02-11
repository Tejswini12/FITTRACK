import axios from 'axios';
let baseUrl="http://localhost:8080/admin/";
class AdminService{

    getAllTrainers(){
     return axios.get(baseUrl+"alltrainers");
    }

    addNewTrainer(trainer){
        let myheaders={"Content-type":"application/json"}
    return axios.post(baseUrl+"addtrainer",trainer,{headers:myheaders})
    }

     deleteById(id){
        return axios.delete(baseUrl+"delete/"+id);
    }
    updateTrainer(trainer){
        let myheaders={'content-Type':'application/json'}
        return axios.put(baseUrl+"updateTrainer/"+trainer.id,trainer,{headers:myheaders})
    }
    getTrainerById(id){
        return axios.get(baseUrl+"gettrainer/"+id);
    }
}
export default new AdminService;
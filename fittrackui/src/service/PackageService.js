import axios from "axios";
import MyHeader from "../components/MyHeader";
let baseUrl="http://localhost:8080/gympackages/"
class PackageService{
getAllPackages(){
    return axios.get(baseUrl+"getPackages");
}
getpkgById(id){
    return axios.get(baseUrl+"getpackages/"+id);
}
addNewPackage(pkg){
let myHeaders=({"Content-type":"application/json"})
return axios.post(baseUrl+"add",pkg,{headers:myHeaders})
}

deleteById(id){
    return axios.delete(baseUrl+"delete/"+id);
}

updatePackage(pkg){
let myheaders=({"Content-type":"application/json"})
return axios.put(baseUrl+"edit/"+pkg.id,pkg,{headers:myheaders})
}
}
export default new PackageService;
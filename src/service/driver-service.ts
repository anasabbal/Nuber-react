import DriverCommand from "../types/driver-command";
import axios from "axios";


let driverUrl = "http://localhost:8081/";


const create = (payload: DriverCommand) => {
    return axios.post(driverUrl, payload);
}
const update = (driverId: string, payload: DriverCommand) => {
    return axios.put(driverUrl + `/${driverId}`, payload);
}
const getAll = () => {
    return axios.get(driverUrl);
}
const findById = (driverId: string) => {
    return axios.get(driverUrl + `/${driverId}`);
}
const sendRating = () => {

}
const getDriversAvailable = () => {

}
const deleteAccount = () => {

}
const findAllByCriteria = () => {

}
const getDriverDetailsByDriverId = () => {

}


const DriverService = {
    create,
    update,
    getAll,
    findById,
    getDriversAvailable,
    sendRating,
    deleteAccount,
    findAllByCriteria,
    getDriverDetailsByDriverId
}

export default DriverService;

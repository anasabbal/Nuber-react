import ApiRoutes from "../core/ApiRoutes";
import httpCommon from "../core/http-common";
import CustomerDetails from "../shared";
import CustomerCommand from "../types/customer";




const create = (payload: CustomerCommand) => {
    return httpCommon.post<CustomerCommand>(ApiRoutes.register, payload);
}
const findAllByDeletedFalse =() => {
    return httpCommon.get(ApiRoutes.base);
}
const sendRating = () => {

} 
const sendRequestDriver = () => {

} 
const findById = (customerId: string) => {
    return httpCommon.get(ApiRoutes.base + `/${customerId}`);
} 
const getDriversAvailable = () => {
    return httpCommon.get(ApiRoutes.driverAvailable);
} 
const findCustomerDetailsById = (customerId: string) => {
    return httpCommon.get<CustomerDetails>(ApiRoutes.customerDetails  + `/${customerId}`);
} 
const updateInfo = (customerId: string, payload: CustomerCommand) => {
    return httpCommon.put(ApiRoutes.base + `/${customerId}`, payload);
} 


const CustomerService = {
    create,
    findAllByDeletedFalse,
    sendRating,
    findById,
    getDriversAvailable,
    sendRequestDriver,
    findCustomerDetailsById,
    updateInfo
}

export default CustomerService;
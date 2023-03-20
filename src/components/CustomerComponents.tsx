import { response } from "express";
import { ChangeEvent, useState } from "react";
import CustomerService from "../service/customer-service";
import CustomerDetails from "../shared";
import CustomerCommand from "../types/customer";






const CustomerComponents: React.FC = () => {

    const initCustomer = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const initCustomerDetails = {
        customer: null,
        driverLocationDto: null,
        bankAccount: null,
        walletDetails: null
    }

    const [customer, setCustomer] = useState<CustomerCommand>(initCustomer);
    const [create, setCreate] = useState<Boolean>(false);
    const [find, setFind] = useState<Boolean>(false);
    const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(initCustomerDetails);
    const [driverAvailable, setDriverAvailable] = useState();
    const [update, setUpdate] = useState<Boolean>(false);
 
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
        setCreate({...create, [name]: value});
        setCreate({...find, [name]: value});
    };

    const createCustomer = () => {
        const data = {
            firstName: customer?.firstName,
            lastName: customer?.lastName,
            email: customer?.email,
            password: customer?.password
        };
        CustomerService.create(data)
            .then((response : any) => {
                console.log(response.data);
                setCustomer({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    password: response.data.password
                });
                console.log(customer);
                setCreate(true);
            }).catch((e: Error) => {
            console.log(e);
        });
    }
    const findById = (id: string) => {
        CustomerService.findById(id)
            .then((response : any) => {
                console.log(response.data);
                setFind(true);
            }).catch((e: Error) => {
                console.log(e);
            })
    }
    const getCustomerDetails = (customerId: string) => {
        CustomerService.findCustomerDetailsById(customerId)
            .then((response: any) => {
                console.log(response);
                setCustomerDetails({
                    customer: response.data.customer,
                    driverLocationDto: response.data.driverLocationDto,
                    bankAccount: response.data.bankAccount,
                    walletDetails: response.data.walletDetails
                });
            }).catch((e: Error) => {
                console.log(e);
            })
    }
    const getDriversAvailable = () => {
        CustomerService.getDriversAvailable()
            .then((response : any) => {
                console.log(response.data);
                setDriverAvailable(response.data);
            }).catch((e: Error) => {
                console.log(e);
            })
    }
    const updateCustomerById = (id: string, payload: CustomerCommand) => {
        const data = {
            firstName: customer?.firstName,
            lastName: customer?.lastName,
            email: customer?.email,
            password: customer?.password
        };
        CustomerService.updateInfo(id, payload)
            .then((res : any) => {
                console.log(res.data);
                setUpdate(true);
            }).catch((e: Error) => {
                console.log(e);
            })
    }
    return (
        <div></div>
    );

}


export default CustomerComponents;
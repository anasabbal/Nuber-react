import React, {useState} from "react";
import DriverCommand from "../types/driver-command";
import AddressCommand from "../types/address-command";
import DriverService from "../service/driver-service";


const DriverComponent: React.FC = () => {

    const initDriver = {
        firstName: "",
        lastName: "",
        addressCommands: null
    };

    const [driver, setDriver] = useState<DriverCommand>(initDriver);
    const [updateDriver, setUpdateDriver] = useState<Boolean>(false);

    const create = () => {
        const data = {
            firstName: driver?.firstName,
            lastName: driver?.lastName,
            addressCommands: driver?.addressCommands
        }
        DriverService.create(data as DriverCommand)
            .then((res: any) => {
                console.log(res.data);
                setDriver({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    addressCommands: res.data.addressCommands
                })
                console.log(driver);
            }).catch((e: Error) => {
                console.log(e);
        })
    }
    const update = (driverId: string) => {
        const data = {
            firstName: driver?.firstName,
            lastName: driver?.lastName,
            addressCommands: driver?.addressCommands
        }
        DriverService.update(driverId, data as DriverCommand)
            .then((res: any) => {
                console.log(res.data);
                setUpdateDriver(true);
            })
    }
    return (
        <div></div>
    )
}

export default DriverComponent;

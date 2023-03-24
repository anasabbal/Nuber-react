import AddressCommand from "./address-command";

export default interface DriverCommand {
    firstName: string | null,
    lastName: string | null
    addressCommands: Array<AddressCommand> | null
}

import NotificationDriver from "./notification-driver";



export default interface DriverAvailableReponse {
    id: string | null,
    firstName: string | null,
    lastName: string | null,
    driverStatus : string | null,
    notifications: Array<NotificationDriver>,
    bankAccountId: string | null
}
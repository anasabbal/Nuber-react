export default interface CustomerDetails {
    customer?: CustomerDto | null,
    driverLocationDto?: DriverLocationDto | null,
    bankAccount?: BankAccount | null,
    walletDetails?: WalletDetails | null
}
type CreditCardDto = {
    id?: string | null,
    createdBy?: string | null,
    holdName?: string | null,
    number?: string | null,
    expirationDate?: string | null,
    cvv?: string | null
};
type PaymentDto = {
    id?: string | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
    updatedBy?: string | null,
    amount?: number | null,
    creditCard?: CreditCardDto | null,
    paymentStatus?: string | null,
    barCode?: string | null,
    paymentType?: string | null
}
type WalletDetails = {
    id?: string | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
    updatedBy?: string | null,
    deleted?: Boolean | null
    active?: Boolean | null,
    accountId?: string | null,
    creditCards?: Array<CreditCardDto> | null,
    payments?: Array<PaymentDto> | null
};
type BankAccount = {
    id?: string | null,
    userId?: string | null,
    type?: string | null,
    status?: string | null,
};
type NotificationCustomerDto = {
    id?: string | null,
    driverId?: string | null
};
type CustomerDto = {
    id?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    password?: string | null,
    notifications?: Array<NotificationCustomerDto>
};
type GeoIp = {
    id?: string | null,
    ipAddress?: string | null,
    country?: string | null,
    city?: string | null,
    latitude?: string | null,
    longtitude?: string | null
}
type LocationEntityDto = {
    id?: string | null,
    active?: Boolean | null,
    geoIp?: GeoIp | null
}
type DriverLocationDto = {
    id?: string | null,
    deleted?: Boolean | null
    active?: Boolean | null,
    driverId?: string | null,
    name?: string | null,
    available?: Boolean | null,
    carId?: string | null,
    locationEntity?: Array<LocationEntityDto>
}
export class Shop {

    id:number;
    userid:number;
    shopName:string;
    specializationId:number;
    locationId:number;
    street:string;
    active:boolean;
    startDate:Date;
    accountTypeId:number;
    AppUserEntity :object;
    SpecializationEntity :object;
    LocationEntity :object;
    AccountTypeEntity :object;
    ShopProductEntity :object;
    WorkOrderEntity :object;
}
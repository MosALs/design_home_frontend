import { PhoneEntity } from '../entities/phone.entity';
export interface UserDataCollectionDTO{
    phone: PhoneEntity,
	locationName:string,
	areaName :string;
	 governoratName:string;
	countryName:string;
	specializationName:string;


}
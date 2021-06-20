import { UserDataCollectionDTO } from './UserDataCollectionDTO';
export interface UserProfileDto {
	name: string;
	userName: string;
	// private String name;

	mobile: string;
	userImage: ImageData;
	websiteLink: String;
	facbookLink: String;
	password: String;
	locationName: String;
	accountTypeName: String;
	shopName: String;
	street: String;
	active: Boolean;
	startDate: Date;
	wholeRetailSale: String;
	deliveryNoDelivery: String;
	userCollection: UserDataCollectionDTO[];
}
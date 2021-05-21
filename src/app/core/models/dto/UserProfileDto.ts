import { UserDataCollectionDTO } from './UserDataCollectionDTO';
export interface UserProfileDto{
	 name : string;
	
	// private String name;
	
	 mobile: string ;
	 userImage: ImageData;
	 websiteLink:String ;
	 facbookLink:String ;
	  password:String ;
	  locationName: String ;
	//private String specializationName;
	 accountTypeName:String;
	 shopName:String ;
	 street:String ;
	 active: Boolean ;
	  startDate:Date ;
	 wholeRetailSale:String ;
	 deliveryNoDelivery:String ;
	 mobileOne:String ;
	  mobileTwo:String;
	 mobileThree:String ;
	 mobileFour:String ;
	 landLineOne:string ;
	 landLineTwo:String ;
	 landLineThree:String ;
	 Locations:[];
	 phones:[];
	  specialization:[];
	  userCollection:UserDataCollectionDTO[]
}
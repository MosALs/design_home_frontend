import { UserDataCollectionDTO } from './UserDataCollectionDTO';
import { UserRatingAndReviewsDTO } from './UserRatingAndReviewsDTO';
import { WorkOderDto } from './WorkOrderDto';
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
	userRatingsAndReviews:UserRatingAndReviewsDTO[];
	workOderDto:WorkOderDto[];
}
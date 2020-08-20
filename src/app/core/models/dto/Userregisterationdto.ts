import { AppUser } from '../entities/AppUser.entity';
import { Areas } from '../entities/Areas.entity';
import { Shop } from '../entities/Shop.entity';
import { Location } from '../entities/Location';
import { Specialization } from '../entities/Specialization.entity';
import { UserRole } from '../entities/UserRole.entity';

export class UserRegisterationDto {
    appuser: AppUser;
    areas: Areas;
    location: Location;
    shop: Shop;
    specialization: Specialization;
    userRole: UserRole;
    accountType:AccountType;


}
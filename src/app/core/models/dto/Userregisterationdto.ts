import { AppUser } from '../entities/AppUser.entity';
import { Areas } from '../entities/Areas.entity';

import { Location } from '../entities/Location';
import { Specialization } from '../entities/Specialization.entity';

import { AccountType } from '../entities/Account_Type.entity';
import { Shop } from '../entities/Shop.entity';

export class UserRegisterationDto {
    appuser: AppUser;
    areas: Areas;
    location: Location;
    shop:Shop;
    specialization: Specialization;
    accountType: AccountType;


}
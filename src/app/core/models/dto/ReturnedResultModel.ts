import { HttpResponse } from "@angular/common/http";

export interface ReturnedResultModel {

    message:string,
    error:string,
    status:HttpResponse<object>,
    result:object
}
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

export class ErrorHandler {

  // handle errors with Http
  public static handleErrors(error : HttpErrorResponse){
    let message : string = '';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      message = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      message = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }
}

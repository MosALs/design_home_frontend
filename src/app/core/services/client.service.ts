import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../models/model/IClient';
import { catchError, retry } from "rxjs/operators";
import { ErrorHandler } from '../models/utils/ErrorHandler';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private dataURL: string = 'https://gist.githubusercontent.com/NohaElHindy/29ba5da5a891d4d3460201a6ffcd4192/raw/4fd9fc014709e58688f2538d404e0d4402e597a5/KMGN-IClient';

  constructor (private httpClient: HttpClient) {
  }

  public getAllClients(): Observable<IClient[]> {
    return this.httpClient.get<IClient[]>(this.dataURL).pipe(
      retry(1),
      catchError(ErrorHandler.handleErrors)
    );

  }
}

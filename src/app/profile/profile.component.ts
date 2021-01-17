import { Component, OnInit } from '@angular/core';
import { IClient } from '../core/models/model/IClient';
import { ClientService } from '../core/services/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public client: IClient = {} as IClient;
  public clients: IClient[];
  public errorMessage: string = '';
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((data) => {
      this.clients = data;
      console.log("clients", this.clients)
    }, (error) => {
      this.errorMessage = error;
    });
  }


}

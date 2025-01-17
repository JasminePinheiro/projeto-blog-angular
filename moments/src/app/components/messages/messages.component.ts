import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  faTimes = faTimes;
  
  // quando colocamos publico temos acesso ao template 
  constructor(public messagesService: MessagesService) { } 

  ngOnInit(): void {
  }

}

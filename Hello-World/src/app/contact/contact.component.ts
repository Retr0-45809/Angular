import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ser:SubscribeService) { }

  ngOnInit(): void {
  }
  Subscribe(){
    this.ser.subscribeFromService;
  }
}

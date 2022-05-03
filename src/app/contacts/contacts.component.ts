import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public links = [
    {name: 'github', url: 'https://github.com/TERY22', icon: 'ri-github-line'},
    {name: 'vk.com', url: 'https://vk.com/uta_279', icon: 'ri-chat-3-line'},
    {name: 'telegram', url: 'https://t.me/deadman_22', icon: 'ri-telegram-line'},
    {name: 'instagram', url: 'https://www.instagram.com/the____lemon/', icon: 'ri-instagram-line'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

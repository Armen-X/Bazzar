import { Injectable } from '@angular/core';
import { Contact } from './../Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      Id: 1,
      UserName: 'Felix',
      FirstName: 'Felix',
      LastName: 'Ohanyan',
      Email: 'Feko@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR215qLb6c53AX4bw1jzCrug',
    },
    {
      Id: 2,
      UserName: 'Chibur',
      FirstName: 'Vahan',
      LastName: 'Sahakyan',
      Email: 'Sava@gmail.com',
      ImageUrl: 'https://scontent-lax3-2.cdninstagram.com/vp/8b395529559e5f9dbab29bf07810dec5/5E27D8C1/t51.2885-15/sh0.08/e35/p750x750/64386743_1187871004732336_3845010825664198559_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=104',
    },
    {
      Id: 3,
      UserName: 'Vladi',
      FirstName: 'Vlad',
      LastName: 'Petrovic',
      Email: 'Vladi@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR2tbgqwQ-SePMY3wIvSI8OA',
    },
    {
      Id: 4,
      UserName: 'Argishto',
      FirstName: 'Argisht',
      LastName: 'N',
      Email: 'Argishti@gmail.com',
      ImageUrl: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRTsV6aT1-zft07UNhPAbo7w',
    },
  ];



  constructor() { }


  getAllContacts() {
    return [...this.contacts];
  }
  getContact(Id: number) {
    return {
      ...this.contacts.find(contact => {
      return contact.Id === Id;
    })};
  }

  deleteContact(Id: number) {
  this.contacts = this.contacts.filter(contact => {
    return contact.Id !== Id;
  });
  }
}



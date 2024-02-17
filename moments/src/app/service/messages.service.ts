import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  message: string = '';

  constructor() { }

  // nesse método conseguimos exibir a mensagem e apaga-la após 4s
  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear()
    }, 2000);
  }

  clear() {
    this.message = '';
  }

}

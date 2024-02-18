import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  message: string = '';

  constructor() { }

  // nesse método conseguimos exibir a mensagem e apaga-la após 2s
  add(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear()
    }, 4000);
  }

  clear() {
    this.message = '';
  }

}

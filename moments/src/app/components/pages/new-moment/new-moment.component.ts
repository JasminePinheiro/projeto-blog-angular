import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Interface-moments';
@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
btnText = "Compatilhar";
  constructor() { }

  // maneiras de enviar um fomulário ou com o form data ou com json
  async createHandler(moment: Moment ){
    const formData = new FormData()

    formData.append("title", moment.title);
    formData.append("decription", moment.decription)
  }
  
  ngOnInit(): void {
  }

}

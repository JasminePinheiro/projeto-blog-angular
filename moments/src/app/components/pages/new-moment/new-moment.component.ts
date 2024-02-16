import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Interface-moments';
import { MomentService } from 'src/app/service/moment.service'; 


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = "Compatilhar";
  constructor(private momentService: MomentService) { }

  // maneiras de enviar um fomulário ou com o form data ou com json
  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);

    formData.append("description", moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Interface-moments';
import { MomentService } from 'src/app/service/moment.service';
import { MessagesService } from 'src/app/service/messages.service';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = "Compatilhar";
  constructor(private momentService: MomentService, 
  private messagesService: MessagesService, 
  private router: Router) { }

  // maneiras de enviar um fomulário ou com o form data ou com json
  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title);

    formData.append("description", moment.description);

     // não tem validção o campo image é opcional 
    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add("Momento adicionado com sucesso!");

    this.router.navigate(['/']) // após o usuario adicionar um serviço eu quero que ele vá para home
  }

  ngOnInit(): void {
  }

}

/*
ToDo

 enviar os dados para o service para cadastrar no banco

 exibir a mensagem de sucesso

 redirecionar a página depois que a pessoa preencher o formulario

*/
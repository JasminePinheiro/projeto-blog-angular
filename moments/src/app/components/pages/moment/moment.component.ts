import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/service/moment.service';
import { FormGroup, FormControl, Validators, FormGroupDirective  } from '@angular/forms';

import { Moment } from 'src/app/Interface-moments';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/service/messages.service';
import { Comment } from 'src/app/Interface-comment';
import { ComentService } from 'src/app/service/comment.service';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;

  constructor(private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: ComentService) { }

  // exibindo a página de detalhes
  ngOnInit(): void {
    // id que está na url
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => this.moment = item.data);

    this.commentForm = new FormGroup( {
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    });
  }

  get text(){
    return this.commentForm.get('text')!;
  }
  
get username() {
  return this.commentForm.get('username')!;
}
  async removeHandler(id: number) {

    await this.momentService.removeMoment(id).subscribe() // esperamos a resposta do banco para excluir o registro

    this.messagesService.add("Momento excluído com sucesso");
    this.router.navigate(['/']);

  }

 async onSubmit(formDirective: FormGroupDirective){

    if (this.commentForm.invalid) {
      return
    }

    const data: Comment = this.commentForm.value
    data.momentId = Number(this.moment!.id)

    await this.commentService.createComent(data).subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.messagesService.add("Comentário adicioado!");

    // reseto o form
    this.commentForm.reset();
    formDirective.resetForm();
  }

}

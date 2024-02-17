import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Moment } from 'src/app/Interface-moments';
import { MomentService } from 'src/app/service/moment.service';
import { environment } from 'src/environments/environment'; // pegando a url da api

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // fazendo a busca no filtro
  allMoments: Moment[] = [] // todos os momentos que estão sendo exibido
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = '';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      // fazendo uma manipulação da data (padrão br)
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR'); // pode de exclamação pq é certeza que a data vai vim
      });

      this.allMoments = data
      this.moments = data
    });
  }

  search(e: Event): void {

    const target = e.target as HTMLInputElement
    const value = target.value

    // quando colocamos o escopode bloco para a arrow function preciso fazer um retorno
    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLocaleLowerCase().includes(value);
    })

  }


}

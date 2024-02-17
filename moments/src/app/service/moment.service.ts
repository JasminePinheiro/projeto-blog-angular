// São importantes para ter interação no banco de dados 
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; /* requições HTTP*/
import { Observable } from "rxjs";
import { Moment } from '../Interface-moments';
import { Response } from '../Interface-response';

// importação da nossa api 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData); // vamos usar o post pq estamos enviando os dados
  }
}

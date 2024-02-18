import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../Interface-comment';
import { Response } from '../Interface-response';
@Injectable({
  providedIn: 'root'
})
export class ComentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/mements`

  constructor(private http: HttpClient) { }

  createComent(data: Comment): Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(this.apiUrl, data);
  }

}

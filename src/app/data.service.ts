import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  id: number[];
  name: string[];
  url: string[];
  images: string[];
  found: boolean;

constructor(private httpClient: HttpClient) {}

// connecting to the api

  getQuery(query: string): Observable<any> {
    return this.httpClient.get<any>('http://api.tvmaze.com/search/shows?q=' + query);
  }
  getSeasons(showId: string): Observable<any> {
  return this.httpClient.get<any>('http://api.tvmaze.com/shows/' + showId + '/seasons');
}
  getEpisodes(episodeId: number): Observable<any> {
    return this.httpClient.get<any>('http://api.tvmaze.com/seasons/' + episodeId + '/episodes');
  }
}

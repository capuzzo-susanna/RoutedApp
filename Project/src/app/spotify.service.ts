
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'BQBWXu3AYG6Nlc9wWygfIk3wAlwORhfvwdH8k5PGFHR-08tuVpcHANnjOaZrJimyj5FjHdxvlQ65LQ4pTJrYwcfHMfecNBJEuP9xZJulcw8ddvA6MIU-zu2ePYbvXGWPPPuFc_1ymvWOQ-I'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


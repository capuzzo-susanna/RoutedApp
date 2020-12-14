
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
        'Bearer BQAJ6QaA26yEJ8U-caBk3NLh2ZocS5tpCGoXO_0xHG2Wg9VY2FggVbEEvhZCIG720Y_dnnO-GYaGZYBJ6iErz-7X-63hm_r75uWB7kcmCfkSQlY_H5F2scjaysJNU852hkZJbnVeV0NCQy0'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}


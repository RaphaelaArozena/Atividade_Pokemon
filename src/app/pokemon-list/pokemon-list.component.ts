import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemons: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://demo4651817.mockable.io/rm95807').subscribe(
      (response) => {
        // Assumindo que a resposta contém um array de pokemons
        this.pokemons = response.slice(0, 20); // Pegando os 20 primeiros pokemons
      },
      (error) => {
        console.error('Erro ao carregar os pokemons:', error);
      }
    );
  }
}

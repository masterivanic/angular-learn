import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})

export class RecetteComponent implements OnInit {

  route: string = '/hero'
  routeName: string = 'REALISATION DES recettes'
  active: number = 0
  realisationRecette = '  realisation des recettes'
  cadrageRecette = 'cadrage des recettes des 3 prochaines années'
  detailsPrevision = 'details des previsions des recettes'
  isTextareaFr?:boolean
  isTextareaEn?:boolean

  recetteRoutes = [
    { routeName: 'realisation des recettes', isActive: 1 },
    { routeName: 'cadrage des recettes', isActive: 2 },
    { routeName: 'detail des previsions des recettes', isActive: 3 },
    { routeName: 'edition des recettes', isActive: 4 },
    { routeName: 'nature des recettes', isActive: 5 }
  ]

  constructor() {

  }

  ngOnInit(): void {
    this.getAllRoutes()
    this.initialise()
  }

  getAllRoutes(): void {
    this.recetteRoutes.forEach(function (value, key) {
      console.log(value, key)
    })
  }

  setActive(active: number): void {
    this.active = active
  }

  initialise(): void {
    this.active = 0
    this.isTextareaFr = false
    this.isTextareaEn = true
  }

  clickFr(): void{
    this.isTextareaFr = false
    this.isTextareaEn = true
  }

  clickEn(): void{
    this.isTextareaFr = true
    this.isTextareaEn = false
  }

}

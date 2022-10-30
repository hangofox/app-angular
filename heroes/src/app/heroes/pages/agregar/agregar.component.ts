import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { MY_FORM_MODEL } from './agregar.constants';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup = this.formService.createFormGroup(this.formModel);

  constructor(
    private formService: DynamicFormService,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
       this.activatedRoute.params
       .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeById(id))
       )
       .subscribe(heroe => this.formGroup.setValue(heroe));
    }
  }

  guardar () {
    console.log(this.formGroup.value);
  }

}

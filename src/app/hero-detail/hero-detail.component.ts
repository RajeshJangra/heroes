import {Component, OnInit, Input} from "@angular/core";
import {Hero} from "../hero";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeroService} from "../hero.service";
import "rxjs/add/operator/switchMap";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.switchMap(
      (params: Params) => this.heroService
        .getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  goHeroes(): void {
    this.router.navigate(['/heroes']);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}

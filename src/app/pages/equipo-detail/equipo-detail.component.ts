import { LoginService } from './../../services/loginService';
import { EquiposService } from './../../services/EquiposService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Equipo } from 'src/app/models/Equipo';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css'],
})
export class EquipoDetailComponent implements OnInit {
  public id: any;
  sub: any;
  equipo: Equipo;
  srcImage: string;
  urlImages: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private equiposService: EquiposService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.equipo = new Equipo();
    this.srcImage = './../../../assets/images/RealMadrid.png';
    this.urlImages = new Array();
    // if (this.loginService.getToken() === '') {
    //   alert('No tenemos credenciales');
    //   this.router.navigate(['/login']);
    // }
  }

  ngOnInit(): void {
    /** Recibimos el id que hemos enviado por parámetro en la ruta */
    this.sub = this.route.paramMap.subscribe((param: ParamMap) => {
      // Seteamos la variable de tipo any con el parámetro obtenido
      this.id = param.get('id');
    });

    this.equiposService.getEquipoByid(this.id).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.equipo = response;
        this.SetImage();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setUrlImages(): void {
    this.urlImages.push(
      './../../../assets/images/AtleticoMadrid.png',
      './../../../assets/images/RealMadrid.png',
      './../../../assets/images/RealSociedad.gif',
      './../../../assets/images/Villareal.gif'
    );
  }

  SetImage(): void {
    switch (this.equipo.nombre) {
      case 'Real Madrid':
        this.srcImage = './../../../assets/images/RealMadrid.png';
        break;
      case 'Atletico de Madrid':
        this.srcImage = './../../../assets/images/AtleticoMadrid.png';
        break;
      case 'Real Sociedad':
        this.srcImage = './../../../assets/images/RealSociedad.jpg';
        break;
      case 'Villareal':
        this.srcImage = './../../../assets/images/Villarreal.jpg';
        break;
      default:
        this.srcImage = '';
        break;
    }
  }
}

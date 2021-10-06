import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Package } from 'src/app/interfaces/package';
import { Sell } from 'src/app/interfaces/sell';
import { AllService } from '../../services/all.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private allService: AllService) { }
  sells: Sell[] = [];
  packages: Package[] = [];

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.loadSells();
  }

  loadSells() {
    this.allService.getSells().subscribe((response) => {
      this.sells = response.ventas;
      this.loadPackages();
    });
  }
  loadPackages() {
    this.allService.getPackages().subscribe((response) => {
      this.packages = response.destinos;
    });
  }
}

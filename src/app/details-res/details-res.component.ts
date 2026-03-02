import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-details-res',
  templateUrl: './details-res.component.html',
  styleUrl: './details-res.component.css'
})
export class DetailsResComponent implements OnInit {

  residence?: Residence;

  constructor(
    private route: ActivatedRoute,
    private resService: ResidenceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.resService.getres(id).subscribe((data: any) => {
        this.residence = data;
      });
    }
  }
}
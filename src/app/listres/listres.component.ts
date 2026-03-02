import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-listres',
  templateUrl: './listres.component.html',
  styleUrl: './listres.component.css'
})
export class ListresComponent {
  listfav: Residence[] = [];
  search = '';
  listresdatabase: Residence[] = [];
  constructor(private resservice: ResidenceService) {}
  ngOnInit(): void {
    this.resservice.getAllresidences().subscribe((data: any) => {
      this.listresdatabase = data;
    });
  }
   ajouter(res: Residence) {
    if (!this.listfav.includes(res)) {
      this.listfav.push(res);
      console.log(this.listfav);
    }
  }
  searchbytitle() {
    return this.listresdatabase.filter((r) =>
      r.name.toLowerCase().includes(this.search.toLowerCase()),
    );
  }

  deleteres(id: any) {
    console.log('id: ' + id);
    this.resservice.deleteres(id).subscribe(()=>{
console.log('deleted!!!');
this.ngOnInit()
    });

  }
}

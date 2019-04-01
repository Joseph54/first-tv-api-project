import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  showId: string;
  seasons: any;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
        this.showId = params.get('id');
        this.getShows();
      }
    );
  }

  getShows(): void {
    this.dataService.getSeasons(this.showId).subscribe((results) => {
      this.seasons = results;
    });
  }

}

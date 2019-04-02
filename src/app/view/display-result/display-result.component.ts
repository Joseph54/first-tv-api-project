import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
// getting seasons with route
// getting seasons from the datService with an api call using the id
  query: string;
  shows: any;

  constructor(private dataService: DataService,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) => {
        this.query = params.get('id');
        this.getShows();
      }
    );
  }

  getShows(): void {
    this.dataService.getQuery(this.query).subscribe((results) => {
      this.shows = results;
      console.log(this.shows);
    });
  }
}

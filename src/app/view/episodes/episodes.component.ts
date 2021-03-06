import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  // Used @input to bring id from the parent
  // getting episodes with the id from the dataService from a api call
  @Input() id: number;
  episodes: any;
  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.id);
    this.dataService.getEpisodes(this.id).subscribe((results) => {
      this.episodes = results;
    });
  }

}

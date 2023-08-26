import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  isSongPlaying?: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isSongPlaying = false;
  }

  changePlayIcon() {
    this.isSongPlaying = !this.isSongPlaying;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meditation-item',
  templateUrl: './meditation-item.component.html',
  styleUrls: ['./meditation-item.component.scss']
})
export class MeditationItemComponent {

  @Input()
  element: {name: '', duration: 0, desc: '', imagePath: '' };


}

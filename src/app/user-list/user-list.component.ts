import { Component } from '@angular/core';
import { Meditation } from '../meditations/meditation.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  meditations: Meditation[] = [
    new Meditation("Mindfulness", 15,
    "A practice that involves focusing on the present moment without judgment, cultivating awareness of thoughts and sensations.",
    "../assets/mindfulness.jpg"),
    new Meditation("Loving-Kindness", 20,
    "This technique centers around generating feelings of love and compassion, directed towards oneself and others, to foster emotional well-being",
    "../assets/loving.jpg")
  ];
}

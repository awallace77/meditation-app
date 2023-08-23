import { Component, OnInit } from '@angular/core';
import { Meditation } from '../meditation.model';

@Component({
  selector: 'app-meditation-list',
  templateUrl: './meditation-list.component.html',
  styleUrls: ['./meditation-list.component.scss']
})
export class MeditationListComponent {
  meditations: Meditation[] = [
    new Meditation("Mindfulness", 15,
    "A practice that involves focusing on the present moment without judgment, cultivating awareness of thoughts and sensations.",
    "../assets/mindfulness.jpg"),
    new Meditation("Loving-Kindness", 20,
    "This technique centers around generating feelings of love and compassion, directed towards oneself and others, to foster emotional well-being",
    "../assets/loving.jpg"),
    new Meditation("Transcendental", 10,
    "A mantra-based practice that aims to achieve deep relaxation and inner calm by repeating a specific sound or word.",
    "../assets/Transcendental.jpeg"),
    new Meditation("Body Scan", 5,
    "This involves mentally scanning through the body, paying attention to physical sensations and promoting relaxation and self-awareness.",
    "../assets/body_scan.jpg"),
    new Meditation("Zen", 15,
    "A traditional form of seated meditation in Zen Buddhism, characterized by observing thoughts and sensations while maintaining a specific posture and breathing pattern.",
    "../assets/zen.jpg")
  ];

  constructor(){
    console.log(this.meditations[0].name)
  }

}

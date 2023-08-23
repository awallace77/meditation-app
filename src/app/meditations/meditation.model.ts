export class Meditation{
  public name: string;
  public duration: number;
  public desc: string;
  public imagePath: string;

  constructor(name: string, duration: number, desc: string, imagePath: string){
    this.name = name;
    this.duration = duration;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}

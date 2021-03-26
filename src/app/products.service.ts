import { Injectable } from '@angular/core';
import { Travel} from './travel';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Array<Travel> = [
    {title: "Discover Poland", destination: "Poland", description: "In the north-west is the Baltic seacoast spanning from the Bay of Pomerania to the Gulf of Gdańsk. The coast is marked by several spits, coastal lakes (former bays that have been cut off from the sea), and dunes.", startdates: [new Date(2021,6,15), new Date(2021,6,29), new Date(2021,7,13)], duration: 10, price: 1099, img: "../assets/img/marek-piwnicki-VGj42FxvnBo-unsplash.jpg"},
    {title: "Find Nessy", destination: "Scotland", description: `Loch Ness is best known for alleged sightings of the cryptozoological Loch Ness Monster, also known affectionately as "Nessie" (Scottish Gaelic: Niseag). It is connected at the southern end by the River Oich and a section of the Caledonian Canal to Loch Oich. At the northern end there is the Bona Narrows which opens out into Loch Dochfour, which feeds the River Ness and a further section of canal to Inverness, ultimately leading to the North Sea via the Moray Firth.`, startdates: [new Date(2021,6,13), new Date(2021,6,26), new Date(2021,7,10)], duration: 12, price: 1349, img: "../assets/img/paul-green-gOHfFgwyDNM-unsplash.jpg"},
    {title: "Rhine-Tour", destination: "Germany", description: "The Rhine and the Danube formed most of the northern inland frontier of the Roman Empire and, since those days, the Rhine has been a vital navigable waterway carrying trade and goods deep inland. Its importance as a waterway in the Holy Roman Empire is supported by the many castles and fortifications built along it. In the modern era, it has become a symbol of German nationalism.", startdates: [new Date(2021,6,10), new Date(2021,6,27), new Date(2021,7,16)], duration: 10, price: 1249, img: "../assets/img/pexels-pixabay-163407.jpg"},
    {title: "Alp-Traum", destination: "Switzerland", description: "The Alps are the highest and most extensive mountain range system that lies entirely in Europe, stretching approximately 1,200 km (750 mi) across eight Alpine countries (from west to east): France, Switzerland, Monaco, Italy, Liechtenstein, Austria, Germany, and Slovenia.The Alpine arch generally extends from Nice on the western Mediterranean to Trieste on the Adriatic and Vienna at the beginning of the Pannonian basin. ", startdates: [new Date(2021,6,5), new Date(2021,6,25)], duration: 10, price: 1459, img: "../assets/img/dmitriy-suponnikov-ULJw7NDK1SU-unsplash.jpg"},
    {title: "Going Easy", destination: "Netherlands", description: "The four largest cities in the Netherlands are Amsterdam, Rotterdam, The Hague and Utrecht. Amsterdam is the country's most populous city and nominal capital,[20] while The Hague holds the seat of the States General, Cabinet and Supreme Court. The Port of Rotterdam is the busiest seaport in Europe, and the busiest in any country outside East Asia and Southeast Asia, behind only China and Singapore.", startdates: [new Date(2021,6,8), new Date(2021,6,21)], duration: 11, price: 1399, img: "../assets/img/coen-van-de-broek-C4S0b9RfO0E-unsplash.jpg"},
    {title: "Coast to Coast", destination: "Italy", description: "An Italic tribe known as the Latins formed the Roman Kingdom in the 8th century BC, which eventually became a republic with a government of the Senate and the People. The Roman Republic initially conquered and assimilated its neighbours on the Italian peninsula, eventually expanding and conquering parts of Europe, North Africa and Asia. ", startdates: [new Date(2021,6,17), new Date(2021,7,1), new Date(2021,7,16)], duration: 12, price: 1329, img: "../assets/img/pexels-andrea-piacquadio-3771836.jpg"}
  ]

  constructor() { }

  getProducts() : Array<Travel> {
    return this.products;
  }
}

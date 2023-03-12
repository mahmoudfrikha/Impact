import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-projects',
  templateUrl: './carousel-projects.component.html',
  styleUrls: ['./carousel-projects.component.scss']
})
export class CarouselProjectsComponent {
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  projects = [
    { title: 'Project 1', description: 'Description of Project 1', image: 'assets/Images/house_building.jpg' },
    { title: 'Project 2', description: 'Description of Project 2', image: 'assets/Images/house_building.jpg' },
    { title: 'Project 3', description: 'Description of Project 3', image: 'assets/Images/house_building.jpg' },
    { title: 'Project 4', description: 'Description of Project 4', image: 'assets/Images/house_building.jpg' },
    { title: 'Project 5', description: 'Description of Project 5', image: 'assets/Images/house_building.jpg' },
  ];
}

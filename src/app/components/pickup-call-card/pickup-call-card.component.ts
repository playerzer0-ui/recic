import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;
  @Input() status: string = "";
  @Input() notes: string = "";
  @Input() createdAt: string = "";
  @Input() updatedAt: string = "";
  @Input() isFinished: boolean = false;

  constructor(private router: Router) {}

  navigateToPickupCall() {
    this.router.navigate(['/pickup-call']);
  }

  ngOnInit() {}

}


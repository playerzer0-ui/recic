import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Set a delay before navigating to the login page
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
    }, 2000); // 2000ms = 2 seconds delay
  }

}

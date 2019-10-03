import { Component } from '@angular/core';

import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public zbarOptions:any;
  public scannedResult:any;

  constructor(
    private zbar: ZBar
  ) {
    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }
  }
  public scanCode(){
    this.zbar.scan(this.zbarOptions)
   .then(result => {
      console.log(result); // Scanned code
      this.scannedResult = result;
   })
   .catch(error => {
      alert(error); // Error message
   });
  }

}

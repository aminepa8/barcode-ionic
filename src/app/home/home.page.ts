import { Component } from '@angular/core';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options : BarcodeScannerOptions;
  encodeText : string = '';
  encodedData : any={};
  scannedData : any={};
  constructor(public  navCtrl :NavController, public scanner :BarcodeScanner){

  }
  scan(){
    this.options = {
      prompt : 'Scan your Barcode'
    }
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) =>{
      console.log('Error :',err);
    })
  }
  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
      this.encodedData = data;
    }, (err) =>{
      console.log('Error :',err);
    })
  }
}

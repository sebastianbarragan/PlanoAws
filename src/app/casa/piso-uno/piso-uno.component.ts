import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piso-uno',
  templateUrl: './piso-uno.component.html',
  styleUrls: ['./piso-uno.component.css']
})
export class PisoUnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle = true;
  status = 'ENCENDIDO'; 
  
  enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'ENCENDIDO' : 'APAGADO';
  }
  
  toggle2 = true;
  status2 = 'ENCENDIDO'; 
  
  enableDisableRule2() {
      this.toggle2 = !this.toggle2;
      this.status2 = this.toggle2 ? 'ENCENDIDO' : 'APAGADO';
  }
  
  toggle3 = true;
  status3 = 'ENCENDIDO'; 
  
  enableDisableRule3() {
      this.toggle3 = !this.toggle3;
      this.status3 = this.toggle3 ? 'ENCENDIDO' : 'APAGADO';
  }
  
  toggle4 = true;
  status4 = 'ENCENDIDO'; 
  
  enableDisableRule4() {
      this.toggle4 = !this.toggle4;
      this.status4 = this.toggle4 ? 'ENCENDIDO' : 'APAGADO';
  }
  
}

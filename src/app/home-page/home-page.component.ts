import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  leftTooltipItems: any
  changeColorText: boolean = false 
  addEntrepriseDialogVisible: boolean = false 
  changeColor(value:boolean) {
    this.changeColorText = value;        
  }
  showDialogAddEntreprise() {
    this.addEntrepriseDialogVisible = true;            
  }
  hideDialogAddEntreprise(){
    this.addEntrepriseDialogVisible = false;      

  }
}

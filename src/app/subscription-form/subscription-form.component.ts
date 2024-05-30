import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent implements OnInit{

  isEmailError:boolean=false;
  isSubscribed:boolean=false;

  ngOnInit(): void {
    
  }
  constructor(private subscriberService:SubscribersService) {
    
  }
  onSubmit(formValue:any){
    const subData:Sub={
      name:formValue.name,
      email:formValue.email
    }
    this.subscriberService.checkSubs(subData.email).subscribe(val=>{
      
      if(val.empty){
        this.subscriberService.addSubs(formValue)
        this.isSubscribed=true
      }
      else{
        this.isEmailError=true;
      }
    })
  }
}

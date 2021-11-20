import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Contact } from '../shared/models/contact.models';
import { MessageService } from '../shared/apiservices/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  form : FormGroup;
  question:Contact[]
  constructor(private MessageService:MessageService) { }

  ngOnInit() {

    this.form = new FormGroup({
    'name': new FormControl(null,[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
    'email': new FormControl(null,[Validators.required,Validators.email,Validators.maxLength(50),Validators.minLength(5)]),
    'phone': new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(9)]),
    'message': new FormControl(null,[Validators.required,Validators.maxLength(200),Validators.minLength(3)])

  });
  }

  onSubmit(){

   const {name,email,phone,message} = this.form.value;
    const messages = new Contact(name,email,phone,message,)
    console.log(messages)
    this.MessageService.postMessage(messages)
         .subscribe((data:Contact)=>{

           console.log(data)
          if(data){
            this.form.reset()
          }


         })

 }

}

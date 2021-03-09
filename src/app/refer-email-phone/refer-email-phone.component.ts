import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-refer-email-phone',
  templateUrl: './refer-email-phone.component.html',
  styleUrls: ['./refer-email-phone.component.scss']
})
export class ReferEmailPhoneComponent implements OnInit {
  phoneForm: FormGroup;
  referId: string;
  referDetails: any
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: Api
  ) {
    this.phoneForm = this.fb.group({
      phoneNumber: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.referId = params['id'];
    });
    this.referData()
  }

  referData() {
    let url = 'https://mudani.com:3000/api/v1/admin/referDetails/' + this.referId
    this.api.get(url).subscribe(result => {
      if (result.status == 200) {
        this.referDetails = result.data
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

  onPhoneSubmit() {
    let data = {
      friendPhone: '+' + (this.phoneForm.value.phoneNumber).toString(),
      referId: this.referId
    }
    let url = 'https://mudani.com:3000/api/v1/admin/sendSMS'
    this.api.post(url, data).subscribe(result => {
      if (result.status == 200) {
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

}

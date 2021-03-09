import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Api } from '../../api/api.service';
declare var $;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  earlyForm: FormGroup;
  earlySubmitCheck: boolean = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private api: Api
  ) {
    this.earlyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {
  }

  earlySubmit() {
    this.earlySubmitCheck = true
    if (this.earlyForm.invalid) {
      return
    }
    let data = {
      email: this.earlyForm.value.email
    }
    let url = 'http://54.151.12.219:3000/api/v1/admin/saveEmail'
    this.api.post(url, data).subscribe(result => {
      console.log({ result })
      if (result.status == 200) {
        this.toastr.success(result.message);
        $('#Access').modal('show')
      } else if (result.status == 405) {
        this.toastr.success(result.message);
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }

}

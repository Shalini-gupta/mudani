import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Api } from '../../api/api.service';
declare var $;

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {
  referForm: FormGroup;
  referSubmitCheck: boolean = false;
  spinValue: number;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private api: Api
  ) {
    this.referForm = this.fb.group({
      yourEmail: ['', [Validators.required]],
      friendEmail: ['', [Validators.required]]
    })
  }

  public scroll(id) {
    let el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  ngOnInit() {

 
 
    var degree = 1800;
    var clicks = 0;
    //Clear interval timer if id saved in attributes:
    function clear_interval(t) {
      var interval = parseInt(t.data('interval'));
      if (interval > 0) {
        clearInterval(interval);
        t.data('interval', '');
      }
    }
    $('#spin ,.btnSpin ').click(function () {
      clicks++;
      var newDegree = degree * clicks;
      var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
      let totalDegree = newDegree + extraDegree;

      //Calculate result index:
      var win_num = 6 - Math.floor((totalDegree % 360 + 30) / 60);

      $('#wheel .sec').each(function () {
        var t = $(this);

        clear_interval(t);

        //Save timer ID in data-interval attribute:
        t.data('interval', setInterval(function () {
          var aoY = t.offset().top;
          $("#txt").html(t.html());

          if (aoY < 23.89) {
            $('#spin ,.btnSpin ').addClass('spin');
            setTimeout(function () {
              $('#spin ,.btnSpin').removeClass('spin');
            }, 100);
          }
        }, 10));

        $('#inner-wheel').css({
          'transform': 'rotate(' + totalDegree + 'deg)'
        });
      });

      //Stop updates and show result when transition already ended:
      setTimeout(function () {
        $('#wheel .sec').each(function () {
          clear_interval($(this));
        });
        $("#txt").html($('#wheel div.sec:nth-child(' + win_num + ')').html());
        // let selectedSpin = $('#wheel div.sec:nth-child(' + win_num + ')').html()
        // let selectedId = $(selectedSpin).attr('id')
        // if (selectedId == 'smile') {
        //   this.spinValue = 10
        // } else {

        //   this.spinValue = 20
        // }
        // $('.thanks').html('Thank you, You have earned ' + this.spinValue + ' Points')
        setTimeout(function () {
          $('#thankYou').modal('show')
        }, 1000)

      }, 6100);
    });
  }


  referSubmit() {

    // let el = document.getElementById('ReferFriend');
    // if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  
    let data = {
      name: 'test',
      friendName: 'test',
      email: this.referForm.value.yourEmail,
      friendEmail: this.referForm.value.friendEmail,
    }
    let url = 'https://admin.mudani.com/refer-a-friend-responses'
    this.api.post(url, data).subscribe(result => {
      console.log('referRFesult', result)
      if (result.id != '' && result.id != undefined) {
        $('#refer').modal('hide')
         $(window).scrollTop(0);
        // $('#thankYou').modal('show')
        this.referForm.reset()
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }
}

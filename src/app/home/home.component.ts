import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchCountryField, TooltipLabel, CountryISO } from "ngx-intl-tel-input";

import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Api } from '../../api/api.service';
declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Qatar];
  friendName: String;
  instaImages: any = []
  footerType: string = 'home'
  subscription: Subscription;
  referForm: FormGroup;
  latestNewsForm: FormGroup;
  referSubmitCheck: boolean = false;
  spinValue: number;
  subscriptionForm: FormGroup;
  referPhoneForm: FormGroup;
  referEmailForm: FormGroup;
  stockImage: String;
  customOptionsImg: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-left.png">', '<img src="assets/images/arrow-right.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private toastr: ToastrService,
    private api: Api
  ) {
    this.referForm = this.fb.group({
      yourName: ['', [Validators.required]],
      yourEmail: ['', [Validators.required, Validators.email]],
    })
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required]]
    })
    this.latestNewsForm = this.fb.group({
      email: ['', [Validators.required]]
    })
    this.referPhoneForm = this.fb.group({
      friendName: ['', Validators.required],
      friendPhone: ['', Validators.required],
    })
    this.referEmailForm = this.fb.group({
      friendName: ['', Validators.required],
      friendEmail: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {

    this.referPhoneForm.patchValue({
      number: "+97431422391",
      internationalNumber: "+974 3142 2391",
      nationalNumber: "3142 2391",
      countryCode: "QA",
      dialCode: "+974"
    });

    this.getInsta()

    // 1800000 30 mins
    // const source = interval(10000);
    // this.subscription = source.subscribe(val => {
    //   let checkEmail = this.cookieService.get('email')
    //   // console.log({ checkEmail })
    //   if (checkEmail == '') {
    //     $('#myModal').modal('show')
    //   }
    // });

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
      function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
      let n = randomNumber(0, 360);
      setTimeout(function () {
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
              $('#spin').addClass('spin');
              setTimeout(function () {
                $('#spin').removeClass('spin');
              }, 100);
            }
          }, 10));
          let totalDegree;
          let stockName;
          if (n > 0 && n <= 250) {
            totalDegree = newDegree + 620; //amc
            stockName = 'AMC'
            this.stockImage = 'assets/images/Spin-2.png'
          } else if (n > 250 && n <= 335) {
            totalDegree = newDegree + 815; //ford
            stockName = 'Ford'
            this.stockImage = 'assets/images/Spin-5.png'
          } else if (n > 335 && n <= 355) {
            totalDegree = newDegree + 720; //jetblue 
            stockName = 'Jet blue'
            this.stockImage = 'assets/images/Spin-10.png'
          } else if (n > 355 && n <= 357) {
            totalDegree = newDegree + 770; //uber 
            stockName = 'Uber'
            this.stockImage = 'assets/images/Spin-9.png'
          } else if (n > 357 && n <= 358) {
            totalDegree = newDegree + 580; //draftking
            stockName = 'Draftking'
            this.stockImage = 'assets/images/Spin-3.png'
          } else if (n > 358 && n <= 359) {
            totalDegree = newDegree + 540; //nokia
            this.stockImage = 'assets/images/Spin-4.png'
            stockName = 'Nokia'
          } else if (n > 359 && n <= 359.5) {
            totalDegree = newDegree + 670; //tesla
            this.stockImage = 'assets/images/Spin-8.png'
            stockName = 'Tesla'
          } else if (n > 359.5 && n <= 359.5) {
            totalDegree = newDegree + 500; //apple
            this.stockImage = 'assets/images/Spin-7.png'
            stockName = 'Apple'
          }
          $('#inner-wheel').css({
            'transform': 'rotate(' + totalDegree + 'deg)'
          });
          $("#stock_img").attr("src", this.stockImage);
          $("#stock_name").val(stockName);
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
            $('#SpinModal').modal('hide')
            $('#Friend').modal('show')
          }, 1000)
        }, 6100);
      }, 300)
    });

    $(document).on('click', '.selfDirect', function () {
      $('.cardsLeft.cardsLeftF').addClass('active');
      $('.cardsLeft.cardsLeftNew').removeClass('active');
    });
    $(document).on('click', '.selfManag', function () {
      $('.cardsLeft.cardsLeftNew').addClass('active');
      $('.cardsLeft.cardsLeftF').removeClass('active');
    });
    $(document).on('click', '.pickCard li a', function () {
      $('.pickCard li a').removeClass('active');
      $(this).addClass('active');
    });

    // accordian
    $(document).ready(function () {
      $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-chevron-up")
            .addClass("fa-chevron-down");
        } else {
          $(".set > a i")
            .removeClass("fa=chevron-up")
            .addClass("fa-chevron-down");
          $(this)
            .find("i")
            .removeClass("fa-chevron-down")
            .addClass("fa-chevron-up");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
    });

    $(document).ready(function () {
      $(".set5 > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".content5")
            .slideUp(200);

        } else {
          $(".set5 > a.setb i")

          $(this)
          $(".set5 > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".content5").slideUp(200);
          $(this)
            .siblings(".content5")
            .slideDown(200);
        }
      });
    });

    $(document).ready(function () {
      $(".setnew > a.setb").on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .siblings(".contentnew")
            .slideUp(200);
          $(".setnew > a.setb i")

        } else {
          $(".setnew > a.setb i")

          $(this)
            .find("i")

          $(".setnew > a.setb").removeClass("active");
          $(this).addClass("active");
          $(".contentnew").slideUp(200);
          $(this)
            .siblings(".contentnew")
            .slideDown(200);
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  spinWheel() {
    $('#refer').modal('hide')
    $('#SpinModal').modal('show')
  }

  referSubmit() {
    let data = {
      name: 'test',
      friendName: 'test',
      email: localStorage.getItem('myEmail'),
    }
    let url = 'https://admin.mudani.com/refer-a-friend-responses'
    this.api.post(url, data).subscribe(result => {
      if (result.id != '' && result.id != undefined) {
        $('#refer').modal('hide')
        $('html,body').animate({
          scrollTop: $(".ReferFriendss").offset().top
        },
          'slow');
        this.referForm.reset()
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }

  submitSubscription() {
    let data = {
      email: this.subscriptionForm.value.email
    }
    let url = 'https://admin.mudani.com/newsletter-subscription-responses'
    this.api.post(url, data).subscribe(result => {
      console.log({ result })
      if (result.id != '' && result.id != undefined) {
        $('#ThanksModal').modal('show')
        this.subscriptionForm.reset()
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }

  latestNewsSubmit() {
    let data = {
      email: this.latestNewsForm.value.email
    }
    let url = 'http://54.151.12.219:3000/api/v1/admin/saveEmail'
    this.api.post(url, data).subscribe(result => {
      if (result.status == 200) {
        this.cookieService.set('email', this.latestNewsForm.value.email);
        $('#myModal').modal('hide')
        this.toastr.success(result.message);
      } else if (result.status == 405) {
        $('#myModal').modal('hide')
        this.toastr.error(result.message);
      } else {
        // this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }

  onPhoneSubmit() {
    if (this.referPhoneForm.invalid) {
      return
    }
    let phoneData = this.referPhoneForm.value.friendPhone.dialCode + this.referPhoneForm.value.friendPhone.number
    let data = {
      name: this.referForm.value.yourName,
      email: this.referForm.value.yourEmail,
      friendName: this.referPhoneForm.value.friendName,
      friendPhone: phoneData,
      stockName: $("#stock_name").val(),
    }
    this.api.post('https://mudani.com:3000/api/v1/admin/sendSMS', data).subscribe(result => {
      if (result.status == 200) {
        this.friendName = result.data.friendName
        this.referForm.reset()
        this.referEmailForm.reset()
        $('#Friend').modal('hide')
        $('#CongratModal').modal('show')
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

  onEmailSubmit() {
    if (this.referEmailForm.invalid) {
      return
    }
    let data = {
      name: this.referForm.value.yourName,
      email: this.referForm.value.yourEmail,
      friendName: this.referEmailForm.value.friendName,
      friendEmail: this.referEmailForm.value.friendEmail,
      stockName: $("#stock_name").val(),
    }
    let url = 'https://mudani.com:3000/api/v1/admin/sendEmail'
    this.api.post(url, data).subscribe(result => {
      if (result.status == 200) {
        this.friendName = result.data.friendName
        this.referForm.reset()
        this.referEmailForm.reset()
        $('#Friend').modal('hide')
        $('#CongratModal').modal('show')
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

  sendAnother() {
    $('#CongratModal').modal('hide')
  }

  ngAfterViewInit() {
    let id = localStorage.getItem('footerId')
    let el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    setTimeout(function () {
      localStorage.removeItem('footerId')
    }, 2000);
  }

  getInsta() {
    this.api.get('https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJXazhEckZACYV83RTBKR2VNWWxRNlluaGpNSzRCdHRQUFpUT3NCS2lzQjRoajF1cHRoU0l2dzNPU2ZAKa0V4eVNMVUxjYTJySFAyeDF5bmoyS2hIbEZAyMXdIVDMzdHBOMUh5ZAmdB').subscribe(result => {
      this.instaImages = result.data
    })
  }

}

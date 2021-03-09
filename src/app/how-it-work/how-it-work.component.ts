import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';
declare var $: any;

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.component.html',
  styleUrls: ['./how-it-work.component.scss']
})
export class HowItWorkComponent implements OnInit, AfterViewInit {
  principalAmount: number = 5000;
  copyPrincipalAmount: string = '5,000';
  timeHorizon: number = 6;
  contribution: number = 100;
  futureInvestment: number;
  currentYear: number = new Date().getFullYear() + this.timeHorizon;
  // totalAmount: number
  weakInvestment: number;
  normalInvestment: number;
  strongInvestment: number;
  activeDot = 3;
  rVal: number = 5;
  chartType: string = 'all';
  weakCheck: boolean = false;
  normalCheck: boolean = false;
  strongCheck: boolean = false;
  customOptions55: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 30,
    navSpeed: 700,
    navText: [' <img src="assets/images/arrow-blue.png">', '<img src="assets/images/arrow-white.png">'],
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
      }
    },
    nav: true
  }

  constructor(
  ) { }

  ngOnInit() {
    // this.selectRange(1)
    this.normalByDefault()
    if (screen.width <= 768) {
      $("#Self2, #Self1").click(function () {
        $('html,body').animate({
          scrollTop: $(".sliderArrow").offset().top
        },
          'slow');
      });
    }

    // this.newAllChart()
    this.normalChart()
    $(document).on('click', '.freqBlockShow', function () {
      $('.freqBlockHide').slideDown();
      $('.freqBlockShow').hide();
    });

    var requestFullscreen = function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    };

    var exitFullscreen = function () {

    };
    var fullscreenPage = document.getElementById('fullpage-button');
    var fullscreenExit = document.getElementById('fullpage-exit-button');

    fullscreenPage.addEventListener('click', function (e) {
      e.preventDefault();
      requestFullscreen(document.documentElement);
    });

    fullscreenExit.addEventListener('click', function (e) {
      e.preventDefault();
      exitFullscreen();
    });

    var fullscreenVideo = document.getElementById('video-button');
    var video = document.getElementById('video');

    fullscreenVideo.addEventListener('click', function (e) {
      e.preventDefault();
      requestFullscreen(video);
    });


    $(document).on('click', '#video-button', function (ev) {
      $('#video').get(0).play()

    });

    function scroller() {
      $(".slide1").css("width", "50%");
      $("#range1").val(100)
      $(".slide.slide2").css("width", "10%");
      $(".slide.slide3").css("width", "50%");
      $(".slide.slide5").css("width", "50%");
      // var range = $("#range5").attr("value");
      // $("#demo").html(range);
      // $(".slide.slide5").css("width", "50%");
      // $(document).on('input change', '#range5', function () {
      //   var slideWidth = $(this).val() * 100 / 100;
      //   $(".slide.slide5").css("width", slideWidth + "%");
      // });
    }
    scroller();

    $(document).on('click', '.AddSpan .form-control ,.arrowas', function () {
      $('.AddSpan ul').slideDown();
    });
    $(document).on('click', '.AddSpan ul li', function () {
      var x = $(this).text();
      $('.AddSpan .form-control').attr('value', x);
      $('.AddSpan ul').slideUp();
    });

    $(document).on('click', '.selfBox.selfBox2', function () {
      $('.selfBox.selfBox2').removeClass('active');
      $(this).addClass('active');

    });

    $(document).ready(function () {
      $("#Self2").click(function () {
        $(".ManagedAccount").css("display", "block");
        $(".DirectedAccount").css("display", "none");
      });
      $("#Self1").click(function () {
        $(".ManagedAccount").css("display", "none");
        $(".DirectedAccount").css("display", "block");
      });
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
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .siblings(".content")
            .slideDown(200);
        }
      });
    });
  }

  initialAmount(value) {
    let el = document.getElementById('chartContainer');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    this.principalAmount = value
    this.copyPrincipalAmount = new Intl.NumberFormat().format(this.principalAmount)
    var slideWidth = this.principalAmount * 100 / 250000;
    $(".slide1").css("width", slideWidth + "%");
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, this.rVal, this.contribution)
    if (this.chartType == 'all') {
      this.futureInvestment = undefined
      this.newAllChart()
    } else if (this.chartType == 'weak') {
      this.weakChart()
    } else if (this.chartType == 'normal') {
      this.normalChart()
    } else if (this.chartType == 'strong') {
      this.strongChart()
    }
  }

  monthlyContribution(value) {
    let el = document.getElementById('chartContainer');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    this.contribution = value
    var slideWidth = this.contribution * 100 / 1000;
    $(".slide.slide2").css("width", slideWidth + "%");
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, this.rVal,
      this.contribution)
    if (this.chartType == 'all') {
      this.futureInvestment = undefined
      this.newAllChart()
    } else if (this.chartType == 'weak') {
      this.weakChart()
    } else if (this.chartType == 'normal') {
      this.normalChart()
    } else if (this.chartType == 'strong') {
      this.strongChart()
    }
  }

  changeTime(value) {
    let el = document.getElementById('chartContainer');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    // this.chartType = value
    this.currentYear = new Date().getFullYear() + Number(value);
    this.timeHorizon = Number(value)
    var slideWidth = this.timeHorizon * 100 / 15;
    $(".slide.slide3").css("width", slideWidth + "%");
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, this.rVal, this.contribution)
    if (this.chartType == 'all') {
      this.futureInvestment = undefined
      this.newAllChart()
    } else if (this.chartType == 'weak') {
      this.weakChart()
    } else if (this.chartType == 'normal') {
      this.normalChart()
    } else if (this.chartType == 'strong') {
      this.strongChart()
    }
  }

  ngAfterViewInit() {
    this.nextEvent();
    this.prevEvent();
  }

  nextEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-next")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 5) {
        j++;
      }
      else {
        j = 3;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active none"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active  none"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active  none"
      }
    })
  }
  prevEvent() {
    let j = 3;

    const element = document.getElementsByClassName("owl-prev")

    element[0].addEventListener('click', function (e) {
      var elements = document.getElementsByClassName("custom-next-click");
      console.log(e)
      if (j !== 3) {
        j--;
      }
      else {
        j = 5;
      }
      console.log(j, elements[4])
      elements[0];
      if (j == 3) {
        elements[0].className = "custom-next-click active"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active  none"
        elements[3].className = "custom-next-click"
        elements[4].className = "custom-next-click"
      }
      if (j == 4) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click active"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active  none"
        elements[4].className = "custom-next-click"
      }
      if (j == 5) {
        elements[0].className = "custom-next-click"
        elements[1].className = "custom-next-click"
        elements[2].className = "custom-next-click active"
        elements[3].className = "custom-next-click active"
        elements[4].className = "custom-next-click active  none"
      }
    })
    //  this.activeDot=j;
    //  console.log(this.activeDot)
  }

  marketData(value) {
    let el = document.getElementById('chartContainer');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    // this.totalAmount = undefined
    this.weakInvestment = undefined
    this.normalInvestment = undefined
    this.strongInvestment = undefined
    this.chartType = value
    if (value == 'all') {
      this.newAllChart()
      this.futureInvestment = undefined
    } else if (value == 'weak') {
      $(".slide5").css("width", "0%");
      $('#range5').val('0')
      this.weakChart()
    } else if (value == 'normal') {
      $(".slide5").css("width", "50%");
      $('#range5').val('1')
      this.normalChart()
    } else if (value == 'strong') {
      $(".slide5").css("width", "100%");
      $('#range5').val('2')
      this.strongChart()
    }
  }

  normalData() {
    this.weakInvestment = undefined
    this.normalInvestment = undefined
    this.strongInvestment = undefined
    this.chartType = 'normal'
    $(".slide5").css("width", "50%");
    $('#range5').val('1')
    this.normalChart()
  }

  futureValueInvestment(P, t, rVal, monthlyContribution) {
    // console.log('------>Principal', P)
    // console.log('------>time', t)
    // console.log('------>rval', rVal)
    // console.log('------>monthlyContribution', monthlyContribution)

    let r = rVal / 100;
    let n = 12;
    // let t = 10;
    let rn = 1 + (r / n)
    // console.log('rn---->', rn)
    let rn2 = r / n
    // console.log('rn2---->', rn2)
    let nt = n * t
    // console.log('nt---->', nt)
    let x = Math.pow(rn, nt)
    // console.log('x---->', x)
    let onePart = P * x
    // console.log('one parrt---->', onePart)
    let secondHalf = x - 1
    // console.log('second half part---->', secondHalf)
    // let second = (secondHalf / rn2) * 100
    let second = (secondHalf / rn2) * monthlyContribution
    // console.log('second---->', second)
    let A = Math.round(onePart + second)
    // console.log({ A })

    // $(".slide.slide5").css("width", value + "%");
    // $("#range5").val(A)
    // var slideWidth = A * 100 / 100000;
    // $(".slider.slide5").css("width", slideWidth + "%");
    return A;
  }

  switchChart(data) {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
      },
      interactivityEnabled: false,
      axisX: {
        interval: 5,
        intervalType: 'year'
      },
      axisY: {
        valueFormatString: "#0,.",
        prefix: "$",
        suffix: "k",
        gridThickness: 0,
      },
      toolTip: {
        shared: true
      },
      data: data
    });
    chart.render();
  }

  newAllChart() {
    let weakrVal = 5
    //chart rerender
    let weakInvestment21 = this.futureValueInvestment(this.principalAmount, 1, weakrVal, this.contribution)
    let weakInvestment25 = this.futureValueInvestment(this.principalAmount, 4, weakrVal, this.contribution)
    let weakInvestment30 = this.futureValueInvestment(this.principalAmount, 9, weakrVal, this.contribution)
    let weakInvestment35 = this.futureValueInvestment(this.principalAmount, 14, weakrVal, this.contribution)
    this.weakInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, weakrVal, this.contribution)

    let normalrVal = 10
    let normalInvestment21 = this.futureValueInvestment(this.principalAmount, 1, normalrVal, this.contribution)
    let normalInvestment25 = this.futureValueInvestment(this.principalAmount, 4, normalrVal, this.contribution)
    let normalInvestment30 = this.futureValueInvestment(this.principalAmount, 9, normalrVal, this.contribution)
    let normalInvestment35 = this.futureValueInvestment(this.principalAmount, 14, normalrVal, this.contribution)
    this.normalInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, normalrVal, this.contribution)

    let strongrVal = 15
    let strongInvestment21 = this.futureValueInvestment(this.principalAmount, 1, strongrVal, this.contribution)
    let strongInvestment25 = this.futureValueInvestment(this.principalAmount, 4, strongrVal, this.contribution)
    let strongInvestment30 = this.futureValueInvestment(this.principalAmount, 9, strongrVal, this.contribution)
    let strongInvestment35 = this.futureValueInvestment(this.principalAmount, 14, strongrVal, this.contribution)
    this.strongInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, strongrVal, this.contribution)

    // this.totalAmount = weakInvestmentOfTime + normalInvestmentOfTime + strongInvestmentOfTime

    let data = [{
      name: "Weak",
      color: "#D3EBFB",
      markerSize: 0,
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: weakInvestment21 },
        { x: new Date(2025, 0), y: weakInvestment25 },
        { x: new Date(2030, 0), y: weakInvestment30 },
        { x: new Date(2035, 0), y: weakInvestment35 },
        { x: new Date(this.currentYear, 0), y: this.weakInvestment },
      ]
    },
    {
      name: "Normal",
      markerSize: 0,
      color: "#9FD7FA",
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: normalInvestment21 },
        { x: new Date(2025, 0), y: normalInvestment25 },
        { x: new Date(2030, 0), y: normalInvestment30 },
        { x: new Date(2035, 0), y: normalInvestment35 },
        { x: new Date(this.currentYear, 0), y: this.normalInvestment },
      ]
    },
    {
      name: "Strong",
      color: "#85ccfb",
      markerSize: 0,
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: strongInvestment21 },
        { x: new Date(2025, 0), y: strongInvestment25 },
        { x: new Date(2030, 0), y: strongInvestment30 },
        { x: new Date(2035, 0), y: strongInvestment35 },
        { x: new Date(this.currentYear, 0), y: this.strongInvestment },
      ]
    }]
    this.switchChart(data)
  }

  weakChart() {
    let rVal = 5
    //chart rerender
    let investment21 = this.futureValueInvestment(this.principalAmount, 1, rVal, this.contribution) //A is future value
    let investment25 = this.futureValueInvestment(this.principalAmount, 4, rVal, this.contribution) //A is future value
    let investment30 = this.futureValueInvestment(this.principalAmount, 9, rVal, this.contribution) //A is future value
    let investment35 = this.futureValueInvestment(this.principalAmount, 14, rVal, this.contribution) //A is future value
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, rVal, this.contribution) //A is future value
    let data = [{
      name: "Weak",
      color: "#D3EBFB",
      markerSize: 0,
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: investment21 },
        { x: new Date(2025, 0), y: investment25 },
        { x: new Date(2030, 0), y: investment30 },
        { x: new Date(2035, 0), y: investment35 },
        { x: new Date(this.currentYear, 0), y: this.futureInvestment },
      ]
    }]
    this.switchChart(data)
  }

  normalChart() {
    let rVal = 10
    //   //chart rerender
    let investment21 = this.futureValueInvestment(this.principalAmount, 1, rVal, this.contribution) //A is future value
    let investment25 = this.futureValueInvestment(this.principalAmount, 4, rVal, this.contribution) //A is future value
    let investment30 = this.futureValueInvestment(this.principalAmount, 9, rVal, this.contribution) //A is future value
    let investment35 = this.futureValueInvestment(this.principalAmount, 14, rVal, this.contribution) //A is future value
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, rVal, this.contribution) //A is future value

    let data = [{
      name: "Normal",
      markerSize: 0,
      color: "#9FD7FA",
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: investment21 },
        { x: new Date(2025, 0), y: investment25 },
        { x: new Date(2030, 0), y: investment30 },
        { x: new Date(2035, 0), y: investment35 },
        { x: new Date(this.currentYear, 0), y: this.futureInvestment },
      ]
    }]
    this.switchChart(data)
  }

  strongChart() {
    let rVal = 15
    //chart rerender
    let investment21 = this.futureValueInvestment(this.principalAmount, 1, rVal, this.contribution) //A is future value
    let investment25 = this.futureValueInvestment(this.principalAmount, 4, rVal, this.contribution) //A is future value
    let investment30 = this.futureValueInvestment(this.principalAmount, 9, rVal, this.contribution) //A is future value
    let investment35 = this.futureValueInvestment(this.principalAmount, 14, rVal, this.contribution) //A is future value
    this.futureInvestment = this.futureValueInvestment(this.principalAmount, this.timeHorizon, rVal, this.contribution) //A is future value
    let data = [{
      name: "Strong",
      color: "#85ccfb",
      markerSize: 0,
      type: "stackedArea",
      xValueType: "dateTime",
      showInLegend: true,
      // toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
      dataPoints: [
        { x: new Date(2020, 0), y: '' },
        { x: new Date(2021, 0), y: investment21 },
        { x: new Date(2025, 0), y: investment25 },
        { x: new Date(2030, 0), y: investment30 },
        { x: new Date(2035, 0), y: investment35 },
        { x: new Date(this.currentYear, 0), y: this.futureInvestment },
      ]
    }]
    this.switchChart(data)
  }

  selectRange(value) {
    let el = document.getElementById('chartContainer');
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

    if (value == '0') {
      $(".slide5").css("width", "0%");
      this.weakCheck = true
      this.normalCheck = false
      this.strongCheck = false
      this.marketData('weak')
    } else if (value == '1') {
      $(".slide5").css("width", "50%");
      this.normalCheck = true
      this.weakCheck = false
      this.strongCheck = false
      this.marketData('normal')
    } else if (value == '2') {
      $(".slide5").css("width", "100%");
      this.strongCheck = true
      this.weakCheck = false
      this.normalCheck = false
      this.marketData('strong')
    }
  }

  curreencyFormat(amount) {
    return new Intl.NumberFormat().format(amount)
  }

  normalByDefault() {
    $(".slide5").css("width", "50%");
    this.normalCheck = true
    this.weakCheck = false
    this.strongCheck = false
    this.normalData()
  }

}

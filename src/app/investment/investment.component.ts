import { Component, OnInit, HostListener } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
declare var $: any;
@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  constructor() { }
  performanceList: any = ['Sports Betting & Gaming', 'ESG / SRI', 'Cybersecurity', 'Cannabis', 'Cryptocurrency ', 'Mudani Flagship', 'Tech Titans', 'Managed (Conservative)', 'Managed (Moderate)', 'Managed (Aggressive)']
  @HostListener('window:scroll')
  scrollHandler() {
    $('text').parent().closest('g').addClass('active');
  }

  ngOnInit() {
    $(window).on('load ', function () {
      $('text').parent().closest('g').addClass('active');
    });
    $(document).ready(function () {
      $("g[aria-labelledby]").hide();
    })

    function am4themes_myTheme(target) {
      if (target instanceof am4core.ColorSet) {
        target.list = [
          am4core.color("#1CCBC0"),
          am4core.color("#54F1E7"),
          am4core.color("#0091DA"),
          am4core.color("#66BDE9"),
          am4core.color("#576973"),
          am4core.color("#082B3C")
        ];
      }
    }
    am4core.useTheme(am4themes_myTheme);
    // am4core.useTheme(am4themes_animated);
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    // Add data
    chart.data = [{
      "country": "Stocks",
      "litres": 501.9
    }, {
      "country": "Bonds",
      "litres": 301.9
    }, {
      "country": "ETFs",
      "litres": 201.1
    }, {
      "country": "Alternatives",
      "litres": 165.8
    }, {
      "country": "Cash",
      "litres": 139.9
    }, {
      "country": "Cryptocurrency",
      "litres": 50
    }];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    pieSeries.tooltip.disabled = true;


    pieSeries.slices.template.events.on("over", function (ev) {
      // console.log('hittt2', ev.target.dataItem.values.value.value)
      if (ev.target.dataItem.properties.category == 'Stocks') {
        document.getElementsByClassName("stock")[0].classList.add("active");
        document.getElementsByClassName("bond")[0].classList.remove("active");
        document.getElementsByClassName("etf")[0].classList.remove("active");
        document.getElementsByClassName("alternatives")[0].classList.remove("active");
        document.getElementsByClassName("cash")[0].classList.remove("active");
        document.getElementsByClassName("cryptocurrency")[0].classList.remove("active");
      } else if (ev.target.dataItem.properties.category == 'Bonds') {
        document.getElementsByClassName("bond")[0].classList.add("active");
        document.getElementsByClassName("stock")[0].classList.remove("active");
        document.getElementsByClassName("etf")[0].classList.remove("active");
        document.getElementsByClassName("alternatives")[0].classList.remove("active");
        document.getElementsByClassName("cash")[0].classList.remove("active");
        document.getElementsByClassName("cryptocurrency")[0].classList.remove("active");
      } else if (ev.target.dataItem.properties.category == 'ETFs') {
        document.getElementsByClassName("etf")[0].classList.add("active");
        document.getElementsByClassName("stock")[0].classList.remove("active");
        document.getElementsByClassName("bond")[0].classList.remove("active");
        document.getElementsByClassName("alternatives")[0].classList.remove("active");
        document.getElementsByClassName("cash")[0].classList.remove("active");
        document.getElementsByClassName("cryptocurrency")[0].classList.remove("active");
      } else if (ev.target.dataItem.properties.category == 'Alternatives') {
        document.getElementsByClassName("alternatives")[0].classList.add("active");
        document.getElementsByClassName("stock")[0].classList.remove("active");
        document.getElementsByClassName("bond")[0].classList.remove("active");
        document.getElementsByClassName("etf")[0].classList.remove("active");
        document.getElementsByClassName("cash")[0].classList.remove("active");
        document.getElementsByClassName("cryptocurrency")[0].classList.remove("active");
      } else if (ev.target.dataItem.properties.category == 'Cash') {
        document.getElementsByClassName("cash")[0].classList.add("active");
        document.getElementsByClassName("stock")[0].classList.remove("active");
        document.getElementsByClassName("bond")[0].classList.remove("active");
        document.getElementsByClassName("etf")[0].classList.remove("active");
        document.getElementsByClassName("alternatives")[0].classList.remove("active");
        document.getElementsByClassName("cryptocurrency")[0].classList.remove("active");
      } else if (ev.target.dataItem.properties.category == 'Cryptocurrency') {
        document.getElementsByClassName("cryptocurrency")[0].classList.add("active");
        document.getElementsByClassName("stock")[0].classList.remove("active");
        document.getElementsByClassName("bond")[0].classList.remove("active");
        document.getElementsByClassName("etf")[0].classList.remove("active");
        document.getElementsByClassName("alternatives")[0].classList.remove("active");
        document.getElementsByClassName("cash")[0].classList.remove("active");
      }
    });

    $(document).on('click', '.pieContent ul li', function () {
      $('.pieContent ul li').removeClass('active');
      $(this).addClass('active');
    });

    $(document).on('click', '.performanceSlider .performDrop,.sliderInput span', function () {
      $('.performanceSlider ul').toggle();
    });
    $(document).on('click', '.performanceSlider ul li', function () {
      var x = $(this).text();
      $('.performanceSlider .performDrop').attr('value', x);
      $('.performanceSlider ul').slideUp();
    });
  }

  onClick() {
    let slice1 = $("g [role=menuitem]")[0]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    // $( $("g [role=menuitem]")[0]).attr('transform', "translate(0,0) scale(1.05)")
    $(slice1).attr('transform', "translate(0,0) scale(1.05)")
  }

  onClick1() {
    let slice2 = $("g [role=menuitem]")[1]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    $(slice2).attr('transform', "translate(0,0) scale(1.05)")
  }

  onClick2() {
    let slice3 = $("g [role=menuitem]")[2]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    $(slice3).attr('transform', "translate(0,0) scale(1.05)")
  }

  onClick3() {
    let slice4 = $("g [role=menuitem]")[3]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    $(slice4).attr('transform', "translate(0,0) scale(1.05)")
  }

  onClick4() {
    let slice5 = $("g [role=menuitem]")[4]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    $(slice5).attr('transform', "translate(0,0) scale(1.05)")
  }

  onClick5() {
    let slice6 = $("g [role=menuitem]")[5]
    $("g [role=menuitem]").attr('transform', "translate(0,0)")
    $(slice6).attr('transform', "translate(0,0) scale(1.05)")
  }

}

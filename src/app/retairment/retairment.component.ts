import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retairment',
  templateUrl: './retairment.component.html',
  styleUrls: ['./retairment.component.scss']
})
export class RetairmentComponent implements OnInit {
  minValue: number;
  maxValue: number;
  amount: number;
  investedValue: string
  constructor() { }

  ngOnInit(): void {
  }

  minAge(searchValue) {
    this.minValue = searchValue
    this.saveamount(this.amount)
  }

  maxAge(searchValue) {
    this.maxValue = searchValue
    this.saveamount(this.amount)
  }

  saveamount(amount) {
    //let n =1, r = 10%  = 0.1
    this.amount = amount
    let t = this.maxValue - this.minValue
    // console.log('---->t', t)
    let rn = 1 + 0.1
    let nt = t * 1
    let x = Math.pow(rn, nt)
    if (amount == undefined) {
      this.investedValue = ''
    } else {
      let result = Math.trunc(this.amount * x)
      this.investedValue = new Intl.NumberFormat().format(result)
    }
  }

}

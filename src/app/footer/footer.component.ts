import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() item;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public scroll(id) {
    console.log('foortye', this.item)
    console.log('2345', id)
    localStorage.setItem('footerId', id)

    let footerid = localStorage.getItem('footerId')
    let el = document.getElementById(footerid);
    console.log({ el })
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  }

}

import { Component, OnInit } from '@angular/core';
import { AdminService } from './Service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa';

  public list;
  public p;
  constructor(public adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.getdata()
      .subscribe(res => {
        console.log(res);

        this.list = res;
      });


  }

}

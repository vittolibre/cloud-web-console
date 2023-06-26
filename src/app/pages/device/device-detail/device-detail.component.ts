import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  uid;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('uid');
  }

}

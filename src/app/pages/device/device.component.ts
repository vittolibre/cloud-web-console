import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../service/device.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  settings = {

    actions: {
      add: true,
      delete: true,
      edit:true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    add: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    columns: {
    
      identifier: {
        title: 'UID',
        type: 'string',
      },
      description: {
        title: 'Descrizione',
        type: 'string',
      },
      label: {
        title: 'Label',
        type: 'string',
        
      },
      edgeNode: {
        title: 'Nodo Edge',
        type: 'string',
        
      },
    },
  };

  constructor(
    private deviceService: DeviceService,
    private service: SmartTableData
  ) {
    this.deviceService.findAll().subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }

  editDevice(event){
    this.deviceService.updateDevice(event.newData).subscribe(res =>{
      event.confirm.resolve();
      this.deviceService.findAll().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  createDevice(event){
  }

  deleteDevice(event){
  }

}

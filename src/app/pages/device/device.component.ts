import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from '../../service/device.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  settings = {

    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    columns: {
    
      identifier: {
        title: 'UID',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            console.log(row.identifier)
          });
        }
        
      },
      description: {
        title: 'Descrizione',
        type: 'text',
      },
      label: {
        title: 'Label',
        type: 'text',
        
      },
      edgeNode: {
        title: 'Nodo Edge',
        type: 'text',
        valuePrepareFunction: (edgeNode) => {
          
          return edgeNode == 1 ? 'region 1' : 'region 2';
        },
      
      },
    },
  };

  constructor(
    private deviceService: DeviceService,
    private service: SmartTableData,
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

@Component({
  selector: 'button-view',
  template: `
  <button class="btn btn-outline-primary" (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router){}

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick() {
    this.router.navigate(['/pages/device-detail', { uid: this.renderValue }]);
  }
}

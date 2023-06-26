import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EdgeNodeService } from '../../service/edge-node.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-edge-node',
  templateUrl: './edge-node.component.html',
  styleUrls: ['./edge-node.component.scss']
})
export class EdgeNodeComponent implements OnInit {

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
      hostname: {
        title: 'Hostname',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            console.log(row.hostname)
          });
        }
      },
      label: {
        title: 'Label',
        type: 'string',
      },
      ipaddress: {
        title: 'Indirizzo IP',
        type: 'string',
        
      }
    },
  };

  constructor(
    private edgeNodeService: EdgeNodeService,
    private service: SmartTableData
  ) {
    this.edgeNodeService.findAll().subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }

  updateNode(event){
    this.edgeNodeService.updateNode(event.newData).subscribe(res =>{
      event.confirm.resolve();
      this.edgeNodeService.findAll().subscribe((data) => {
        this.source.load(data);
      });
    },
      (err: HttpErrorResponse) => {
        alert(err.message)
      });
  }

  createNode(event){
  }

  deleteNode(event){
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

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}
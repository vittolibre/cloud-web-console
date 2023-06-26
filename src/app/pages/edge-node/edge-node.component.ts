import { Component, OnInit } from '@angular/core';
import { EdgeNodeService } from '../../service/edge-node.service';
import { SmartTableData } from '../../@core/data/smart-table';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-edge-node',
  templateUrl: './edge-node.component.html',
  styleUrls: ['./edge-node.component.scss']
})
export class EdgeNodeComponent implements OnInit {

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
      hostname: {
        title: 'Hostname',
        type: 'string',
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

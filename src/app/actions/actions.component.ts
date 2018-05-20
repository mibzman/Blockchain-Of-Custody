import { Component, OnInit } from '@angular/core';
import { ContractService} from "../../services/services";
import { Action } from '../../models/models'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

	list: Action[];

  ID: number;

  constructor(
  	private ContractSer: ContractService,
    private router: Router,
    private ARouteSer: ActivatedRoute,
  	) { 

  	this.ARouteSer.params.subscribe(params => {
  	   this.ID = params['ID'];

  	   // this.ContractSer.GetEvidenceByID().subscribe(Evidence => {
  	   // 	// debugger;
  	   // 	this.list = Evidence.Actions
  	   // }, err => {
  	   // 	alert("an error occured")
  	   // })
  	});
  }

  ngOnInit() {
  }

  // Open(Evidence: Evidence){
    // this.router.navigate(['evidence/' + Evidence.ID]);
  // }

  NewAction(){
    console.log("wow")
    this.router.navigate(['evidence/' + this.ID + '/newAction']);
  }

}

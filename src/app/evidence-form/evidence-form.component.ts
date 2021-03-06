import { Component, OnInit } from '@angular/core';
import { ContractService } from "../../services/services";
import { Evidence, Actor } from '../../models/models'
import { Router } from '@angular/router';

@Component({
  selector: 'app-evidence-form',
  templateUrl: './evidence-form.component.html',
  styleUrls: ['./evidence-form.component.css']
})
export class EvidenceFormComponent implements OnInit {

	Evidence: Evidence = new Evidence()

  constructor(
  	private ContractSer: ContractService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  Submit(Action) {
    this.Evidence.Actions[0] = Action
    // console.log(this.Evidence)

  	this.ContractSer.NewEvidence(this.Evidence).subscribe(() => {
      // localStorage.setItem('precinct', this.Precinct.ID);
  		this.router.navigate(['/']);
  	}, err => {
  		alert("an error occured, try again later")
  	})
  }

}

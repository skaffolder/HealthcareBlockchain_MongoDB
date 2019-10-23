// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ReportService } from '../../services/report.service';
import { DoctorService } from '../../services/doctor.service';
// Import Models
import { Report } from '../../domain/healthcare-blockchain_db/report';
import { Doctor } from '../../domain/healthcare-blockchain_db/doctor';

// START - USED SERVICES
/**
* ReportService.create
*	@description CRUD ACTION create
*
* ReportService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* DoctorService.list
*	@description CRUD ACTION list
*
* ReportService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Report
 */
@Component({
    selector: 'app-report-edit',
    templateUrl: 'report-edit.component.html',
    styleUrls: ['report-edit.component.css']
})
export class ReportEditComponent implements OnInit {
    item: Report;
    listDoctor: Doctor[];
    model: Report;
    formValid: Boolean;

    constructor(
    private reportService: ReportService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Report();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.reportService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.doctorService.list().subscribe(list => this.listDoctor = list);
        });
    }


    /**
     * Save Report
     *
     * @param {boolean} formValid Form validity check
     * @param Report item Report to save
     */
    save(formValid: boolean, item: Report): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.reportService.update(item).subscribe(data => this.goBack());
            } else {
                this.reportService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}




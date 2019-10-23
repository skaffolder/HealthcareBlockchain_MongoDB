// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DoctorService } from '../../services/doctor.service';
import { ReportService } from '../../services/report.service';
import { PatientService } from '../../services/patient.service';
// Import Models
import { Doctor } from '../../domain/healthcare-blockchain_db/doctor';
import { Report } from '../../domain/healthcare-blockchain_db/report';
import { Patient } from '../../domain/healthcare-blockchain_db/patient';

// START - USED SERVICES
/**
* DoctorService.create
*	@description CRUD ACTION create
*
* ReportService.findBydoctor
*	@description CRUD ACTION findBydoctor
*	@param Objectid key Id della risorsa doctor da cercare
*
* DoctorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* PatientService.list
*	@description CRUD ACTION list
*
* DoctorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Doctor
 */
@Component({
    selector: 'app-doctor-edit',
    templateUrl: 'doctor-edit.component.html',
    styleUrls: ['doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
    item: Doctor;
    listDoctor: Doctor[];
    listPatients: Patient[];
    externalReport: Report[];
    model: Doctor;
    formValid: Boolean;

    constructor(
    private doctorService: DoctorService,
    private reportService: ReportService,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Doctor();
        this.externalReport = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.doctorService.get(id).subscribe(item => this.item = item);
                this.reportService.findByDoctor(id).subscribe(list => this.externalReport = list);
            }
            // Get relations
            this.patientService.list().subscribe(list => this.listPatients = list);
        });
    }

    /**
     * Check if an Patient is in  patients
     *
     * @param {string} id Id of Patient to search
     * @returns {boolean} True if it is found
     */
    containPatient(id: string): boolean {
        if (!this.item.patients) return false;
        return this.item.patients.indexOf(id) !== -1;
    }

    /**
     * Add Patient from Doctor
     *
     * @param {string} id Id of Patient to add in this.item.patients array
     */
    addPatient(id: string) {
        if (!this.item.patients)
            this.item.patients = [];
        this.item.patients.push(id);
    }

    /**
     * Remove an Patient from a Doctor
     *
     * @param {number} index Index of Patient in this.item.patients array
     */
    removePatient(index: number) {
        this.item.patients.splice(index, 1);
    }

    /**
     * Save Doctor
     *
     * @param {boolean} formValid Form validity check
     * @param Doctor item Doctor to save
     */
    save(formValid: boolean, item: Doctor): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.doctorService.update(item).subscribe(data => this.goBack());
            } else {
                this.doctorService.create(item).subscribe(data => this.goBack());
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




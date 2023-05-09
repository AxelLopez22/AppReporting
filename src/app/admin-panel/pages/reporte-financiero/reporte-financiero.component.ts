import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportServicesService } from '../../services/report-services.service';
import { ReporteFinancieroParameters } from 'src/app/models/models';

@Component({
  selector: 'app-reporte-financiero',
  templateUrl: './reporte-financiero.component.html',
  styleUrls: ['./reporte-financiero.component.scss']
})
export class ReporteFinancieroComponent implements OnInit{
  pdfSrc = "";
  parameterForm!: FormGroup;

  constructor(private fb: FormBuilder, private httpService: ReportServicesService){
    this.parameterForm = this.fb.group({
      fechaInicio: ['',[Validators.required]],
      fechaFin: ['',[Validators.required]],
      codEmpresa: ['',[Validators.required]],
      codSucursal: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  viewPdf(){
    let parameter: ReporteFinancieroParameters = {
      FechaInicio: this.parameterForm.get('fechaInicio')?.value.toISOString().slice(0, 10),
      FechaFin: this.parameterForm.get('fechaFin')?.value.toISOString().slice(0, 10),
      CodigoEmpresa: this.parameterForm.get('codEmpresa')?.value,
      CodigoSucursal: this.parameterForm.get('codSucursal')?.value
    }

    this.httpService.getUrlViewPdf(parameter).subscribe({
      next:(res:any) => {
        this.pdfSrc = res.data;
         const file = new Blob([res.data], { type: 'application/pdf' });
         this.pdfSrc = URL.createObjectURL(file);
        window.open(this.pdfSrc);
        console.log(this.pdfSrc);
      },
      error:(err:any) => {
        console.log(err);
      },
    });
    console.log(parameter);
  }
}

//https://localhost:7149/api/Report/ReporteEjemplo?FechaInicio=2022-09-01&FechaFin=2022-09-30&CodigoSucursal=08&CodigoEmpresa=01
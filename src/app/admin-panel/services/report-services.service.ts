import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReporteFinancieroParameters } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class ReportServicesService {
  url='https://localhost:7149/api/Report/'

  constructor(private http:HttpClient) { }

  getUrlViewPdf(model: ReporteFinancieroParameters){
    return this.http.get(this.url + `urlReporte?FechaInicio=${model.FechaInicio}&FechaFin=${model.FechaFin}
      &CodigoSucursal=${model.CodigoSucursal}&CodigoEmpresa=${model.CodigoEmpresa}`);
  }
}

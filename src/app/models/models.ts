import { DatePipe } from "@angular/common";

export interface SideNavItem{
    tittle: string;
    link: string;
    icon: string
}

export interface ReporteFinancieroParameters{
    FechaInicio: Date,
    FechaFin: Date,
    CodigoEmpresa: number,
    CodigoSucursal: number
}
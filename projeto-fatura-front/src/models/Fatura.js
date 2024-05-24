// src/models/Fatura.js

export class Fatura {
    constructor({
                    numeroCliente,
                    energiaEletricaKWh,
                    energiaSCEEICMSKWh,
                    energiaCompensadaGDIKWh,
                    energiaEletricaRS,
                    energiaSCEEsICMSRS,
                    contribIlumPublicaMunicipalRS,
                    energiaCompensadaGDIRS,
                }) {
        this.numeroCliente = numeroCliente;
        this.energiaEletricaKWh = energiaEletricaKWh;
        this.energiaSCEEICMSKWh = energiaSCEEICMSKWh;
        this.energiaCompensadaGDIKWh = energiaCompensadaGDIKWh;
        this.energiaEletricaRS = energiaEletricaRS;
        this.energiaSCEEsICMSRS = energiaSCEEsICMSRS;
        this.contribIlumPublicaMunicipalRS = contribIlumPublicaMunicipalRS;
        this.energiaCompensadaGDIRS = energiaCompensadaGDIRS;
    }

    get consumoEnergiaEletricaKWh() {
        return this.energiaEletricaKWh + this.energiaSCEEICMSKWh;
    }

    get valorTotalSemGDRS() {
        return this.energiaEletricaRS + this.energiaSCEEsICMSRS + this.contribIlumPublicaMunicipalRS;
    }

    get economiaGDRS() {
        return this.energiaCompensadaGDIRS;
    }
}

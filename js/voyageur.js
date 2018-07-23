"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(sonNom, sonPrix) {
        this._nom = sonNom;
        this._prix = sonPrix;
    }
    Sejour.prototype.setNom = function (sonNom) {
        this._nom = sonNom;
    };
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.setPrix = function (sonPrix) {
        this._prix = sonPrix;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var paris = new Sejour('Paris', 100);
var londres = new Sejour('Londres', 200);
var madrid = new Sejour('Madrid', 200);
var montreal = new Sejour('Montréal', 600);
var tabSejour = [paris, londres, madrid, montreal];
var SejourService = /** @class */ (function () {
    function SejourService(desSejours) {
        this._sejours = desSejours;
    }
    SejourService.prototype.rechercheSejourParNom = function () {
    };
    return SejourService;
}());

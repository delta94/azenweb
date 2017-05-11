import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as redux from 'redux';
import {Action, Dispatch, Middleware, Store as ReduxStore} from 'redux';
import { Provider } from 'react-redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {Button} from 'react-bootstrap';
import "es6-string-polyfills";

import {

    //Models
    ZRecursoModel,
    ZCampoModel,

    //Components
    ZCampo,
    ZRecurso,

    //Constants
    RecursosConstants
} from "./modules/recursos/";

let terRecurso = `{
   "ven": {
      "descr": "Documentos",
      "nomTbl": "#/azenctb/ctbdoc",
      "nomRcrZoom": "^/ctbdoc.zf2",
      "nfils": 16,
      "ncols": 70,
      "fil": 1,
      "col": 1,
      "modo": 29,
      "cmdsBtn": 7682,
      "cmdsLE": 8368,
      "numLinsEnc": 0,
      "numLinsDatos": 0,
      "ctx": 41295,
      "nfilsrx": 0,
      "ncolsrx": 0
   },
   "camps": [
      {
         "etq": "Código  :",
         "filEtq": 0,
         "colEtq": 0,
         "nomCmp": "codigo",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 4,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Nombre  :",
         "filEtq": 1,
         "colEtq": 0,
         "nomCmp": "nombre",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 40,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Comprobante : ",
         "filEtq": 2,
         "colEtq": 0,
         "nomCmp": "comprobante",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 2,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@RTipo de numeración",
         "filEtq": 4,
         "colEtq": 0,
         "nomCmp": "NULL",
         "filCmp": 7,
         "colCmp": 20,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "( ) Autom tica",
         "filEtq": 5,
         "colEtq": 1,
         "nomCmp": "numeracion",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 2,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "( ) Manual",
         "filEtq": 6,
         "colEtq": 1,
         "nomCmp": "numeracion",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 0,
         "posBit": 1,
         "claseInd": 2,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@RCorte de numeración",
         "filEtq": 4,
         "colEtq": 21,
         "nomCmp": "NULL",
         "filCmp": 7,
         "colCmp": 42,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "( ) Anual",
         "filEtq": 5,
         "colEtq": 22,
         "nomCmp": "corte",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 2,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "( ) Mensual",
         "filEtq": 6,
         "colEtq": 22,
         "nomCmp": "corte",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 0,
         "posBit": 1,
         "claseInd": 2,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@RConsecutivo anual",
         "filEtq": 4,
         "colEtq": 43,
         "nomCmp": "NULL",
         "filCmp": 7,
         "colCmp": 61,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "No :",
         "filEtq": 6,
         "colEtq": 46,
         "nomCmp": "cons_anual",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@RConsecutivos mensuales",
         "filEtq": 8,
         "colEtq": 0,
         "nomCmp": "NULL",
         "filCmp": 14,
         "colCmp": 61,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Inicial :",
         "filEtq": 9,
         "colEtq": 1,
         "nomCmp": "cons_00",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Enero   :",
         "filEtq": 10,
         "colEtq": 1,
         "nomCmp": "cons_01",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Febrero :",
         "filEtq": 11,
         "colEtq": 1,
         "nomCmp": "cons_02",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Marzo   :",
         "filEtq": 12,
         "colEtq": 1,
         "nomCmp": "cons_03",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Abril   :",
         "filEtq": 13,
         "colEtq": 1,
         "nomCmp": "cons_04",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Mayo    :",
         "filEtq": 9,
         "colEtq": 21,
         "nomCmp": "cons_05",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Junio   :",
         "filEtq": 10,
         "colEtq": 21,
         "nomCmp": "cons_06",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Julio   :",
         "filEtq": 11,
         "colEtq": 21,
         "nomCmp": "cons_07",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Agosto  :",
         "filEtq": 12,
         "colEtq": 21,
         "nomCmp": "cons_08",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Sep/bre :",
         "filEtq": 13,
         "colEtq": 21,
         "nomCmp": "cons_09",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Octubre :",
         "filEtq": 9,
         "colEtq": 41,
         "nomCmp": "cons_10",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Nov/bre :",
         "filEtq": 10,
         "colEtq": 41,
         "nomCmp": "cons_11",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Dic/bre :",
         "filEtq": 11,
         "colEtq": 41,
         "nomCmp": "cons_12",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Cierre  :",
         "filEtq": 12,
         "colEtq": 41,
         "nomCmp": "cons_13",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "Archivo formato :",
         "filEtq": 15,
         "colEtq": 0,
         "nomCmp": "formato",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 8,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 65,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 16,
         "numDec": 0
      },
      {
         "etq": "Impresora :",
         "filEtq": 15,
         "colEtq": 35,
         "nomCmp": "impresora",
         "filCmp": 999999,
         "colCmp": 999999,
         "lonv": 14,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@@H",
         "filEtq": 17,
         "colEtq": 0,
         "nomCmp": "NULL",
         "filCmp": 999999,
         "colCmp": 0,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      },
      {
         "etq": "@@B{^T}-Formato",
         "filEtq": 999999,
         "colEtq": 999999,
         "nomCmp": "NULL",
         "filCmp": 20,
         "colCmp": 252,
         "lonv": 0,
         "posBit": 0,
         "claseInd": 0,
         "tipo": 0,
         "lon": 0,
         "noEnTabla": 0,
         "modo": 0,
         "numDec": 0
      }
   ],
   "doms": [
      {
         "nom": "nombre",
         "minimo": "NULL",
         "maximo": "NULL",
         "defecto": "NULL",
         "plantilla": "NULL",
         "siRequerido": 1,
         "siMemoriza": 0
      },
      {
         "nom": "comprobante",
         "minimo": "NULL",
         "maximo": "NULL",
         "defecto": "NULL",
         "plantilla": "NULL",
         "siRequerido": 1,
         "siMemoriza": 0
      },
      {
         "nom": "numeracion",
         "minimo": "NULL",
         "maximo": "NULL",
         "defecto": "1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "corte",
         "minimo": "NULL",
         "maximo": "NULL",
         "defecto": "1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_anual",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_00",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_01",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_02",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_03",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_04",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_05",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_06",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_07",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_08",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_09",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_10",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_11",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_12",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      },
      {
         "nom": "cons_13",
         "minimo": "1",
         "maximo": "NULL",
         "defecto": " 1",
         "plantilla": "NULL",
         "siRequerido": 0,
         "siMemoriza": 0
      }
   ],
   "refs": [
      {
         "nomTblFor": "#/azenctb/ctbcte",
         "alias": "comprobante",
         "junt": [
            {
               "nomCmp": "comprobante"
            }
         ],
         "nomRcrZoom": "^/ctbcte.zf2",
         "descs": [
            {
               "etq": "",
               "filEtq": 2,
               "colEtq": 20,
               "nomCamFor": "nombre",
               "filCmp": 999999,
               "colCmp": 999999,
               "lonv": 40,
               "modo": 0
            }
         ],
         "debil": 0
      },
      {
         "nomTblFor": "à/zdim/zdim",
         "alias": "impresora",
         "junt": [
            {
               "nomCmp": "impresora"
            }
         ],
         "nomRcrZoom": "à/zdim/zdim.zf2",
         "descs": [],
         "debil": 0
      }
   ]
}
`; 

let recursoTerceroObj = JSON.parse(terRecurso) as ZRecursoModel;

ReactDOM.render(
    <ZRecurso zRecursoModel={recursoTerceroObj}/>,
    document.getElementById("app-container")
);
import * as React from 'react';

import {
    FormGroup,
    FormControl,
    Row,
    Col,
    ControlLabel
} from 'react-bootstrap';

import {
    ZCampoModel
} from "../model";

import {
    RecursosConstants
} from "../constants";

import ZTextbox from './ZTextbox';
import ZRadio from './ZRadio';
import ZCheckbox from './ZCheckbox';
import ZRegion from './ZRegion';

interface OwnProperties
{
    zCampoModel:ZCampoModel;    

    esCheckboxAislado?:boolean; //Si es checkbox group = true, sirve un sólo checkbox = false. Ej. ter.noActivo    
    zcamposEnRegionList?:Array<ZCampoModel>;    
}

export default class ZCampo extends React.Component<OwnProperties, void>
{    
    private isRegion:boolean = false;

    constructor(props:any){
        super(props);
        console.log("construye zcampo");
    }    

    render(){

           const { 
            zCampoModel, 
            esCheckboxAislado,
            zcamposEnRegionList } = this.props;

        const claseInd:number = zCampoModel.claseInd;

        let zCampoComponent = this.getZCampoComponent();
        
        return (
                <Col md={6}>
                    {this.getZCampoComponent()}
                </Col>           
        );
    }

    getZCampoComponent():any
    {
        const { 
            zCampoModel, 
            esCheckboxAislado,
            zcamposEnRegionList } = this.props;

        const claseInd:number = zCampoModel.claseInd;
        const esRegion:boolean = zcamposEnRegionList && zcamposEnRegionList.length > 0;        

        if(esRegion){
            return <ZRegion
                        zCampoRegion={zCampoModel} 
                        zcamposEnRegionList={zcamposEnRegionList} />;
        }
        else if(claseInd == RecursosConstants.CAMPO_TEXTO){
            return <ZTextbox zCampoModel={zCampoModel}/>;
        }    
        else if(claseInd == RecursosConstants.CAMPO_RADIO && esCheckboxAislado){
            return <ZCheckbox zCampoModel={zCampoModel}/>;
        }            
        else if(claseInd == RecursosConstants.CAMPO_RADIO){
            return <ZRadio zCampoModel={zCampoModel}/>;
        }
        else if(claseInd == RecursosConstants.CAMPO_CHECKBOX){
            return <ZCheckbox zCampoModel={zCampoModel}/>;
        }        
    }    
}
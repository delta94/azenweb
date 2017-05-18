import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Row,    
    Col,
    Form,
    Modal,
    Glyphicon,
    Navbar,
    Nav,
    MenuItem,
    NavItem,
    NavDropdown,
    Button
} from 'react-bootstrap';

import {
    ZCampoModel,
    ZRecursoModel,
    ZRecursoViewModel
} from "../model";

import {
    RecursosConstants
} from "../constants";

import ZRecurso from './ZRecurso';

interface OwnProps
{
    recursoActivo?:ZRecursoViewModel;    
    mapRecursosActivos: Map<string, ZRecursoViewModel>;
    cerrarVentanaRecursoFn:(recursoId:string)=>void
    zcamposForma?:Array<ZCampoModel>;
}


export default class ZAreaTrabajo extends React.Component<OwnProps, undefined>
{
    private divAreaTrabajo:HTMLDivElement;

    private zcamposForma:Array<ZCampoModel> = [];
    private zcamposBotonesComandos: Array<ZCampoModel> = [];
    private zcamposBotonesLineaList: Array<ZCampoModel> = [];            
    
    private recursosIterable: IterableIterator<ZRecursoModel>;

    constructor(props:OwnProps){

        super(props);        

        this.cerrarVentanaRecurso = this.cerrarVentanaRecurso.bind(this);

        console.log("Construye area trabajo");
    }

    render(){
        
        
        return (            
            <div>

                <style>{"\
                    .modal-container {\
                        position: relative;\
                    }\
                    .modal-container .modal, .modal-container .modal-backdrop {\
                        position: absolute;\
                    }\
                "}</style>

                <style>{"\
                    .modal-body {\
                        padding: 0px !important;\
                    }\
                "}</style>
                <Row>        
                    <Col md={12}>     
                        <div ref={(divTrabajo:HTMLDivElement)=>{
                                this.divAreaTrabajo = divTrabajo;
                            }}>
                        {
                                
                                //Todo, revisar referencia a zcamposForma, puede estar causando 
                                //que se repinte todo el formulario
                                this.getRecursosActivos().map((recursoAPintar:ZRecursoViewModel, index:number)=>{
                                    let key:string = recursoAPintar.ven.nomTbl; //(index+1).toString(); //recursoAPintar.ven.nomTbl.replace("#", "").replace("/", "").replace("/", "");
                                    return <ZRecurso    
                                        key={key}                                        
                                        activo={recursoAPintar.activo}
                                        parentKey={key}
                                        zRecursoModelWeb={recursoAPintar}
                                        zcamposForma={recursoAPintar.camps}
                                        onHide={this.cerrarVentanaRecurso}
                                        container={this.divAreaTrabajo}/>}
                                )
                            }                            
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

    componentWillMount(){
        console.log("will mount");
        //this.clasificarCamposAPintar();                
    }

    getRecursosEnFormaIds():Array<string>{  

        let { mapRecursosActivos } = this.props;

        let recursosActivosIds:Array<string> = new Array<string>();          

        mapRecursosActivos.forEach((zrecursoEnFor:ZRecursoViewModel, recursoIdEnFor:string)=>{
            if(zrecursoEnFor.activo == true){
                recursosActivosIds.push(recursoIdEnFor);
                return true;
            }
        });   

        return recursosActivosIds;
    }

    getRecursosActivos():Array<ZRecursoViewModel>{  

        let { mapRecursosActivos } = this.props;

        let recursosActivos:Array<ZRecursoViewModel> = new Array<ZRecursoViewModel>();          

        mapRecursosActivos.forEach((zrecursoEnFor:ZRecursoViewModel, recursoIdEnFor:string)=>{
            recursosActivos.push(zrecursoEnFor);
        });   

        return recursosActivos;
    }

    getRecursoAPintar(){

        let { mapRecursosActivos } = this.props;
        let recursosAPintar:Array<ZRecursoViewModel> = [];        
        let keysIterable: IterableIterator<string> = mapRecursosActivos.keys();
        for (let i = 0; i < mapRecursosActivos.size; i++) {
            let zrecursoModelWebForKey: string = keysIterable.next().value;
            if(mapRecursosActivos.get(zrecursoModelWebForKey).activo){
                
            }
        }        
    }


    cerrarVentanaRecurso(recursoId:string){

        this.props.cerrarVentanaRecursoFn(recursoId);

        /*
        let hashStackRecursosVisibility: Map<string, boolean> = this.state.hashStackRecursosVisibility;
        hashStackRecursosVisibility.set(recursoId, false);

        this.setState({
            hashStackRecursosVisibility:hashStackRecursosVisibility
        });
        */
    }    


    clasificarCamposAPintar(){        
        
        if(!this.props.recursoActivo){
            return;
        }
        
        let zcamposForma:Array<ZCampoModel> = new Array<ZCampoModel>();

        let zcampoAPintar:ZCampoModel;
        for(let i=0; i<this.props.recursoActivo.camps.length; i++){

            zcampoAPintar = this.props.recursoActivo.camps[i];
            if(zcampoAPintar.etq.startsWith("@@B") || zcampoAPintar.etq.startsWith("@B")) //Botón
            {
                this.zcamposBotonesComandos.push(zcampoAPintar);
                continue;
            }
            if(zcampoAPintar.etq.startsWith("@L"))//Botones línea comandos
            {            
                this.zcamposBotonesLineaList.push(zcampoAPintar);
                continue;
            }
            if(zcampoAPintar.etq.startsWith("@@H"))//Línea horizontal
            {                
                continue;
            }            

            zcamposForma.push(zcampoAPintar);
        }

        return zcamposForma;
    }
}
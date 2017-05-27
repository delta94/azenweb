import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    CSSProperties
} from 'react';

import {
    Row,    
    Col,
    Form,
    Button, 
    Modal,
    Panel 
} from 'react-bootstrap';

import * as ZCommon from "../../zcommon";
import {
    ZRecursoViewModel,
    ZCampoModel,
} from "../../zcommon";

import ZBarraBotones from './ZBarraBotones';
import ZRecursoZoom from './ZRecursoZoom';

interface OwnProperties
{    
    onCerrarVentanaFn:(zRecursoViewModel:ZRecursoViewModel)=>void;
    
    zRecursoViewModel:ZRecursoViewModel;
    zcamposBotonesComandos: Array<ZCampoModel>;
    zcamposBotonesLineaList: Array<ZCampoModel>;   

    cssPropertiesFromParent:CSSProperties;
}

export default class ZVentanaRecursoZoom extends React.Component<OwnProperties, void>
{
    private zRecursoViewModel:ZRecursoViewModel;
    private zcamposBotonesComandos: Array<ZCampoModel> = [];
    private zcamposBotonesLineaList: Array<ZCampoModel> = [];            

    constructor(props:OwnProperties){        
        super(props);
        this.onCerrarVentana = this.onCerrarVentana.bind(this);
    }
    
    render(){        

        this.renderInitialize();

        return (                            
                <Modal 
                    id={this.zRecursoViewModel.ven.nomTbl}
                    style={this.props.cssPropertiesFromParent}

                    onHide={this.onCerrarVentana} 
                    show={true}
                    backdrop={"static"}
                    enforceFocus={true}
                    autoFocus={true}                    
                    bsSize={"small"}
                    aria-labelledby="contained-modal-title">    

                    <Modal.Header className="bg-primary" closeButton>
                        <Modal.Title>{this.zRecursoViewModel.ven.descr}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ZRecursoZoom zRecursoViewModel={this.zRecursoViewModel}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <ZBarraBotones
                            zcamposBotonesComandosList={this.zcamposBotonesComandos}
                            zcamposBotonesLineaList={this.zcamposBotonesLineaList}/>
                    </Modal.Footer>
                </Modal>                

        );
    }

    onCerrarVentana(){
        this.props.onCerrarVentanaFn(this.props.zRecursoViewModel);
    }

    renderInitialize(){        
        this.zRecursoViewModel = this.props.zRecursoViewModel;
        this.zcamposBotonesComandos = this.props.zcamposBotonesComandos;
        this.zcamposBotonesLineaList = this.props.zcamposBotonesLineaList;
    }
}
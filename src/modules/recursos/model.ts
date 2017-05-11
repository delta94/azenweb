class ZRecursoModel
{
    ven: ZVentanaModel;
    camps: Array<ZCampoModel>;
    doms: Array<ZDominioModel>;
    refs: Array<ZReferenciaModel>;

    sayHello(){
        alert("hello  i am " + this.ven.descr);
    }
}

class ZVentanaModel
{   
    descr: string;
    nomTbl: string;
    nomRcrZoom: string;
    nfils: number;
    ncols: number;
    fil: number;
    col: number;
    modo: number;
    cmdsBtn: number;
    cmdsLE: number;
    numLinsEnc: number;
    numLinsDatos: number;
    ctx: number;
    nfilsrx: number;
    ncolsrx: number;
}

class ZCampoModel
{
    etq: string;
    filEtq: number;
    colEtq: number;
    nomCmp: string;
    filCmp: number;
    colCmp: number;
    lonv: number;
    posbit: number;
    claseInd: number;
    tipo: number;
    lon: number;
    noEnTabla: number;
    modo: number;
    numDec: number; 
}

class ZDominioModel
{
    nom: string;
    minimo: string;
    maximo: string;
    defecto: string;
    plantilla: string;
    siRequerido: number;
    siMemoriza: number;
}

class ZReferenciaModel
{
    public nomTblFor: string;
    public alias: string;
    public nomRcrZoom: string;
    public debil: number;

    public junt:Array<ZJunturaModel>;
    public descs: Array<ZDescripcionReferenciaModel>;    
}

class ZDescripcionReferenciaModel
{
    etq: string;
    filEtq: number;
    colEtq: number;
    nomCamFor: string;
    filCmp: number;
    colCmp: number;
    lonv: number;
    modo: number;
}

class ZJunturaModel
{
    public nomCmp: string;
}

export 
{ 
    ZRecursoModel,
    ZVentanaModel,
    ZCampoModel,
    ZDominioModel,
    ZReferenciaModel,
    ZJunturaModel,
    ZDescripcionReferenciaModel
}
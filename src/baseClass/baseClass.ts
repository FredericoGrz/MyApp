export class BaseClass{
    
    //VARIAVEIS 
    private _isDetalhar : boolean;
    private _isIncluir : boolean;
    private _isAlterar : boolean;
    private _isExcluir : boolean;
    private _semAcao : boolean;
    private _acao : string;
    
    //PROPRIEDADES
    public get isDetalhar() : boolean {
        return this._isDetalhar;
    }
    public get isIncluir() : boolean {
        return this._isIncluir;
    }
    public get isAlterar() : boolean {
        return this._isAlterar;
    }
    public get isExcluir() : boolean {
        return this._isExcluir;
    }
    //PROPRIEDADES
    public get semAcao() : boolean {
        return this._semAcao;
    }
    public get acao() : string {
        return this._acao;
    }

    //CONSTANTES
    public get DETALHAR() : string {
        return 'Detalhar';
    }
    public get INCLUIR() : string {
        return 'Incluir';
    }
    public get ALTERAR() : string {
        return 'Alterar';
    }
    public get EXCLUIR() : string {
        return 'Excluir';
    }
    
    //FUNÇÕES
    public verificarAcao(acao : string = null){
        if (acao == this.ALTERAR){
            this._isAlterar = true;
            this._isDetalhar = false;
            this._isExcluir = false;
            this._isIncluir = false;
            this._semAcao = false;
            this._acao = acao;
        }
        else if(acao == this.DETALHAR){
            this._isDetalhar = true;
            this._isAlterar = false;
            this._isExcluir = false;
            this._isIncluir = false;
            this._semAcao = false;
            this._acao = acao;
        }
        else if (acao == this.EXCLUIR){
            this._isExcluir = true;
            this._isDetalhar = false;
            this._isAlterar = false;
            this._isIncluir = false;
            this._semAcao = false;
            this._acao = acao;
        }
        else if (acao == this.INCLUIR){
            this._isIncluir = true;
            this._isExcluir = false;
            this._isDetalhar = false;
            this._isAlterar = false;
            this._semAcao = false;
            this._acao = acao;
        }
        else{
            this._semAcao = true;
            this._isIncluir = true;
            this._isExcluir = false;
            this._isDetalhar = false;
            this._isAlterar = false;
            this._acao = null;
        }
    }
    
    
     
}